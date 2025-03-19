"use server";
import { NextResponse } from "next/server";
import {getAuthorizationHeader} from "@/utils";

/**
 * Server Side Next.js route
 * Calls the backend API to get all the user's decks
 */
export async function GET(request) {
    try {
        // Send request to backend...
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);
        const authorization_field = await getAuthorizationHeader();
        const response = await fetch(`${process.env.BACKEND_BASE_URL}/api/decks/user-decks`, { 
            signal: controller.signal,
            headers: {
                "Content-Type": "application/json",
                ...authorization_field
            }
        });
        clearTimeout(timeoutId);
        console.log("Backend API - user-decks:", response);

        // Return response from backend
        const data = await response.json();
        console.log("User Decks response:", data);

        // Add status to response
        return NextResponse.json({
            status: response.status,
            data: data
        });

    } catch (error) {
        console.error("Error getting autocomplete:", error);
        return NextResponse.json({
            status: 500,
            message: "Error getting Cards",
        });
    }
}
