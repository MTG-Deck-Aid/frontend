"use client";

import React, { useEffect, useState } from 'react';

export default function TestDecks() {
	const [decks, setDecks] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchDecks() {
			try {
				const auth0Token = 'AUTH0_USER_TOKEN_HERE';
				const response = await fetch('/api/decks', {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': `Bearer ${auth0Token}`
					}
				});

				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}
				const data = await response.json();

				// Optionally verify the response structure
				if (data.status === 200 && Array.isArray(data.decks)) {
					setDecks(data.decks);
				} else {
					throw new Error('Unexpected response format');
				}
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		}

		fetchDecks();
	}, []);

	if (loading) return <div>Loading decks...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<div>
			<h1>Decks</h1>
			{decks.length === 0 ? (
				<p>No decks found</p>
			) : (
				<ul>
					{decks.map((deck) => (
						<li key={deck.deckID}>
							<h2>{deck.deckName}</h2>
							<img src={deck.commanderImage} alt={`${deck.deckName} commander`} />
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
