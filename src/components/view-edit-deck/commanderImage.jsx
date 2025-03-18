"use client";
import { useState, useEffect } from "react";
import { useViewDeckContext } from "../viewDeckContextProvider";
import Image from "next/image";
import NameAutocomplete from "./nameAutocomplete";
import emptyCommanderFrame from "/public/emptyCommander.svg";

export default function CommanderImage() {
    const { isEditMode } = useViewDeckContext();
    const [commander, setCommanderName] = useState(""); //TODO: put in default commander value
    const [commanderImage, setCommanderImage] = useState(emptyCommanderFrame);

    const handleNameChange = (name) => {
        setCommanderName(name);
    };

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
        console.log('Commander Returned: ', commander);
        console.log('Fetching Commander Image');
        fetchAndSetCommanderImage(commander);
    }, [commander]);

    //Page constants
    const imageHeight = 350;
    const imageWidth = 250;

    return (
        isEditMode ? (
            <div className="relative flex justify-center items-center w-full max-w-md">
                <Image
                    src={commanderImage}
                    width={imageWidth}
                    height={imageHeight}
                    alt="Empty Commander Frame"
                />

                <NameAutocomplete onNameChange={handleNameChange} />
            </div>
        ) : (
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