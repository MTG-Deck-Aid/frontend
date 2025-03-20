"use client";
import { useSearchParams, useParams } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';

const UserDeckContext = createContext();
export default function UserDeckContextProvider({ children }) {
    //useParams and useSearchParams are the ideal way for getting url parameters in nextJS
    const urlName = useParams().slug;
    const urlId = useSearchParams().get("deckId");
    /** States to be held */
    const [deckInput, setDeckInput] = useState(''); //the current Input in the deck (SHOULD NOT BE HERE)
    const [deckList, setDeckList] = useState({}); //the user's deckList
    const [deckName, setDeckName] = useState(urlName); //the name of the user's deck
    const [commander, setCommander] = useState(''); //the current commander?

    async function fetchUserDeck() {
        //Fetches the user's deck information given the url parameter
        // Send request to Server Side JS
        const response = await fetch(`/api/decks/deck?deckId=${urlId}`, {
            method: 'GET',
        });
        
        // Await the response from server side JS
        const data = await response.json();
        return data.deck; // Return only the data
    }

    function populateDeckList(deckList) {
        let formattedDeckList = [];
        // Finds the total quantity of cards in the deck for each card,
        // and adds that to the card object
        deckList.map((card) => {
            let cardIndex = formattedDeckList.findIndex((element) => element.name === card.name);
            if (cardIndex === -1) {
                formattedDeckList.push({ name: card.name, quantity: 1 });
            } else {
                formattedDeckList[cardIndex].quantity += 1;
            }
        });

        // Convert the deck list into "quantity name" string
        const deckListString = formattedDeckList.map(card => `${card.quantity} ${card.name}`).join('\n');
        console.log(deckListString);
        return deckListString;
    }

    // On page load, fetch the deck from the backend
    useEffect(() => {
        if (urlId !== -1) {
            console.log("Fetching deck from backend");
            fetchUserDeck().then(deck => {
                if (deck) {
                    console.log("Populating deck list");
                    setDeckInput(populateDeckList(deck));
                }
            });
        }
    }, []);

    // Print the context whenever the context changes
    // useEffect(() => {
    //     printContext();
    // }, [deckInput, deckList, deckName]);

    /** Function to parse the deck input into a json object.
     * @param {string} text - The deck input text.
     * @returns {object} - The parsed deck object.
     * @example
     * // Example usage:
     * parseDeckInput(`4 Card Name\n1 Another Card`)
     * 
     * // Returns:
     * {
     *   cards: [
     *    { quantity: 4, cardName: 'Card Name' },
     *    { quantity: 1, cardName: 'Another Card' },
     *    etc...
     *   ]
     * }
     */
    const parseDeckInput = (text) => {
        // Split the text into individual lines.
        const lines = text.split('\n');
        let deckLines = [];
        let currentSection = 'deck'; // default section if none are specified
        let hasExplicitSections = false;

        // First pass: check if any explicit section headings exist.
        lines.forEach(line => {
            const trimmed = line.trim();
            if (/^(Commander|Deck|Sideboard|About):?/i.test(trimmed)) {
                hasExplicitSections = true;
            }
        });

        // Second pass: assign lines to sections.
        // (If headings like "Commander:" or "Sideboard:" appear, we use them to ignore unwanted cards.)
        lines.forEach(line => {
            const trimmed = line.trim();
            if (trimmed === '') return;

            // Update currentSection based on header lines.
            if (/^(Commander):?/i.test(trimmed)) {
                currentSection = 'commander';
                return;
            } else if (/^(Deck):?/i.test(trimmed)) {
                currentSection = 'deck';
                return;
            } else if (/^(Sideboard):?/i.test(trimmed)) {
                currentSection = 'sideboard';
                return;
            } else if (/^(About):?/i.test(trimmed)) {
                // Skip sections like About.
                currentSection = 'ignore';
                return;
            }

            // Only add lines that belong to the deck section.
            if (currentSection === 'deck') {
                deckLines.push(trimmed);
            }
        });

        // Regex to capture the quantity and card name.
        // This pattern matches a number at the start, then the card name,
        // and ignores any set identifiers or trailing numbers.
        const cardRegex = /^(\d+)\s+(.+?)(?=\s+\([^)]+\)|\s+\d+$|$)/;
        const parsedCards = [];

        deckLines.forEach(line => {
            const match = line.match(cardRegex);
            if (match) {
                const quantity = parseInt(match[1], 10);
                let cardName = match[2].trim();
                // Remove any trailing number that might remain
                cardName = cardName.replace(/\s+\d+$/, '');
                parsedCards.push({ quantity, cardName });
            }
        });

        return { cards: parsedCards };
    };

    /** Function to convert a deckList object into a string for populating the deck input field.
     * @param {object} deckList - The deck list object.
     * @returns {string} - The deck list as a string.
     * @example
     * // Example usage:
     * deckListToCardsJson({cards: [{ quantity: 4, cardName: 'Card Name' }, { quantity: 1, cardName: 'Another Card' }]})
     * // Returns:
     * `4 Card Name\n1 Another Card`
     */
    const deparseDeckList = (cards) => {
        const lines = [];
        cards.forEach(card => {
            lines.push(`${card.quantity} ${card.cardName}`);
        });
        return lines.join('\n');
    }

    /** Function that takes JSON deckList and verifies the cards in the deck.
     *  Returns a list of invalid card names.
     * @param {object} deckList - The deck list object.
     * @returns {array} - The list of invalid card names.
     * @example
     * // Example usage:
     * verifyDeckList({cards: [{ quantity: 4, cardName: 'Bad Card Name' }, { quantity: 1, cardName: 'Good Card Name' }]})
     * // Returns:
     * ['Bad Card Name']
     */
    const verifyDeckList = async (deckList) => {
        const names = deckList.cards.map(card => card.cardName);
        const response = await fetch('/api/decks/verify-cards', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ names: names })
        });

        const data = await response.json();
        return data.invalidNames;
    }

    /** DEBUGGER FUNCTION */
    function printContext() {
        console.log("\n\n---- User Deck Context ----");
        console.log("deckInput: ", deckInput);
        console.log("deckList: ", deckList);
        console.log("deckName: ", deckName);
        console.log("commander: ", commander);
        console.log("---- User Deck Context ----\n\n");
    }

    return (
        <UserDeckContext.Provider value={{
            deckInput, setDeckInput,
            deckList, setDeckList,
            deckName, setDeckName,
            commander, setCommander,
            parseDeckInput, deparseDeckList,
            verifyDeckList, printContext
        }}>
            {children}
        </UserDeckContext.Provider>
    )
}

export function useUserDeckContext(){
    const context = useContext(UserDeckContext);
    if (!context) {
        throw new Error('useUserDeckContext must be used within a UserDeckContextProvider');
    }
    return context;
    /**
     * context will contain:
     * {deckInput, setDeckInput,
        deckList, setDeckList,
        deckName, setDeckName,
        commander, setCommander}
     */
}