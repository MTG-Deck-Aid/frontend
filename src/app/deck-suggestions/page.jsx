"use client";

import React from "react";

import { useEffect } from "react";

export default function DeckSuggestions() {
  useEffect(() => {
    const fetchSuggestions = async () => {
      const response = await fetch("/api/suggestions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          suggestionParams: {
            num_to_add: 5,
            num_to_remove: 5,
            decklist: {
              commander: "card name",
              mainboard: [{ name: "card name", quantity: 1 }],
            },
          },
        }),
      });
      const data = await response.json();
      console.log(data);
    };

    fetchSuggestions();
  }, []);

  return (
    <div>
      <p>Deck Suggestions</p>
    </div>
  );
}
