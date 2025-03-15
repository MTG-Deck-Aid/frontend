import { NextResponse } from "next/server";
import { auth0 } from "@/lib/auth0";
// Server Side Next.js call to authenticate user in the Django backend

/**
 *
 * Server Side Next.js call to authenticate user in the Django backend
 * This is a demo function only and can be deleted by the frontend engineers once
 * they have implemented the actual functionality.
 *
 * CONVERT THIS INTO A UTILITIES FUNCTION THAT CAN BE USED THROUGHOUT MULTIPLE FRONTEND API CALLS
 * YOU SHOULD SEND THE ACCESS TOKEN
 */
export async function POST(request) {
  try {
    // Get the token from Auth0
    const session = await auth0.getSession();

    const response = await fetch(
      "http://localhost:8000/api/test/get-user-id/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.tokenSet.accessToken}`,
        },
      }
    );

    const data = await response.json();
    console.log("Authentication response:", data);
    return NextResponse.json(response);
  } catch (error) {
    console.error("Error authenticating user:", error);
    return NextResponse.json(
      {
        message: "Error during authentication",
      },
      { status: 500 }
    );
  }
}
