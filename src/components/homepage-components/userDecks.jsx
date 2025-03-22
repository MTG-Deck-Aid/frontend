"use client";
import Image from "next/image";
import Link from "next/link";
import { Divider, Spinner } from "@heroui/react";
import { useEffect, useState } from "react";

export default function UserDecks() {
  /**
   * UserDecks() will contain a collection of card images that can be clicked on the go to a dynamic link
   */
  /**
   * This component mainly needs to be integrated to use deck information instead of card information
   */
  const [decks, setDecks] = useState([]);
  const [loading, setLoading] = useState(true);

  const cardWidth = 450;
  const cardHeight = Math.round(0.73 * cardWidth);

  // Get the user decks returns [], [...] for signed in, returns a none for guest
  const fetchUserDecks = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/decks/user-decks/").then(
        async (res) => await res.json()
      );

      setLoading(false);
      console.log(response);
      if (response.status !== 200) {
        if (response.status === 401) {
          setDecks(null);
          return;
        }

        if (response.status === 429) {
          // Redirect to the rate limited page and ensure no caching
          console.error("Rate limited, redirecting to rate limited page");
          window.location.href =
            "/rate-limited?no-cache=" + new Date().getTime();
          return;
        } else {
          console.error("Error getting user decks:", response);
          setDecks(undefined);
          setLoading(false);
          return;
        }
      }

      // const data = await response.json();
      setDecks(response.data.decks);
      setLoading(false);
    } catch (error) {
      console.error("Error getting user decks:", error);
    }
  };

  useEffect(() => {
    fetchUserDecks();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="text-center">
          <Spinner variant="wave" className="text-lg">
            Loading...
          </Spinner>
        </div>
      ) : (
        <div>
          <p className="text-2xl font-bold text-center">Your Decks</p>
          <Divider />

          {decks === undefined ? (
            <div> An error occurred. </div>
          ) : decks === null ? (
            <div className="text-center">
              <p className="text-lg">
                You must be signed in to view your decks.
              </p>
            </div>
          ) : decks.length === 0 ? (
            <div className="text-center">
              <p className="text-lg">You don't have any decks yet!</p>
              <p className="text-lg">Create a new deck to get started.</p>
            </div>
          ) : (
            <div className="grid auto-cols-max grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-3">
              {decks.map((deck) => (
                <div
                  className="m-2 flex flex-col justify-between items-center p-2"
                  key={deck.id}
                >
                  <div>
                    <div className="absolute m-2 text-wrap italic sm:text-medium md:text-xl lg:text-xl">
                      {deck.name}
                    </div>
                    <Link
                      href={{
                        pathname: `/${deck.name}/view-import-deck`,
                        query: {
                          mode: `edit`,
                          deckId: deck.id,
                          title: deck.name,
                        },
                      }}
                    >
                      <div className="inline-block">
                        <Image
                          alt={deck.name}
                          height={cardHeight}
                          width={cardWidth}
                          src={deck.image_url}
                          className="h-auto w-[100%] rounded-xl border-2 border-solid border-white"
                        />
                      </div>
                    </Link>
                  </div>
                  <Divider />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
