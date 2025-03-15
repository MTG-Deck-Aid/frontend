# **List of Frontend API calls:**
## __*GET /api/decks*__
```
    Purpose: Retrieve the list of decks associated with the logged-in user.
    Payload:
        Auth0 user token.
    Response:
        HTTP 200 (Success): Returns an array of deck objects. Each object includes:
            Deck Name
            Deck ID
            Commander Card Image
        HTTP 200 (Success): Returns an empty array if the user has no decks.
```
Payload JSON:
```json
{
	"auth0Token": "AUTH0_USER_TOKEN_HERE"
}
```
Response JSON:
```json
{
	"status": 200,
	"message": "Success",
	"decks": [
		{"deckName": "Gluntch the Destroyer",
		"deckID": 123,
		"commanderImage": "https://example.com/path-to-image.jp" },
		{"deckName": "Sachin the Machine",
		"deckID": 1234,
		"commanderImage": "https://example.com/path-to-image.jp" }
	]
}
```

## __*POST /api/decks/verify-cards*__
```
    Purpose: Validate that the provided list of card names are all recognized MTG cards.
    Payload:
        A JSON array containing strings with the user-entered card names.
    Response:
        HTTP 200 (Valid): Indicates that all cards passed the verification.
        HTTP 422 (Invalid): Returns an error response along with a list of card names that are not valid MTG cards.
    Note: A backend method is required to check the validity of each card.
```
Payload JSON:
```json
{
	"names": ["Sol", "Arcane Signet"]
}
```
Response JSON:
```json
{
	"status": 442,
	"message": "Invalid",
	"invalidCards": [ "Sol" ]
}
```

## __*POST /api/decks/commander*__
```
    Purpose: Process the user-entered commander card for the deck.
    Payload:
        A JSON object containing the commander card name as entered by the user.
    Response:
        HTTP 200 (Valid): Returns the corrected (fuzzy-searched) version of the commander card name along with its image.
        HTTP 422 (Invalid): Returns an error response if the fuzzy search fails to match a valid commander card.
    Note: The fuzzy search helps standardize the card name and ensures the commander exists in the database.
```
Payload JSON: (small mispell of "Minsc")
```json
{
	{
    "commander": "Yarok, the Desecrated"
    }
}
```
Response JSON:
```json
{
    "commander": "Yarok, the Desecrated",
    "images": {
        "small": "https://cards.scryfall.io/small/front/a/1/a1001d43-e11b-4e5e-acd4-4a50ef89977f.jpg?1722108823",
        "normal": "https://cards.scryfall.io/normal/front/a/1/a1001d43-e11b-4e5e-acd4-4a50ef89977f.jpg?1722108823",
        "large": "https://cards.scryfall.io/large/front/a/1/a1001d43-e11b-4e5e-acd4-4a50ef89977f.jpg?1722108823",
        "art_crop": "https://cards.scryfall.io/art_crop/front/a/1/a1001d43-e11b-4e5e-acd4-4a50ef89977f.jpg?1722108823"
    }
}
```

## __*POST /api/decks/new-deck*__
```
    Purpose: Create a new deck after card names have been verified.
    Payload:
        A JSON object containing:
            A list of card names
            The commander card name
			Deck Name
        	Auth0 user token.
    Response:
        HTTP 200 (Success): Returns the newly created Deck ID for future reference.
    Note: This endpoint is invoked only after a successful call to /api/decks/verify-cards.
```
Payload JSON:
```json
{
	"auth0Token": "AUTH0_USER_TOKEN_HERE",
	"deckName": "Death By Hampter",
	"commander": "Minsc & Boo, Timeless Heroes",
	"cards": [
	{ "quantity": 1, "cardName": "Abrade" },
	{ "quantity": 1, "cardName": "Ambush Viper" },
	{ "quantity": 1, "cardName": "Arcane Signet" }
	]
}
```
Response JSON:
```json
{
  "status": 200,
  "message": "Success",
  "deckID": 123
}
```

## __*PATCH /api/decks/{deck-id}*__
```
    Purpose: Update an existing deck with modifications to its card list.
    URL Parameter:
        deck-id: The ID of the deck to be updated.
    Payload:
        A JSON object containing:
            cardsAdded: An array of card names to be added.
            cardsRemoved: An array of card names to be removed.
        Auth0 user token.
    Response:
        HTTP 200 (Success)
        HTTP 401 (Fail)
```
Payload JSON:
```json
{
	"auth0Token": "AUTH0_USER_TOKEN_HERE",
    "deckID": 123,
	"cardsAdded": [
		{ "quantity": 1, "cardName": "Abrade" },
		{ "quantity": 1, "cardName": "Ambush Viper" },
		{ "quantity": 1, "cardName": "Arcane Signet" }
	],
	"cardsRemoved": [
		{ "quantity": 1, "cardName": "Forest" },
		{ "quantity": 2, "cardName": "Mountain" }
	]
}
```
Response JSON:
```json
{
  "status": 200,
  "message": "Success"
}
```

## __*GET /api/decks/{deck-id}*__
```
    Purpose: Retrieve detailed information for a specific deck, intended for use on the editing page.
    URL Parameter:
        deck-id: The ID of the deck to retrieve.
    Payload:
        Auth0 user token.
    Response:
        HTTP 200 (Success): Returns a JSON object containing:
            A list of card names (strings) and quanity
            The commander card name
            The commander card image
```
Payload JSON:
```json
{
	"auth0Token": "AUTH0_USER_TOKEN_HERE"
}
```
Response JSON:
```json
{
	"status": 200,
	"message": "Success",
	"commander": "Minsc & Boo, Timeless Heroes",
	"commanderImage": "https://example.com/path-to-image.jpg",
	"cards": [
		{ "quantity": 1, "cardName": "Abrade" },
		{ "quantity": 1, "cardName": "Ambush Viper" },
		{ "quantity": 1, "cardName": "Arcane Signet" }
	]
}
```

## __*POST /api/suggestions*__
```
    Purpose: Obtain AI-generated suggestions for deck improvements.
    URL Parameter:
        A JSON object containing:
            A list of cards:
                Name
                Quantity
            The commander card name
            Number of cards to add
            Number of cards to remove
    Response:
        HTTP 200 (Success): Returns a JSON object containing:
            cardsToAdd: A list of objects with each card to add, including their images.
            cardsToRemove: A list of objects with each card to remove, including their images.
            reasons: The reasoning behind each suggestion.
    Note: This endpoint is designed to be called during the deck loading screen to allow time for the AI processing and Scryfall image retrieval.
```
Payload JSON:
```json
	"cardsToAdd": 3,
	"cardsToRemove": 3,
	"commander": "Minsc & Boo, Timeless Heroes",
	"cards": [
		{ "quantity": 1, "cardName": "Abrade" },
		{ "quantity": 1, "cardName": "Ambush Viper" },
		{ "quantity": 1, "cardName": "Arcane Signet" }
	]
```
Response JSON:
```json
{
	"status": 200,
	"message": "Success",
	"cardsToAdd": [
		{ "cardName": "Abrade", "image": "http://example.image", "reason": "This is why." },
		{ "cardName": "Ambush Viper", "image": "http://example.image", "reason": "This is why." },
		{ "cardName": "Arcane Signet", "image": "http://example.image", "reason": "This is why." }
	]
    "cardsToRemove": [
		{ "cardName": "Abrade", "image": "http://example.image", "reason": "This is why." },
		{ "cardName": "Ambush Viper", "image": "http://example.image", "reason": "This is why." },
		{ "cardName": "Arcane Signet", "image": "http://example.image", "reason": "This is why." }
	]
}
```