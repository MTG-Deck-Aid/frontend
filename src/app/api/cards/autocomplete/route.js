"use server";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        // Send request to backend...
        const { searchParams } = new URL(request.url);
        const query = searchParams.get('q');
        const commander = searchParams.get('commander');
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);
        const response = await fetch(`${process.env.BACKEND_BASE_URL}/api/decks/autocomplete?q=${query}&commander=${commander}`, { signal: controller.signal });
        clearTimeout(timeoutId);

        // Return response from backend
        const data = await response.json();
        // Add status to response
        return NextResponse.json({
            status: response.status,
            cards: data
        });

    } catch (error) {
        console.error("Error getting autocomplete:", error);
        return NextResponse.json({
            status: 500,
            message: "Error getting Cards",
        });
    }
}
