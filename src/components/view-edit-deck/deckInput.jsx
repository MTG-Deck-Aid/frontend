"use client";
import { useViewDeckContext } from "../viewDeckContextProvider";
import { Textarea } from "@heroui/react";
// import { u } from "framer-motion/dist/types.d-B50aGbjN";

export default function DeckInput() {
    const { isEditMode, setDeckInput, deckInput } = useViewDeckContext();

    const handleChange = (event) => {
        setDeckInput(event.target.value);
    }

    return (
        <div className="w-full">
            <Textarea
                isReadOnly={isEditMode ? false : true}
                classNames={{
                    base: "w-max-full h-[120vh] p-4 border rounded-lg",
                    inputWrapper: "m-0 w-[calc(100%]"
                }}
                value={deckInput}
                onChange={handleChange}
                placeholder="Paste your deck list here" />
        </div>
    )
}