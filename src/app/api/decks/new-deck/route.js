import { NextResponse } from "next/server";

export async function POST(request) {
	try {
		const { auth0Token, deckName, commander, cards } = request.json();
		const response = await createDeck(auth0Token, deckName, commander, cards);
		return NextResponse.json(response);
	} catch (error) {
		console.error("Error creating deck:", error);
		return NextResponse.json({
			status: 500,
			message: "Error creating deck",
		});
	}
}

export async function createDeck(auth0Token, deckName, commander, cards) {
	try {
		const response = await fetch(`${process.env.BACKEND_BASE_URL}/restapis/decks/new-deck/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ auth0Token, deckName, commander, cards }),
		});

		const data = await response.json();
		console.log("Deck creation response:", data);
		return data;
	} catch (error) {
		console.error("Error creating deck:", error);
		return { status: 500, message: "Error creating deck" };
	}
}	