"use client";
import { useEffect } from "react";
import { useViewDeckContext } from "../context-providers/viewDeckContextProvider";
import { useUserDeckContext } from "../context-providers/userDeckContextProvider";
import { Textarea } from "@heroui/react";
// import { u } from "framer-motion/dist/types.d-B50aGbjN";

export default function DeckInput() {
    const { isEditMode } = useViewDeckContext();
    const { deckInput, setDeckInput } = useUserDeckContext();

    return (
        <div className="">
            <Textarea
                isReadOnly={isEditMode ? false : true}
                classNames={{
                    base: "relative border rounded-lg",
                    inputWrapper: "w-[100%] p-2"
                }}
                className=""
                value={deckInput}
                onChange={(event) => setDeckInput(event.target.value)}
                color="primary"
                placeholder="Paste your deck list here"
                description="We support Moxfield, MTGA, or MTGO formatting" />
        </div>
    )
}