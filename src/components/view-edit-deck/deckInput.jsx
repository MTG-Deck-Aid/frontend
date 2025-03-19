"use client";
import { useEffect } from "react";
import { useViewDeckContext } from "../viewDeckContextProvider";
import { Textarea } from "@heroui/react";
// import { u } from "framer-motion/dist/types.d-B50aGbjN";

export default function DeckInput() {
    const { isEditMode, setDeckInput, deckInput } = useViewDeckContext();

    return (
        <div className="w-full">
            <Textarea
                key={deckInput.length}
                isReadOnly={isEditMode ? false : true}
                classNames={{
                    base: "w-max-full h-[120vh] p-4 border rounded-lg",
                    inputWrapper: "m-0 w-[calc(100%]"
                }}
                value={deckInput}
                // onChange={(event) => setDeckInput(event.target.value)}
                placeholder="Paste your deck list here" />
        </div>
    )
}