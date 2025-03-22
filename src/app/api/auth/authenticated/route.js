"use server";

import { NextResponse } from "next/server";
import { isAuthenticated } from "@/utils";

/**
 * Returns if the user is authenticated or not.
 */
export async function GET(request) {
  try {
    const isAuthd = await isAuthenticated();
    return NextResponse.json({
      status: 200,
      data: { isAuthenticated: isAuthd },
    });
  } catch (error) {
    console.error("Error getting validating the user is authenticated:", error);
    return NextResponse.json({
      status: 401,
      message: "Unauthorized",
      data: { isAuthenticated: false },
    });
  }
}
