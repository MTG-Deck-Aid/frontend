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