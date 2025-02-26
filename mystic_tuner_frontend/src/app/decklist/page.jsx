"use client";

import { getAccessToken } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Decklist() {
  const [authStatus, setAuthStatus] = useState(null);

  useEffect(() => {
    async function fetchTokenAndAuthenticate() {
      try {
        // Get the token from Auth0
        const token = await getAccessToken();

        // Send the token to the server-side API next js route for authentication
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
