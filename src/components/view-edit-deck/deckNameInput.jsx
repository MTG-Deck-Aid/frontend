'use client';
import { useViewDeckContext } from "../viewDeckContextProvider";
import { Input } from "@heroui/react";

export default function DeckNameInput(props){
    const{isEditMode, toggleEditMode} = useViewDeckContext();

    return(
        isEditMode ? 
        <div className="w-80">
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
        <div className="w-80">
            <p>
                {props.deckName}
            </p>
        </div>
    );
}