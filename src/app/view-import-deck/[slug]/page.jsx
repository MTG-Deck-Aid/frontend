import { ViewDeckContextProvider } from "@/components/viewDeckContextProvider";
import { CommanderImage, DeckInput, DeckNameInput, ViewButtonGroup } from "@/components/view-edit-deck";
import { Divider } from "@heroui/react";

export default async function ViewImportDeck({ params }) {
    /**
     * ViewImportDeck is a page that has two modes.
     * Edit Mode: allows a user to edit and import the cards that are present in their deck. This is the default path if the user clicks NewDeck.
     * View Mode: Allows a user to view their cards and move onto suggestions
     */
    const { slug } = await params;

    return (
        <ViewDeckContextProvider>
            <div className="flex flex-col items-center justify-center max-w-screen min-h-screen gap-8 p-4">
                {/* First row: Deck Name and Button Group */}
                <div className="flex w-full justify-between items-center">
                    <div className="flex">
                        <DeckNameInput/> {/** Uses Context */}
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
                <div className="w-full">
                    <DeckInput />
                </div>
            </div>
        </ViewDeckContextProvider>
    );
}