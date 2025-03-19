import { ViewDeckContextProvider } from '@/components/viewDeckContextProvider';
import {
	CommanderImage,
	DeckInput,
	DeckNameInput,
	ViewButtonGroup,
} from '@/components/view-edit-deck';
import { Divider } from '@heroui/react';

export default async function ViewImportDeck({ params }) {
	/**
	 * ViewImportDeck is a page that has two modes.
	 * Edit Mode: allows a user to edit and import the cards that are present in their deck. This is the default path if the user clicks NewDeck.
	 * View Mode: Allows a user to view their cards and move onto suggestions
	 */
	const { slug } = await params;

	return (
		<ViewDeckContextProvider>
			<div className="w-full min-h-screen flex flex-col items-center lg:gap-8">
				{/* First row: Deck Name and Button Group */}
				<div className="flex flex-col-reverse w-full items-start gap-4 md:flex-row md:justify-between">
					<div className="flex">
						<DeckNameInput deckName="Placeholder Deck" />{' '}
						{/**Initial deck name. Could be passed as a prop or setup as a context provider
						 * Look at viewDeckContextProvider for additional info.
						 */}
					</div>
					<div className="float-right flex">
						<ViewButtonGroup />
					</div>
				</div>
				<Divider />
				{/* Second Row: Commander Selection */}
				<div>
					<CommanderImage />
				</div>
				<Divider />
				{/* Third Row: Deck Input */}
				<div className="w-[90%]">
					<DeckInput />
				</div>
			</div>
		</ViewDeckContextProvider>
	);
}
