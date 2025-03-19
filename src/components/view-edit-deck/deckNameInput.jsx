'use client';
import { useViewDeckContext } from "../context-providers/viewDeckContextProvider";
import { Input } from "@heroui/react";

export default function DeckNameInput(props) {
    const { printContext } = useViewDeckContext();
    const { deckName, setDeckName } = UserDeckContextProvider();

    const handleChange = (event) => {
        setDeckName(event.target.value);
        printContext();
    }

    return (
        <div>
            <Input
                label="Deck Name"
                type="text"
                color="primary"
                classNames={{
                    label: "relative"
                }}
                onChange={(event) => handleChange(event)}
                value={deckName}
            />
        </div>
    );
}