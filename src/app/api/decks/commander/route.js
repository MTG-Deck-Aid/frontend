import { nextResponse } from "next/server";

export async function POST(request) {
	try {
		const { commander } = request.json();
		const response = await processCommander(commander);
		return nextResponse.json(response);
	} catch (error) {
		console.error("Error processing commander:", error);
		return nextResponse.json({
			status: 500,
			message: "Error processing commander",
		});
	}
}

export async function processCommander(commander) {
	try {
		const response = await fetch(`${process.env.BACKEND_BASE_URL}/api/decks/commander/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ commander }),
		});

		const data = await response.json();
		console.log("Commander response:", data);
		return data;
	} catch (error) {
		console.error("Error processing commander:", error);
		return { status: 500, message: "Error processing commander" };
	}
}