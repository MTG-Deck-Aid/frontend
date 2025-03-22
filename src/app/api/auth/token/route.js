"use server";

import { NextResponse } from "next/server";

import { auth0 } from "@/lib/auth0";

export async function GET(request) {
  try {
    // NOTE: KEEP THIS FOR DEVELOPMENT PURPOSES ONLY
    // console.log("Token: ");
    // console.log((await auth0.getSession()).tokenSet.accessToken);
    return NextResponse.json({
      status: 200,
      message: "Token Printed in the server console",
    });
  } catch (error) {
    console.error("Error getting token:", error);
    return NextResponse.json({
      status: 500,
      message: "Error getting token",
    });
  }
}
