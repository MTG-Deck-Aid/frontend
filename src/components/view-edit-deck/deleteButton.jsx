"use client";
import { useDisplayNameContext, useEditContext, useLoadingContext } from "../context-providers/viewDeckContextProvider";
import { useUserDeckContext, useDeckListContext } from "../context-providers/userDeckContextProvider";
import { saveDeck } from "./utils";
import { Button } from "@heroui/button";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import SetPageTitle from "../header-components/setPageTitle";
import { addToast } from "@heroui/react";

/**
 * TODO - The SaveButton and Delete Button are both very similar and could be refactored into a ActionButton component
 * Executes a SQL update to delete the deck from the database
 */
export default function DeleteButton() {
    //Page context
    const { isLoading, setIsLoading } = useLoadingContext();
    const { toggleIsEditMode } = useEditContext();
    const { displayName, setDisplayName } = useDisplayNameContext();
    //Deck context
    const { deckInput, setDeckInput, commander, deckName, deckId, setDeckId } = useUserDeckContext();
    const { deckList, setDeckList } = useDeckListContext();

    const handleDelete = async () => {
        const confirmDelete = confirm("Are you sure you want to delete this deck?");
        if (!confirmDelete)
            return;
        setIsLoading(true);
        console.log("Deck ID: ", deckId);
        await deleteDeck(deckId);
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
                onPress={handleDelete}
                isLoading={isLoading ? true : false}
                color={"danger"}
                variant={"faded"}
                className=""
            >Delete
            </Button>
        </>
    )
}

/** Calls server side nextjs */
async function deleteDeck (deckId) {
    const response = await fetch(`/api/decks/delete-deck`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            deckId: deckId,
        }),
    });

    if (response.status === 200) {
        addToast({
            title: 'Deck Deleted',
            message: 'Deck has been deleted',
            appearance: 'success',
        });
    } else {
        addToast({
            title: 'Error Deleting Deck',
            message: 'Error deleting deck. If this persists, please contact support.',
            appearance: 'error',
        });
    }
}