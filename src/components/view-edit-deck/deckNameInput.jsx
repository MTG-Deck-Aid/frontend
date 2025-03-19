'use client';
import { useViewDeckContext } from "../viewDeckContextProvider";
import { Input } from "@heroui/react";

export default function DeckNameInput(props){
    const{isEditMode, toggleEditMode} = useViewDeckContext();

    return(
        isEditMode ? 
        <div>
            <Input
                label="Deck Name"
                type="text"
                placeholder="Example Deck Name"
                color="primary"
                classNames={{
                    label: "relative"
                }}
                />
        </div>
        :
        <div className="font-xl">
            <p>
                {props.deckName} {/**This can likely be held in a deckContext rather than passed around as a prop */}
            </p>
        </div>
    );
}