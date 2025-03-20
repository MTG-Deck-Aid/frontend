'use client';
import { useDeckNameContext } from "../context-providers/userDeckContextProvider";
import { Input } from "@heroui/react";
import SetPageTitle from "../header-components/setPageTitle";

export default function DeckNameInput() {
    /** This is the input field for the deck name
     * Onpress: update the deckName value
     */
    //deck name context
    const {deckName, setDeckName} = useDeckNameContext();

    return (
        <div>
            <SetPageTitle title={deckName}/>
            <Input
                label="Deck Name"
                type="text"
                color="primary"
                classNames={{
                    label: "relative"
                }}
                onChange={(event) => setDeckName(event.target.value)} //Should only change input value. setDeckName() on save button being pressed
                value={deckName}
            />
        </div>
    );
}