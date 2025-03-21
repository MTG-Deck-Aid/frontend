'use client';
import { useDeckNameContext } from "../context-providers/userDeckContextProvider";
import { useEditContext } from "../context-providers/viewDeckContextProvider";
import { Input } from "@heroui/react";

export default function DeckNameInput() {
    /** This is the input field for the deck name
     * Onpress: update the deckName value
     */
    //Edit context
    const { isEditMode } = useEditContext();
    //deck name context
    const { deckName, setDeckName } = useDeckNameContext();

    return (
        <div>
            <Input
                isReadOnly={isEditMode ? false : true}
                label="Deck Name"
                type="text"
                color="primary"
                classNames={{
                    label: "relative"
                }}
                onChange={(event) => setDeckName(event.target.value)} //Should only change input value. setDeckName() on save button being pressed
                value={deckName}
                placeholder="New Deck Name"
            />
        </div>
    );
}