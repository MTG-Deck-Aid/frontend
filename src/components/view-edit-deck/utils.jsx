"use client";

import { addToast, toggle } from "@heroui/react";
// import { u } from "framer-motion/dist/types.d-B50aGbjN";

/** Function to save the current deck (to database if logged in) and exit edit mode.
 * @param {string} deckInput -> current input in the text field
 * @param {method} toggleIsEditMode -> Toggles between edit/save
 *
 *  @returns {void}
 */

export async function saveDeck(deckInput, setDeckInput, deckList, setDeckList, commander, deckName, deckId, setDeckId, toggleIsEditMode, setDisplayName) {
	/**
	 * SAVE DECK ONLY USES ITEMS IN USERDECKCONTEXT AND THEREFORE DOES NOT NEED PARAMETERS. IT CAN
	 * JUST LOAD THE CONTEXT INSTEAD
	 */ // NO
	// Runs the verifySave function to check if the deck is valid

	const { invalidFields, parsedDeck } = await verifySave(deckInput, setDeckInput, setDeckList, commander, deckName, deckList);

	// If there are invalid fields, do not save the deck.
	const validSave = invalidFields.length === 0;

	if (!validSave) {
		// Display invalid fields as toast messages.
		invalidFields.forEach((field) => {
			addToast({
				title: "Invalid Input",
				description: field,
				color: "danger",
			});
		});
	} else if (validSave) {
		setDisplayName(deckName); //set the display name
		// Stall for 0.1s so the deckName sets before the page title updates
		await new Promise((resolve) => setTimeout(resolve, 100));
		// Save the deck to the database if user is logged in
		console.log("Deck is valid, saving to database...");
		const isNewDeck = parseInt(deckId) === -1;
		console.log("Is new deck:", isNewDeck);
		try {
			let response;
			const controller = new AbortController();
			const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout

			if (isNewDeck) {
				response = await fetch('/api/decks/new-deck', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						deckName: deckName,
						commander: commander,
						deckList: parsedDeck.cards,
					}),
					signal: controller.signal,
				});
			} else {
				response = await fetch('/api/decks/update-deck', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						deckId: deckId,
						deckName: deckName,
						commander: commander,
						deckList: parsedDeck.cards,
					}),
					signal: controller.signal,
				});
			}

			const backend_response = await response.json();
			clearTimeout(timeoutId);

			if (backend_response.status !== 200) {
				addToast({
					title: "Error Saving Deck",
					description: `An error occurred while ${isNewDeck ? 'creating' : 'saving'} the deck. Please contact support if the issue persists.`,
					color: "danger",
				});
				return false;
			}
			setDeckId(backend_response.data.deckId);
			addToast({
				title: "Deck Saved",
				description: `Your deck has been ${isNewDeck ? 'created' : 'updated'} successfully.`,
				color: "success",
			});
		} catch (error) {
			console.error('Error saving deck:', error);
			addToast({
				title: "Error Saving Deck",
				description: `An error occurred while ${isNewDeck ? 'creating' : 'saving'} the deck. Please contact support if the issue persists.`,
				color: "danger",
			});
			return false;
		}
		toggleIsEditMode();
	}

	// Return whether the save was successful.
	return validSave;
}

export async function getSuggestions(deck, commander, numToAdd, numToRemove) {
	// Convert the parsedDeck to the format required by the suggestion route
	console.log('Deck Inside Suggestions:', deck);

	const mainboard = deck.cards.map((card) => {
		return {
			quantity: card.quantity,
			name: card.cardName,
		};
	});

	const suggestionParams = {
		num_to_add: numToAdd,
		num_to_remove: numToRemove,
		decklist: {
			commander: commander,
			mainboard: mainboard,
		},
	};

	console.log('Suggestion Params:', suggestionParams);
	console.log('Passed Body:', JSON.stringify(suggestionParams));

	let suggestions = null;

	// Send the suggestionParams to the suggestion route
	try {
		const response = await fetch('/api/suggestions', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(suggestionParams),
		});

		const data = await response.json();
		console.log('Suggestion response:', data);
		suggestions = data;
		// return data; // { authenticated: true/false, message: "..." }
	} catch (error) {
		console.error('Error getting AI deck suggestions:', error);
		// return { authenticated: false, message: "Error during authentication" };
	}

	return suggestions;

}

/** Function to verify the deck input and return a list of invalid fields.
 * @param {*} deckInput 
 * @param {*} commander 
 * @param {*} deckName 
 * @returns {array} - The list of invalid fields.
 */
async function verifySave(deckInput, setDeckInput, setDeckList, commander, deckName, deckList) {
	let invalidFields = [];

	// Parse the deck input into a JSON object.
	const parsedDeck = parseDeckInput(deckInput);
	// Validate the deck list.
	let invalidNames = await verifyDeckList(parsedDeck);

	if (invalidNames.length > 0) {
		invalidFields.push('Invalid Cards: ' + invalidNames.join(', '));
		// Remove invalid cards from the deck list.
		parsedDeck.cards = parsedDeck.cards.filter(
			(card) => !invalidNames.includes(card.cardName),
		);
		invalidFields.push('(These names have been removed from your list)');
	}

	// Update the deck input with the parsed deck list.
	setDeckInput(deparseDeckList(parsedDeck.cards));
	setDeckList(parsedDeck);

	// Deck List needs at least 10 cards
	if (parsedDeck.cards.length < 10) {
		// ALERT MESSAGE
		invalidFields.push('Deck must have at least 10 cards.');
	}

	// Commander is required (not empty string)
	if (commander === '' || commander === undefined) {
		// ALERT MESSAGE
		invalidFields.push('Commander is required.');
	}

	// Deck Name is required (not empty string)
	if (deckName === '' || deckName === 'New Deck' || deckName === undefined) {
		// ALERT MESSAGE
		invalidFields.push('Deck Name is required.');
	}

	return { invalidFields, parsedDeck };
}

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
	lines.forEach((line) => {
		const trimmed = line.trim();
		if (/^(Commander|Deck|Sideboard|About):?/i.test(trimmed)) {
			hasExplicitSections = true;
		}
	});

	// Second pass: assign lines to sections.
	// (If headings like "Commander:" or "Sideboard:" appear, we use them to ignore unwanted cards.)
	lines.forEach((line) => {
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

	deckLines.forEach((line) => {
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
	const names = deckList.cards.map((card) => card.cardName);
	const response = await fetch('/api/decks/verify-cards', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ names: names }),
	});

	const data = await response.json();
	return data.invalidNames || "";
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
	cards.forEach((card) => {
		lines.push(`${card.quantity} ${card.cardName}`);
	});
	return lines.join('\n');
};
