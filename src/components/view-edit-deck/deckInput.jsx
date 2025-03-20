"use client";
import { useDeckInputContext } from "../context-providers/userDeckContextProvider";
import { useEditContext } from "../context-providers/viewDeckContextProvider";
import { Textarea } from "@heroui/react";
// import { u } from "framer-motion/dist/types.d-B50aGbjN";

export default function DeckInput() {
    //Edit context
    const { isEditMode, setIsEditMode } = useEditContext();
    //Deck context
    const{deckInput, setDeckInput} = useDeckInputContext()

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
                onChange={(event) => {setDeckInput(event.target.value)}} //either this should be in the pageContext or should wait to setDeckInput when save button is pressed
                color="primary"
                placeholder="Paste your deck list here"
                description="We support Moxfield, MTGA, or MTGO formatting"
                isRequired={true} />
        </div>
    )
}