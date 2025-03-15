"use client";
import { useViewDeckContext } from "../viewDeckContextProvider";
import Image from "next/image";

import {autocomplete} from "./actions.jsx";
import NameAutocomplete from "./nameAutocomplete";
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

                <NameAutocomplete />
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

const searchCommander = (query) => {
    autocomplete(query);
}