"use client";
import { useViewDeckContext } from "../viewDeckContextProvider";
import { Textarea } from "@heroui/react";
// import { u } from "framer-motion/dist/types.d-B50aGbjN";
import { useEffect } from "react";

export default function DeckInput() {
    const { isEditMode, setDeckInput } = useViewDeckContext();

    const handleChange = (event) => {
        setDeckInput(event.target.value);
    }

    // For testing purposes
    // useEffect(() => {
    //     console.log('Deck Input: ', deckInput);
    // }, [deckInput]);

    return (
        <div className="w-full">
            <Textarea
                isReadOnly={isEditMode ? false : true}
                classNames={{
                    base: "p-4 border rounded-lg",
                    inputWrapper: "m-0 w-[calc(1]"
                }}
                className="relative w-[100%]"
                onChange={handleChange}
                placeholder="Paste your deck list here"
                description="We support Moxfield, MTGA, or MTGO formatting" />
        </div>
    )
}