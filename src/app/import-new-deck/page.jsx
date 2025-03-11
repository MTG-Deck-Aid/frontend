import { Textarea, Button, Input } from "@heroui/react";
import Image from "next/image";
import emptyCommanderFrame from "/public/emptyCommander.svg"

export default function ImportNewDeck(){
    /**
     * ImportNewDeck is the page in which the user can insert their decklist via a formatted string and have it saved to their profile
     */
    const emptyImageHeight = 350;
    const emptyImageWidth = 250;

    return(
            <div className="flex flex-col items-center justify-center max-w-screen min-h-screen gap-8 p-4">
                {/* First row: Deck Name and Submit Button */}
                <div className="flex w-full justify-between items-center">
                    <div className="w-80">
                    <Input 
                        label="Deck Name"
                        type="text"
                        placeholder="Example Deck Name"
                        color="primary"
                        classNames={{
                            label: "relative"
                        }}
                        />
                    </div>
                    <Button color="primary">Import Deck</Button>
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
    );
}