"use client";

import {
    useDisplayNameContext,
    useEditContext,
    useLoadingContext,
} from "../context-providers/viewDeckContextProvider";
import {
    useUserDeckContext,
    useDeckListContext,
} from "../context-providers/userDeckContextProvider";
import { saveDeck } from "./utils";
import { Button } from "@heroui/button";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import SetPageTitle from "../header-components/setPageTitle";
import { auth0 } from '@/lib/auth0.js';

export default function SaveButton() {
    // Local Use states
    const [buttonName, setButtonName] = useState("Verify");

    //Page context
    const { isLoading, setIsLoading } = useLoadingContext();
    const { toggleIsEditMode } = useEditContext();
    const { displayName, setDisplayName } = useDisplayNameContext();
    //Deck context
    const { deckInput, setDeckInput, commander, deckName, deckId, setDeckId } =
        useUserDeckContext();
    const { deckList, setDeckList } = useDeckListContext();

    const handleSave = async () => {
        setIsLoading(true);
        await saveDeck(
            deckInput,
            setDeckInput,
            deckList,
            setDeckList,
            commander,
            deckName,
            deckId,
            setDeckId,
            toggleIsEditMode,
            setDisplayName
        );
        setIsLoading(false);
    };

    const handleDisplayedText = async () => {
        fetch("/api/auth/authenticated/")
            .then(async (res) => await res.json())
            .then((data) => {
                if (data.data.isAuthenticated) {
                    setButtonName("Verfiy & Save Deck");
                } else {
                    setButtonName("Verify Deck");
                }
            })
            .catch((error) => {
                console.error("Error getting user decks:", error);
            });
    };

    let searchParams = useSearchParams();
    /**OnLoad we want to set the page title based on what it was before */
    useEffect(() => {
        let initPageTitle = searchParams.get("title");
        setDisplayName(initPageTitle);

        // Check if the user is authenticated
        handleDisplayedText();
    }, []);

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
            >
                {buttonName}
            </Button>
        </>
    );
}