import { NextResponse } from "next/server";
import { authenticateUser } from "@/utils";

// Server Side Next.js call to authenticate user in the Django backend
export async function POST(request) {
  try {
    const { token } = await request.json();
    const response = await authenticateUser(token);
    return NextResponse.json(response);
  } catch (error) {
    console.error("Error authenticating user:", error);
    return NextResponse.json(
      {
        authenticated: false,
        message: "Error during authentication",
      },
      { status: 500 }
    );
  }
}
