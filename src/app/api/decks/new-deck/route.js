import { NextResponse } from "next/server";
import { getAuthorizationHeader } from "@/utils";

export async function POST(request) {
	try {
		// Parse the request
		const { deckName, commander, deckList } = await request.json();

		// Request to the backend
		const controller = new AbortController();
		const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
		const authorizationHeaders = await getAuthorizationHeader();
		const response = await fetch(`${process.env.BACKEND_BASE_URL}/api/decks/new-deck/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				...authorizationHeaders,
			},
			body: JSON.stringify({
				deckName: deckName,
				commander: commander,
				deckList: deckList,
			}),
			signal: controller.signal,
		});
		clearTimeout(timeoutId);

		const data = await response.json();
		console.log("Deck creation response:", data);
		return NextResponse.json({
			status: response.status,
			data: data,
		});
	} catch (error) {
		console.error("Error creating deck:", error);
		return NextResponse.json({
			status: 500,
			message: "Error creating deck",
		});
	}
}	