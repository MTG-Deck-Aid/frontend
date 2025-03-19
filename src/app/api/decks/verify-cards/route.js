import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // display the names attribute that is in the body of request
    const { names } = await request.json();
    console.log("Card names:", names);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const response = await fetch(
      `${process.env.BACKEND_BASE_URL}/api/decks/verify-cards/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ names }),
        signal: controller.signal,
      }
    );
    clearTimeout(timeoutId);

    console.log("Raw response text:", response.statusText);
    console.log("Response status:", response.status);

    if (response.status === 422) {
      const data = await response.json();
      console.log("Invalid names:", data.invalidNames);
      return NextResponse.json({
        status: response.status,
        statusText: response.statusText,
        invalidNames: data.invalidNames,
      });
    } else {
      return NextResponse.json({
        status: response.status,
        statusText: response.statusText,
      });
    }
  } catch (error) {
    console.error("Error verifying cards:", error);
    return NextResponse.json({
      status: 500,
      message: "Error verifying cards",
    });
  }
}
