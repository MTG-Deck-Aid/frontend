"use client";
import { useViewDeckContext } from "../viewDeckContextProvider";
import { Textarea } from "@heroui/react";

export default function DeckInput(){
    const{isEditMode} = useViewDeckContext();
    return(
        <div className="w-full">
            <Textarea
                isReadOnly = {isEditMode?false:true}
                classNames={{
                    base:"w-max-full h-[120vh] p-4 border rounded-lg",
                    inputWrapper:"m-0 w-[calc(100%]"}} 
                placeholder="Paste your deck list here"/>
        </div>
    )
}