import { NextResponse } from "next/server";
import { getAuthorizationHeader } from "@/utils";
export async function POST(request) {
    try {
        // Parse the request
        const { deckId, deckName, commander, deckList } = await request.json();
        console.log("Updating deck:", deckId, deckName, commander, deckList);
        // Request to the backend
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
        const authorizationHeaders = await getAuthorizationHeader();
        const response = await fetch(`${process.env.BACKEND_BASE_URL}/api/decks/update/`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                ...authorizationHeaders,
            },
            body: JSON.stringify({
                deckId: deckId,
                deckName: deckName,
                commander: commander,
                deckList: deckList,
            }),
            signal: controller.signal,
        }
        );
        clearTimeout(timeoutId);

        const data = await response.json();
        console.log("Deck update response:", data);
        return NextResponse.json({
            status: response.status,
            data: data,
        });
    } catch (error) {
        console.error("Error updating deck:", error);
        return NextResponse.json({
            status: 500,
            message: "Error updating deck",
        });
    }
}	