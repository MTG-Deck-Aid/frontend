'use client';
import { useDeckNameContext } from "../context-providers/userDeckContextProvider";
import { useDisplayNameContext } from "../context-providers/viewDeckContextProvider";
import { Input } from "@heroui/react";


export default function DeckNameInput() {
    /** This is the input field for the deck name
     * Onpress: update the deckName value
     */
    //deck name context
    const {deckName} = useDeckNameContext();
    const {displayName, setDisplayName} = useDisplayNameContext();
    
    return (
        <div>
            <Input
                label="Deck Name"
                type="text"
                color="primary"
                classNames={{
                    label: "relative"
                }}
                onChange={(event) => setDisplayName(event.target.value)} //Should only change input value. setDeckName() on save button being pressed
                value={displayName}
                defaultValue={deckName}
            />
        </div>
    );
}