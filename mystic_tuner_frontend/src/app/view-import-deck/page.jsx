import { Textarea, Button, Input } from "@heroui/react";
import Image from "next/image";
import emptyCommanderFrame from "/public/emptyCommander.svg"
import { ViewDeckContextProvider } from "@/components/viewDeckContextProvider";
import {CommanderImage, DeckInput, DeckNameInput, ViewButtonGroup} from "@/components/view-edit-deck";


export default function ViewImportDeck(){
    /**
     * ViewImportDeck is a page that has two modes.
     * Edit Mode: allows a user to edit and import the cards that are present in their deck. This is the default path if the user clicks NewDeck.
     * View Mode: Allows a user to view their cards and move onto suggestions
     */
    const emptyImageHeight = 350;
    const emptyImageWidth = 250;

    return(
        <ViewDeckContextProvider>
            <div className="flex flex-col items-center justify-center max-w-screen min-h-screen gap-8 p-4">
                {/* First row: Deck Name and Submit Button */}
                <div className="flex w-full justify-between items-center">
                    <DeckNameInput />
                    <ViewButtonGroup />
                </div>
                {/* Second Row: Commander Selection */}
                <div className="relative flex justify-center items-center w-full max-w-md">
                    <Image
                        src={emptyCommanderFrame}
                        width={emptyImageWidth}
                        height={emptyImageHeight}
                        alt="Empty Commander Frame"
                    />
                    <Button className="absolute w-[300px] h-[60px]">Select Commander</Button>
                </div>
                {/* Third Row: Deck Input */}
                <div className="w-full">
                    <Textarea 
                        classNames={{
                            base:"w-max-full h-[120vh] p-4 border rounded-lg",
                            inputWrapper:"m-0 w-[calc(100%]"}} 
                        placeholder="Paste your deck list here"/>
                </div>
            </div>
        </ViewDeckContextProvider>
    );
}