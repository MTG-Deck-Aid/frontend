"use client";
import { useEditContext, useLoadingContext } from "../context-providers/viewDeckContextProvider";
import { useDeckInputContext, useDeckListContext, useCommanderContext, useDeckNameContext } from "../context-providers/userDeckContextProvider";
import { saveDeck } from "./utils";
import { Button } from "@heroui/button";

export default function SaveButton(){
    const {isLoading, setIsLoading} = useLoadingContext();
    const {isEditMode, toggleIsEditMode} = useEditContext();
    const {deckInput, setDeckInput} = useDeckInputContext();
    const {deckList, setDeckList} = useDeckListContext();
    const {commander, setCommander} = useCommanderContext();
    const {deckName, setDeckName} = useDeckNameContext();

    const handleSave = async () => {
        setIsLoading(true);
        await saveDeck(deckInput, setDeckInput, setDeckList, commander, deckName, toggleIsEditMode);
        setIsLoading(false);
    }

    return (
        <Button
            size={"md"}
            onPress={handleSave}
            isLoading={isLoading ? true : false}
            color={"primary"}
            variant={"faded"}
            className=""
        >Save
        </Button>
    )
}