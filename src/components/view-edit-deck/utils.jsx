
/** Function to save the current deck (to database if logged in) and exit edit mode.
 *  @returns {void}
 */
export async function saveDeck(setIsLoading, deckInput, toggleIsEditMode){
    setIsLoading(true); // Set loading to true to prevent multiple clicks

    // Remains true if: valid deckList, commander exists, and deckName exists
    let validSave = true;
    let invalidFields = [];

    // Parse the deck input into a JSON object.
    const parsedDeck = parseDeckInput(deckInput);
    // Validate the deck list.
    let invalidNames = await verifyDeckList(parsedDeck);
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

    // Deck List needs at least 10 cards
    if (parsedDeck.cards.length < 10) {
        // ALERT MESSAGE
        validSave = false;
        invalidFields.push("Deck must have at least 10 cards.");
    }

    // Commander is required (not empty string)
    if (commander === '') {
        // ALERT MESSAGE
        validSave = false;
        invalidFields.push("Commander is required.");
    }

    // Deck Name is required (not empty string)
    if (deckName === '' || deckName === 'New Deck') {
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

        // Console log, deckList, commander, and deckName
        toggleIsEditMode();
    }
    printContext();
    setIsLoading(false);
}
