import { Textarea, Button } from "@heroui/react";
import Image from "next/image";

export default function ImportNewDeck(){

    const emptyImageHeight = 350;
    const emptyImageWidth = 250;

    return(
            <div className="flex flex-col items-center justify-center w-full min-h-screen gap-8 p-4">
                {/* First row: Deck Name and Submit Button */}
                <div className="flex w-full justify-start items-center gap-8">
                    <Textarea 
                        label="Deck Name"
                        disableAutosize 
                        classNames={{
                            base:"m-10",
                            inputWrapper:"max-w-[calc(100%)] m-0 min-h-40px"
                        }}
                        color="secondary"
                        placeholder="Import Deck Name Here" />
                    <Button fullWidth color="primary">Import Deck</Button>
                </div>
                {/* Second Row: Commander Selection */}
                <div className="relative flex justify-center items-center w-full max-w-md">
                    <Image
                        src="emptyCommander.svg"
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
                            inputWrapper:"m-0 w-[calc(100%"}} 
                        placeholder="Paste your deck list here"/>
                </div>
            </div>
    );
}