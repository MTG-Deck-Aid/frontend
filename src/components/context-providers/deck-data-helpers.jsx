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




/** Function to save the current deck (to database if logged in) and exit edit mode.
     *  @returns {void}
     */
const saveDeck = async () => {
    setIsLoading(true); // Set loading to true to prevent multiple clicks

    // Remains true if: valid deckList, commander exists, and deckName exists
    let validSave = true;
    let invalidFields = [];

    // Parse the deck input into a JSON object.
    const parsedDeck = parseDeckInput(deckInput);
    // Validate the deck list.
    let invalidNames = verifyDeckList(parsedDeck);
    if (invalidNames.length > 0) {
        validSave = false;
        invalidFields.push("Invalid Cards: " + invalidNames.join(", "));
        // Remove invalid cards from the deck list.
        parsedDeck.cards = parsedDeck.cards.filter(card => !invalidNames.includes(card.cardName));
        invalidFields.push("(These names have been removed from your list)");
    }
    // Update the deck input with the parsed deck list.
    setDeckInput(deparseDeckList(parsedDeck.cards));
    setDeckList(parsedDeck);

    // Commander is required (not empty string)
    if (commander === '') {
        // ALERT MESSAGE
        validSave = false;
        invalidFields.push("Commander is required.");
    }

    // Deck Name is required (not empty string)
    if (deckName === '') {
        // ALERT MESSAGE
        validSave = false;
        invalidFields.push("Deck Name is required.");
    }

    if (!validSave) {
        // @CodyCasselman: Alert user of invalid fields
        //
        // ALERT SHIT GO HERE
        //
        console.log("Invalid Fields: ", invalidFields);
    } else {
        // @b-smiley: Save the deck to the database if user is logged in
        /*
        "commander" has the commander name (string)
        "deckName" has the deck name (string)
        "deckList" has the JSON deck list in the format:
        {
        cards: [
            { quantity: 4, cardName: 'Name1' }, 
            { quantity: 1, cardName: 'Name2' }
        ]
        }
        */

        // IF LOGGED IN:
        //   SAVE TO DATABASE

        toggleIsEditMode();
    }

    setIsLoading(false);
}