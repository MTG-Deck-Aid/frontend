/*** THIS IS DEPRECIATED USE USER-DECKS */

import { NextResponse } from "next/server";

export async function POST(request) {
	try {
		const { auth0Token } = request.json();
		const response = await getDecks(auth0Token);
		return NextResponse.json(response);
	} catch (error) {
		console.error("Error getting user decks:", error);
		return NextResponse.json({
			status: 500,
			message: "Error getting user decks",
		});
	}
}

export async function getDecks(auth0Token) {
	try {
		const controller = new AbortController();
		const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

		const response = await fetch(`${process.env.BACKEND_BASE_URL}/api/decks/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ auth0Token }),
			signal: controller.signal,
		});
		clearTimeout(timeoutId);

		const data = await response.json();
		console.log("Deck response:", data);
		return data;
	} catch (error) {
		console.error("Error getting user decks:", error);
		return { status: 500, message: "Error getting user decks" };
	}
}