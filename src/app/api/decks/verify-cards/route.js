import { nextResponse } from "next/server";

export async function POST(request) {
	try {
		const { cards } = request.json();
		const response = await verifyCards(cards);
		return nextResponse.json(response);
	} catch (error) {
		console.error("Error verifying cards:", error);
		return nextResponse.json({
			status: 500,
			message: "Error verifying cards",
		});
	}
}

export async function verifyCards(cards) {
	try {
		const response = await fetch(`${process.env.BACKEND_BASE_URL}/api/decks/verify-cards/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ cards }),
		});

		const data = await response.json();
		console.log("Verification response:", data);
		return data;
	} catch (error) {
		console.error("Error verifying cards:", error);
		return { status: 500, message: "Error verifying cards" };
	}
}