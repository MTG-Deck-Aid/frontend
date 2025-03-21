"use client";
import { useDisplayNameContext, useEditContext, useLoadingContext } from "../context-providers/viewDeckContextProvider";
import { useUserDeckContext, useDeckListContext } from "../context-providers/userDeckContextProvider";
import { saveDeck } from "./utils";
import { Button } from "@heroui/button";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import SetPageTitle from "../header-components/setPageTitle";

export default function SaveButton() {
    //Page context
    const { isLoading, setIsLoading } = useLoadingContext();
    const { toggleIsEditMode } = useEditContext();
    const { displayName, setDisplayName } = useDisplayNameContext();
    //Deck context
    const { deckInput, setDeckInput, commander, deckName, deckId, setDeckId } = useUserDeckContext();
    const { deckList, setDeckList } = useDeckListContext();

    const handleSave = async () => {
        setIsLoading(true);
        await saveDeck(deckInput, setDeckInput, deckList, setDeckList, commander, deckName, deckId, setDeckId, toggleIsEditMode, setDisplayName);
        setIsLoading(false);
    }

    let searchParams = useSearchParams();
    /**OnLoad we want to set the page title based on what it was before */
    useEffect(() => {
        let initPageTitle = searchParams.get("title");
        setDisplayName(initPageTitle);
    }, [])

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