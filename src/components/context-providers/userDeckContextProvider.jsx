"use client";
import { createContext, useContext, useEffect, useState } from 'react';
const UserDeckContext = createContext(false);

export function UserDeckContextProvider({ urlName = "New Deck", urlId = -1, children }){
    const [deckInput, setDeckInput] = useState('');
    const [deckList, setDeckList] = useState({});
    const [deckName, setDeckName] = useState(urlName);

    async function fetchUserDeck(){
        // Send request to Server Side JS
        const response = await fetch(`/api/decks/deck?deckId=${urlId}`, {
            method: 'GET',
        });
        
        // Await the response from server side JS
        const data = await response.json();
        return data.deck; // Return only the data
    }

    function populateDeckList(deckList){
        let formattedDeckList = [];
        // Finds the total quantity of cards in the deck for each card,
        // and adds that to the card object
        deckList.map((card) => {
            let cardIndex = formattedDeckList.findIndex((element) => element.name === card.name);
            if(cardIndex === -1){
                formattedDeckList.push({name: card.name, quantity: 1});
            } else {
                formattedDeckList[cardIndex].quantity += 1;
            }
        });
        
        // Convert the deck list into "quantity name" string
        const deckListString = formattedDeckList.map(card => `${card.quantity} ${card.name}`).join('\n');
        console.log(deckListString);
        return deckListString;
    }

    /** DEBUGGER FUNCTION */
    function printContext(){
        console.log("\n\n---- User Deck Context ----");
        console.log("deckInput: ", deckInput);
        console.log("deckList: ", deckList);
        console.log("deckName: ", deckName);
    }

    // On page load, fetch the deck from the backend
    useEffect(() => {
        if (urlId !== -1) {
            console.log("Fetching deck from backend");
            fetchUserDeck().then(deck => {
                if(deck){
                    console.log("Populating deck list");
                    setDeckInput(populateDeckList(deck));
                }
            });
        }
    }, []); 
    
    
    // Print the context whenever the context changes
    useEffect(() => {
        printContext();        
    }, [deckInput, deckList, deckName]);

    return(
        <UserDeckContext.Provider value={{deckInput, setDeckInput, deckList, setDeckList , deckName, setDeckName}}>
            {children}
        </UserDeckContext.Provider>
    )
}