import { NextResponse } from "next/server";
import { getAuthorizationHeader } from "@/utils";
export async function PATCH(request) {
  try {
    const { auth0Token, cardsAdded, cardsRemoved } = request.json();
    const response = await updateDeck(
      request.params.deckId,
      auth0Token,
      cardsAdded,
      cardsRemoved
    );
    return NextResponse.json(response);
  } catch (error) {
    console.error("Error updating deck:", error);
    return NextResponse.json({
      status: 500,
      message: "Error updating deck",
    });
  }
}

export async function updateDeck(deckId, auth0Token, cardsAdded, cardsRemoved) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
    const authorizationHeaders = getAuthorizationHeader();
    const response = await fetch(
      `${process.env.BACKEND_BASE_URL}/apis/decks/${deckId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorizationHeaders,
        },
        body: JSON.stringify({ auth0Token, cardsAdded, cardsRemoved }),
        signal: controller.signal,
      }
    );
    clearTimeout(timeoutId);

    const data = await response.json();
    console.log("Deck update response:", data);
    return data;
  } catch (error) {
    console.error("Error updating deck:", error);
    return { status: 500, message: "Error updating deck" };
  }
}

export async function GET(request) {
  try {
    const { auth0Token } = request.json();
    const response = await getDeck(request.params.deckId, auth0Token);
    return NextResponse.json(response);
  } catch (error) {
    console.error("Error getting deck:", error);
    return NextResponse.json({
      status: 500,
      message: "Error getting deck",
    });
  }
}

export async function getDeck(deckId, auth0Token) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second

    const response = await fetch(
      `${process.env.BACKEND_BASE_URL}/api/decks/${deckId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ auth0Token }),
        signal: controller.signal,
      }
    );
    clearTimeout(timeoutId);

    const data = await response.json();
    console.log("Deck response:", data);
    return data;
  } catch (error) {
    console.error("Error getting deck:", error);
    return { status: 500, message: "Error getting deck" };
  }
}
