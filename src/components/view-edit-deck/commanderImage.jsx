"use client";
import { useViewDeckContext } from "../viewDeckContextProvider";
import Image from "next/image";
import {Button} from "@heroui/react";
import { Autocomplete, AutocompleteItem, AutocompleteSection, Input } from "@heroui/react";
import emptyCommanderFrame from "/public/emptyCommander.svg";

export default function CommanderImage(props){
    const{isEditMode} = useViewDeckContext();   
    
    //Page constants
    const imageHeight = 350;
    const imageWidth = 250;



    return(
        isEditMode?( 
            <div className="relative flex justify-center items-center w-full max-w-md">
                <Image
                    src={emptyCommanderFrame}
                    width={imageWidth}
                    height={imageHeight}
                    alt="Empty Commander Frame"
                />
                <Autocomplete
                    label="Select Commander"
                    placeholder="Search a commander"
                    classNames={{
                        base: "max-w-xs absolute w-[300px] h-[80px]",
                        selectorButton: "hidden"
                    }}
                    inputProps={{
                        classNames:{label:"my-0 relative"}
                    }}
                    onInputChange={searchCommander}
                >
                </Autocomplete>
            </div>
        ):(
            <div className="flex flex-col justify-center items-center w-full max-w-md">
                <p>Commander Name</p>
                <Image
                    src={emptyCommanderFrame}
                    width={imageWidth}
                    height={imageHeight}
                    alt="Empty Commander Frame"
                />
            </div>
        )
    );
}

const searchCommander = () => {

}