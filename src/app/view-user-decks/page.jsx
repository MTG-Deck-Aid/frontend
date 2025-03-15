"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * NOTE:
 * This function demonstrates how to send a token for validation on the backend
 * This is a demo function only and can be deleted by the frontend engineers once
 * they have implemented the actual functionality.
 *
 * THIS FUNCTION IS JUST TO RUN THE SERVER SIDE API CALL, DELETE THIS WHEN DONE VALIDATING /DJANGO_AUTHENTICATE
 */
export default function Decklist() {
  const [authStatus, setAuthStatus] = useState(null);

  useEffect(() => {
    async function fetchTokenAndAuthenticate() {
      try {
        // Send the token to the server-side API next js route for authentication
        const token = "";
        const response = await fetch("api/auth/django_authenticate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }), // Send the token in the body of the request
        });

        const result = await response.json();

        // Handle result
        if (result.authenticated) {
          setAuthStatus("Authenticated!");
        } else {
          setAuthStatus(`Authentication failed: ${result.message}`);
        }
      } catch (error) {
        console.error("Error fetching token or authenticating user:", error);
        setAuthStatus("Error occurred during authentication.");
      }
    }

    // Call the function when the component is mounted
    fetchTokenAndAuthenticate();
  }, []); // Empty dependency array ensures this runs once on page load

  return (
    <div>
      <p>{authStatus || "Nothing to see here!"}</p>
      <Link href="/">Home</Link>
    </div>
  );
}
