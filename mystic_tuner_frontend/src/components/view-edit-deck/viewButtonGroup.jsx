'use client';
import { useViewDeckContext } from "../viewDeckContextProvider";
import { Button, Select } from "@heroui/react";

export default function ViewButtonGroup(){
    const{isEditMode, toggleIsEditMode} = useViewDeckContext();
    
    return(
            isEditMode?(
                <div className="flex">
                    <Button
                        onPress={toggleIsEditMode}>   
                    Save
                    </Button>
                </div>
            ):(
                <div className="flex flex-col gap-2">
                    <Button
                        size="md"
                    >Get Suggestions</Button>
                    <Button
                        size="md"
                        onPress={toggleIsEditMode}
                    >Edit Deck</Button>
                </div>
            )
    )
}
