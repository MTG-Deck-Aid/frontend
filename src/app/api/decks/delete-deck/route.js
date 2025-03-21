import { NextResponse } from "next/server";
import { getAuthorizationHeader } from "@/utils";

/** Calls the Backend API */
export async function DELETE(request)  {
    try {
        // Request to the backend
        const { deckId } = await request.json();
        console.log("Deleting deck with ID:", deckId);
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
        const authorizationHeaders = await getAuthorizationHeader();
        const response = await fetch(`${process.env.BACKEND_BASE_URL}/api/decks/delete/?deckId=${deckId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                ...authorizationHeaders,
            },
            body: JSON.stringify({
                deckId: deckId,
            }),
            signal: controller.signal,
        });
        clearTimeout(timeoutId);

        const data = await response.json();
        console.log("Deck deletion backend response:", data);
        
        return NextResponse.json({
            status: response.status,
            data: data,
        });
    } catch (error) {
        console.error("Error deleting deck:", error);
        return NextResponse.json({
            status: 500,
            message: "Error deleting deck",
        });
    }

}