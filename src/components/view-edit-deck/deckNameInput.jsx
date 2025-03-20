'use client';
import { useViewDeckContext } from "../context-providers/viewDeckContextProvider";
import { useUserDeckContext } from "../context-providers/userDeckContextProvider";
import { Input } from "@heroui/react";

export default function DeckNameInput(props) {
    const { deckName, setDeckName } = useUserDeckContext();

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