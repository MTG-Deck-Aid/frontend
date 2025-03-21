import { NextResponse } from "next/server";
import { authenticateUser } from "@/utils";

/**
 *  request:{
 *   num_to_add: 0-5,
 *   num_to_remove: 0-5,
 *   decklist: {
 *    commander: "card name",
 *    mainboard: [
 *     { name: "card name", quantity: 1-4 },
 *    ...
 *   ],
 * }
 *
 *  Server Side Next.js call the Django backend
 */
export async function POST(request) {
  try {
    // get the params from the request body
    const suggestionParams = await request.json();
    const response = await deckSuggestions(suggestionParams);
    return NextResponse.json(response);
  } catch (error) {
    console.error("Error getting AI deck suggestions: (restAPI)", error);
    return NextResponse.json({
      status: 500,
      message: "Error getting AI deck suggestions",
    });
  }
}

export async function deckSuggestions(suggestionParams) {
  try {
    const response = await fetch(`${process.env.BACKEND_BASE_URL}/api/suggestions/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(suggestionParams),
    });

    (response);

    const data = await response.json();
    console.log("Suggestion response:", data);
    return data; // { authenticated: true/false, message: "..." }
  } catch (error) {
    console.error("Error authenticating user:", error);
    return { authenticated: false, message: "Error during authentication" };
  }
}
