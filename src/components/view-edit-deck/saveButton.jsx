"use client";
import { useDisplayNameContext, useEditContext, useLoadingContext } from "../context-providers/viewDeckContextProvider";
import { useUserDeckContext, useDeckListContext } from "../context-providers/userDeckContextProvider";
import { saveDeck } from "./utils";
import { Button } from "@heroui/button";
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