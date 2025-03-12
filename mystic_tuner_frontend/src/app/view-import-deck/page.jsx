import { ViewDeckContextProvider } from "@/components/viewDeckContextProvider";
import {CommanderImage, DeckInput, DeckNameInput, ViewButtonGroup} from "@/components/view-edit-deck";


export default function ViewImportDeck(){
    /**
     * ViewImportDeck is a page that has two modes.
     * Edit Mode: allows a user to edit and import the cards that are present in their deck. This is the default path if the user clicks NewDeck.
     * View Mode: Allows a user to view their cards and move onto suggestions
     */
    

    return(
        <ViewDeckContextProvider>
            <div className="flex flex-col items-center justify-center max-w-screen min-h-screen gap-8 p-4">
                {/* First row: Deck Name and Submit Button */}
                <div className="flex w-full justify-between items-center">
                    <div className="flex justify-self-start">
                        <DeckNameInput deckName="Placeholder Deck" />
                    </div>
                    <div className="flex justify-self-end">
                        <ViewButtonGroup />
                    </div>
                </div>
                {/* Second Row: Commander Selection */}
                <div className="">
                    <CommanderImage />
                </div>
                {/* Third Row: Deck Input */}
                <div className="w-full">
                    <DeckInput />
                </div>
            </div>
        </ViewDeckContextProvider>
    );
}