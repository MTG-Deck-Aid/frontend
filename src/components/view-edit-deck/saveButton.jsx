"use client";
import { useDisplayNameContext, useEditContext, useLoadingContext } from "../context-providers/viewDeckContextProvider";
import { useUserDeckContext } from "../context-providers/userDeckContextProvider";
import { saveDeck } from "./utils";
import { Button } from "@heroui/button";
import SetPageTitle from "../header-components/setPageTitle";
import { useDeferredValue, useEffect } from "react";

export default function SaveButton() {
    //Page context
    const { isLoading, setIsLoading } = useLoadingContext();
    const { toggleIsEditMode } = useEditContext();
    const { displayName, setDisplayName } = useDisplayNameContext();
    //Deck context
    const { deckInput, setDeckInput, deckList, setDeckList, commander, deckName, deckId, setDeckId } = useUserDeckContext();

    const handleSave = async () => {
        setIsLoading(true);
        await saveDeck(deckInput, setDeckInput, deckList, setDeckList, commander, deckName, toggleIsEditMode, setDisplayName, deckId, setDeckId);
        setIsLoading(false);
    }

    return (
        <>
            <SetPageTitle title={displayName} />
            <Button
                size={"md"}
                onPress={handleSave}
                isLoading={isLoading ? true : false}
                color={"primary"}
                variant={"faded"}
                className=""
            >Save
            </Button>
        </>
    )
}