import {
	CommanderImage,
	DeckInput,
	DeckNameInput,
	ViewButtonGroup,
} from '@/components/view-edit-deck';
import { Divider } from '@heroui/react';

export default function ViewImportDeck() {
	/**
	 * ViewImportDeck is a page that has two modes.
	 * Edit Mode: allows a user to edit and import the cards that are present in their deck. This is the default path if the user clicks NewDeck.
	 * View Mode: Allows a user to view their cards and move onto suggestions
	 */

	return (
		<div className="max-w-screen max-h-fill flex flex-col items-center justify-center gap-8 p-4">
			{/* First row: Deck Name and Button Group */}
			<div className="flex w-full flex-col-reverse items-start gap-4 md:flex-row md:justify-between">
				<div className="flex">
					<DeckNameInput />
				</div>
				<div className="flex">
					<ViewButtonGroup />
				</div>
			</div>
			<Divider />
			{/* Second Row: Commander Selection */}
			<div className="">
				<CommanderImage />
			</div>
			<Divider />
			{/* Third Row: Deck Input */}
			<div className="w-full justify-start">
				<DeckInput />
			</div>
		</div>
	);
}
