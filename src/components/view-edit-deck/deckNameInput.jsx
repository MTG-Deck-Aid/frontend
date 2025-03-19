'use client';
import { useViewDeckContext } from "../viewDeckContextProvider";
import { Input } from "@heroui/react";

export default function DeckNameInput(props) {
    const { isEditMode, deckName, setDeckName } = useViewDeckContext();

    return (
        isEditMode ?
            <div className="">
                <Input
                    label="Deck Name"
                    type="text"
                    placeholder="Example Deck Name"
                    color="primary"
                    classNames={{
                        label: "relative"
                    }}
                    value={deckName}
                    onChange={(event) => setDeckName(event.target.value)}
                />
            </div>
            :
            <div className="">
                <p>
                    {deckName} {/**This can likely be held in a deckContext rather than passed around as a prop */}
                </p>
            </div>
    );
}