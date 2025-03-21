"use client";
import { useState, useEffect } from "react";
import { useEditContext, useLoadingContext} from "../context-providers/viewDeckContextProvider";
import { useCommanderContext} from "../context-providers/userDeckContextProvider";
import Image from "next/image";
import NameAutocomplete from "./nameAutocomplete";
import emptyCommanderFrame from "/public/emptyCommander.svg";

export default function CommanderImage() {
    //page context
    const { isEditMode, setIsEditMode } = useEditContext();
    const {isLoading, setIsLoading} = useLoadingContext();
    //commander context
    const {commander, setCommander} = useCommanderContext();
    //component state
    const [commanderImage, setCommanderImage] = useState(emptyCommanderFrame);

    const fetchAndSetCommanderImage = async (name) => {
        let input = { commander: name };
        let data = null;
        try {
            const response = await fetch('/api/decks/commander', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(input)
            });
            data = await response.json();
            console.log('Commander Image Data: ', data);
        } catch (error) {
            console.error('Error fetching commander image: ', error);
        }

        if (data.status === 200) {
            setCommander(data.commander);
            try {
                let image = data.images.normal;
                console.log('Commander Image: ', image);
                setCommanderImage(image);
            } catch (error) {
                console.error('Error setting commander image: ', error);
            }
        }
    }

    useEffect(() => {
        //load the commander image whenever the commander is changed
        if(!commander){
            return;
        }
        setIsLoading(true);
        fetchAndSetCommanderImage(commander);
        setIsLoading(false);
    }, [commander]);

    //Page constants
    const imageHeight = 350;
    const imageWidth = 250;

    return (
        <div className="flex flex-col justify-center items-center w-full max-w-md">
            <p className="text-2xl font-body m-0.5">{commander}</p>
            <Image
                src={commanderImage}
                width={imageWidth}
                height={imageHeight}
                alt={'Commander Image'}
                className="rounded-2xl border-white border-solid border-2"
            />
            {isEditMode && <NameAutocomplete />}
        </div>
    );
}