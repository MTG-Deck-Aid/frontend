'use client';
import { useSearchParams, useParams } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';

const UserDeckContext = createContext();
export default function UserDeckContextProvider({ children }) {
	//useParams and useSearchParams are the ideal way for getting url parameters in nextJS
	const urlName = useParams().slug;
	const urlId = useSearchParams().get('deckId');
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
			let cardIndex = formattedDeckList.findIndex(
				(element) => element.name === card.name,
			);
			if (cardIndex === -1) {
				formattedDeckList.push({ name: card.name, quantity: 1 });
			} else {
				formattedDeckList[cardIndex].quantity += 1;
			}
		});

		// Convert the deck list into "quantity name" string
		const deckListString = formattedDeckList
			.map((card) => `${card.quantity} ${card.name}`)
			.join('\n');
		console.log(deckListString);
		return deckListString;
	}

	// On page load, fetch the deck from the backend
	useEffect(() => {
		if (urlId !== -1) {
			console.log('Fetching deck from backend');
			fetchUserDeck().then((deck) => {
				if (deck) {
					console.log('Populating deck list');
					setDeckInput(populateDeckList(deck));
				}
			});
		}
	}, []);

	/** DEBUGGER FUNCTION */
	function printContext() {
		console.log('\n\n---- User Deck Context ----');
		console.log('deckInput: ', deckInput);
		console.log('deckList: ', deckList);
		console.log('deckName: ', deckName);
		console.log('commander: ', commander);
		console.log('---- User Deck Context ----\n\n');
	}

	return (
		<UserDeckContext.Provider
			value={{
				deckInput,
				setDeckInput,
				deckList,
				setDeckList,
				commander,
				setCommander,
				deckName,
				setDeckName,
			}}
		>
			{children}
		</UserDeckContext.Provider>
	);
}

export function useUserDeckContext() {
	const context = useContext(UserDeckContext);
	if (!context) {
		throw new Error(
			'useUserDeckContext must be used within a UserDeckContextProvider',
		);
	}
	return context;
	/**
	 * context will contain:
	 * deckInput, setDeckInput,
	 * deckList, setDeckList,
	 * commander, setCommander,
	 * deckName, setDeckName,
	 */
}

export function useCommanderContext() {
	const context = useUserDeckContext();
	const { commander, setCommander } = context;
	return { commander, setCommander };
}
export function useDeckInputContext() {
	const context = useUserDeckContext();
	const { deckInput, setDeckInput } = context;
	return { deckInput, setDeckInput };
}
export function useDeckListContext() {
	const context = useUserDeckContext();
	const { deckList, setDeckList } = context;
	return { deckList, setDeckList };
}
export function useDeckNameContext() {
	const context = useUserDeckContext();
	const { deckName, setDeckName } = context;
	return { deckName, setDeckName };
}
