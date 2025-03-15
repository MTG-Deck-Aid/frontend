"use client";

import React, { useState } from 'react';

const DeckParser = () => {
	const [input, setInput] = useState('');
	const [cards, setCards] = useState([]);

	// Function to parse the deck input text.
	const parseDeck = (text) => {
		// Split the text into individual lines.
		const lines = text.split('\n');
		let deckLines = [];
		let currentSection = 'deck'; // default section if none are specified
		let hasExplicitSections = false;

		// First pass: check if any explicit section headings exist.
		lines.forEach(line => {
			const trimmed = line.trim();
			if (/^(Commander|Deck|Sideboard|About):?/i.test(trimmed)) {
				hasExplicitSections = true;
			}
		});

		// Second pass: assign lines to sections.
		// (If headings like "Commander:" or "Sideboard:" appear, we use them to ignore unwanted cards.)
		lines.forEach(line => {
			const trimmed = line.trim();
			if (trimmed === '') return;

			// Update currentSection based on header lines.
			if (/^(Commander):?/i.test(trimmed)) {
				currentSection = 'commander';
				return;
			} else if (/^(Deck):?/i.test(trimmed)) {
				currentSection = 'deck';
				return;
			} else if (/^(Sideboard):?/i.test(trimmed)) {
				currentSection = 'sideboard';
				return;
			} else if (/^(About):?/i.test(trimmed)) {
				// Skip sections like About.
				currentSection = 'ignore';
				return;
			}

			// Only add lines that belong to the deck section.
			if (currentSection === 'deck') {
				deckLines.push(trimmed);
			}
		});

		// If there are no explicit sections, assume the first card is the commander and skip it.
		if (!hasExplicitSections && deckLines.length > 0) {
			deckLines = deckLines.slice(1);
		}

		// Regex to capture the quantity and card name.
		// This pattern matches a number at the start, then the card name,
		// and ignores any set identifiers or trailing numbers.
		const cardRegex = /^(\d+)\s+(.+?)(?=\s+\([^)]+\)|\s+\d+$|$)/;
		const parsedCards = [];

		deckLines.forEach(line => {
			const match = line.match(cardRegex);
			if (match) {
				const quantity = parseInt(match[1], 10);
				let cardName = match[2].trim();
				// Remove any trailing number that might remain
				cardName = cardName.replace(/\s+\d+$/, '');
				parsedCards.push({ quantity, cardName });
			}
		});

		return { cards: parsedCards };
	};

	// Handler to parse the input text when the button is clicked.
	const handleParse = () => {
		const result = parseDeck(input);
		setCards(result.cards);
	};

	return (
		<div style={{ padding: '1rem' }}>
			<h1>Deck Parser</h1>
			<textarea
				value={input}
				onChange={(e) => setInput(e.target.value)}
				rows="10"
				cols="50"
				placeholder="Paste deck list here"
				style={{ width: '100%', marginBottom: '1rem' }}
			/>
			<button onClick={handleParse}>Parse Deck</button>
			<h2>Parsed Deck JSON</h2>
			<pre style={{ background: 'black', padding: '1rem' }}>
				{JSON.stringify({ cards }, null, 2)}
			</pre>
		</div>
	);
};

export default DeckParser;
