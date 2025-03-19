import { ViewDeckContextProvider } from "@/components/viewDeckContextProvider";
import { CommanderImage, DeckInput, DeckNameInput, ViewButtonGroup } from "@/components/view-edit-deck";
import { Divider } from "@heroui/react";

export default async function ViewImportDeck({ params, searchParams }) {
    /**
     * ViewImportDeck is a page that has two modes.
     * Edit Mode: allows a user to edit and import the cards that are present in their deck. This is the default path if the user clicks NewDeck.
     * View Mode: Allows a user to view their cards and move onto suggestions
     */
    // Get the slug from the URL
    const { intialDeckName } = await params;

    // Get the query from the URL
    const awaitedSearchParams = await searchParams;
    const intialDeckMode = await awaitedSearchParams?.mode || "view";
    const intialDeckId = await awaitedSearchParams?.deckId || "";

    return (
        <ViewDeckContextProvider urlName ={intialDeckName} urlMode ={intialDeckMode} urlId={intialDeckId}>
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