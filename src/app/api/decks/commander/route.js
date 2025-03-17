import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { commander } = await request.json();
    console.log("Commander:", commander);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    const response = await fetch(
      `${process.env.BACKEND_BASE_URL}/api/decks/commander`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ commander }),
        signal: controller.signal,
      }
    );
    clearTimeout(timeoutId);

    console.log("Raw response text:", response.statusText);
    console.log("Response status:", response.status);

    if (response.status === 422) {
      // Return bad request status and empty commander
      return NextResponse.json({
        status: 422,
        statusText: response.statusText,
      });
    } else {
      const data = await response.json();
      console.log("Commander:", data.commander);
      return NextResponse.json({
        status: response.status,
        statusText: response.statusText,
        commander: data.commander,
        images: data.images
          ? {
              small: data.images.small,
              normal: data.images.normal,
              large: data.images.large,
              art_crop: data.images.art_crop,
            }
          : null,
      });
    }
  } catch (error) {
    console.error("Error processing commander:", error);
    return NextResponse.json({
      status: 500,
      message: "Error processing commander",
    });
  }
}
