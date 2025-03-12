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
    const requestBody = await request.json();
    console.log("Request body:", requestBody);
    console.log(process.env.BACKEND_BASE_URL);
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 30 seconds timeout

    const response = await fetch(
      `${process.env.BACKEND_BASE_URL}/restapis/suggestions/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
        signal: controller.signal,
      }
    );
    clearTimeout(timeoutId);
    console.log("Response:", response);
    return NextResponse.json(response);
  } catch (error) {
    console.error("Error getting AI deck suggestions:" + error);
    return NextResponse.json({
      status: 500,
      message: "Error getting AI deck suggestions" + error,
    });
  }
}
