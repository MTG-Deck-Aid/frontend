'use client';
import { useViewDeckContext } from "../context-providers/viewDeckContextProvider";
import { useUserDeckContext } from "../context-providers/userDeckContextProvider";
import { Input } from "@heroui/react";

export default function DeckNameInput(props) {
    /** This is the input field for the deck name
     * Onpress: update the deckName value
     */
    //deck context
    const deckName = props.deckName;
    const setDeckName = props.setDeckName;

    return (
        <div>
            <Input
                label="Deck Name"
                type="text"
                color="primary"
                classNames={{
                    label: "relative"
                }}
                onChange={(event) => setDeckName(event.target.value)}
                value={deckName}
            />
        </div>
    );
}