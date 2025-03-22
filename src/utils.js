import { auth0 } from "@/lib/auth0";
import { NextResponse } from "next/server";

/**
 * Gets the current user token from the Auth0 client.
 * This is a server-side function and should be used when communicating with the backend.
 * @author: @b-smiley
 * @returns: The Authorization header with the Bearer token.
 * @example:
 *    ```javascript
 *    const authorization_field = await getAuthorizationHeader();
 *    const response = await fetch("http://localhost:8000/api/test/get-user-id/", {
 *     method: "GET",
 *    headers: {
 *     "Content-Type": "application/json",
 *     ...authorization_field
 *    }
 *    });
 *    ```
 */
export async function getAuthorizationHeader() {
  const session = await auth0.getSession();
  if (!session) {
    return null;
  }
  return { Authorization: `Bearer ${session.tokenSet.accessToken}` };
}

/**
 * NOTE: This should not be trusted for secure processes. This is for convient
 * client side interactions like displaying certain buttons for users who SHOULD
 * currently be authenticated correctly
 * @returns {boolean} - True if the user is authenticated, false otherwise.
 */
export async function isAuthenticated() {
  const session = await auth0.getSession();
  return session !== null;
}
