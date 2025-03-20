'use client';

import { useUserDeckContext } from '@/components/context-providers/userDeckContextProvider';
import {
	CommanderImage,
	DeckInput,
	DeckNameInput,
	ViewButtonGroup,
} from '@/components/view-edit-deck';
import { Divider } from '@heroui/react';

export default async function ViewImportDeck({ searchParams }) {
	/**
	 * ViewImportDeck is a page that has two modes.
	 * Edit Mode: allows a user to edit and import the cards that are present in their deck. This is the default path if the user clicks NewDeck.
	 * View Mode: Allows a user to view their cards and move onto suggestions
	 */
	const {
		parseDeckInput,
		deparseDeckList,
		verifyDeckList,
		printContext,
		deckInput,
		setDeckInput,
		deckList,
		setDeckList,
		commander,
		deckName,
	} = useUserDeckContext();

	return (
		<div className="max-w-screen max-h-fill flex flex-col items-center justify-center gap-8 p-4">
			{/* First row: Deck Name and Button Group */}
			<div className="flex w-full flex-col-reverse items-start gap-4 md:flex-row md:justify-between">
				<div className="flex">
					<DeckNameInput deckName={deckName} setDeckName={setDeckName} />
				</div>
				<div className="flex">
					<ViewButtonGroup deckList={deckList} />
				</div>
			</div>
			<Divider />
			{/* Second Row: Commander Selection */}
			<div className="">
				<CommanderImage commander={commander} setCommander={setCommander} />
			</div>
			<Divider />
			{/* Third Row: Deck Input */}
			<div className="w-full justify-start">
				<DeckInput deckInput={deckInput} setDeckInput={setDeckInput} />
			</div>
		</div>
	);
}
