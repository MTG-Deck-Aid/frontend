"use client";
import { useDisplayNameContext, useEditContext, useLoadingContext } from "../context-providers/viewDeckContextProvider";
import { useUserDeckContext } from "../context-providers/userDeckContextProvider";
import { saveDeck } from "./utils";
import { Button } from "@heroui/button";
import SetPageTitle from "../header-components/setPageTitle";
import { useDeferredValue, useEffect } from "react";

export default function SaveButton(){
    //Page context
    const {isLoading, setIsLoading} = useLoadingContext();
    const {isEditMode, toggleIsEditMode} = useEditContext();
    const {displayName, setDisplayName} = useDisplayNameContext();
    //Deck context
    const {deckInput, setDeckInput, setDeckList, commander, deckName, setDeckName, deckId, setDeckId} = useUserDeckContext();
    
    const handleSave = async ({deckInput, setDeckInput, setDeckList, commander, deckName, deckId, setDeckId}) => {
        setIsLoading(true);
        setDeckName(displayName) //set the display name when we press the save button
        await saveDeck(deckInput, setDeckInput, setDeckList, commander, deckName, toggleIsEditMode);
        setIsLoading(false);
    }

    return (
        <>
        <SetPageTitle title={deckName}/>
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