'use client';
import { useViewDeckContext } from "../viewDeckContextProvider";
import { Button } from "@heroui/button";

export default function ViewButtonGroup(){
    const{isEditMode, toggleIsEditMode} = useViewDeckContext();
    
    return(
        isEditMode?(
            <div>
                <Button
                    onPress={toggleIsEditMode}>   
                Save
                </Button>
            </div>
        ):(
            <div>
                <Button>Get Suggestions</Button>
                <Button
                    onPress={toggleIsEditMode}
                >Edit Deck</Button>
            </div>
        )
    )
}
