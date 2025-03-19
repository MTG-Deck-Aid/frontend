'use client';

import { createContext, useContext, useState } from 'react';

const ViewDeckContext = createContext(false);

export function ViewDeckContextProvider({ children }) {
    /**
     * This context provider will allow components wrapped by it to access the page's context.
     * The context will be two states: either edit or view
     * This context can be updated via the function toggleIsEditMode
     * Could be expanded to include additional deck information. This additional functionality could also be split into seperate context provider
     * NOTE that depending on the scope of the context. It may make sense to put it in a layout.jsx file.
     * i.e., if making context for card-suggestions/[slug] and view-import-deck/[slug], context could be placed in a shared layout.jsx file
     * see: https://nextjs.org/docs/app/building-your-application/routing/route-groups#opting-specific-segments-into-a-layout for more info
     */
    const [isEditMode, setIsEditMode] = useState(true);
    const [deckInput, setDeckInput] = useState('');
    const [deckList, setDeckList] = useState({});
    const [deckName, setDeckName] = useState(urlName);
    const [loading, setLoading] = useState(false);

    async function fetchUserDeck() {
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
        deckList.forEach(card => {
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


    function toggleIsEditMode() {
        setIsEditMode((isEditMode ? false : true));
    }

    function toggleLoading() {
        setLoading((loading ? false : true));
    }

    /** DEBUGGER FUNCTION */
    function printContext() {
        console.log("\n\n---- View Deck Context ----");
        console.log("isEditMode: ", isEditMode);
        console.log("deckInput: ", deckInput);
        console.log("deckList: ", deckList);
        console.log("deckName: ", deckName);
        console.log("loading: ", loading);

    }

    // On page load, fetch the deck from the backend
    useEffect(() => {
        if (urlId !== -1) {
            console.log("Fetching deck from backend");
            fetchUserDeck().then(deck => {
                console.log("Populating deck list");
                setDeckInput(populateDeckList(deck));
            });
        }
    }, []);


    // Print the context whenever the context changes
    useEffect(() => {
        printContext();
    }, [deckInput, deckList, deckName, isEditMode]);

    return (
        <ViewDeckContext.Provider value={{ isEditMode, toggleIsEditMode, deckInput, setDeckInput, deckList, setDeckList, deckName, setDeckName, printContext, loading, toggleLoading }}>
            {children}
        </ViewDeckContext.Provider>
    );
}



export function useViewDeckContext() {
    /**
     * useViewDeckContext takes in no parameters and returns the context of the page.
     * This will be a string 
     */
    const context = useContext(ViewDeckContext);
    if (!context) {
        throw new Error('useViewDeckContext must be used within a ViewDeckContextProvider');
    }
    return context;
}