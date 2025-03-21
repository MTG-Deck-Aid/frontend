'use client';
import { useViewDeckContext } from "../context-providers/viewDeckContextProvider";
import { useUserDeckContext } from "../context-providers/userDeckContextProvider";
import { Select, SelectItem } from "@heroui/select";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@heroui/modal";
import { Button } from "@heroui/button";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";


export default function ViewButtonGroup() {
    const { isEditMode, toggleIsEditMode, isLoading, setIsLoading } = useViewDeckContext();
    const { parseDeckInput, deparseDeckList,
        verifyDeckList, printContext,
        deckInput, setDeckInput,
        deckList, setDeckList,
        commander, deckName } = useUserDeckContext();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const searchParams = useSearchParams();

    /** Function to save the current deck (to database if logged in) and exit edit mode.
     *  @returns {void}
     */
    const saveDeck = async () => {
        setIsLoading(true); // Set loading to true to prevent multiple clicks

        // Remains true if: valid deckList, commander exists, and deckName exists
        let validSave = true;
        let invalidFields = [];

        // Parse the deck input into a JSON object.
        const parsedDeck = parseDeckInput(deckInput);
        // Validate the deck list.
        let invalidNames = await verifyDeckList(parsedDeck);
        console.log("Invalid Names: ", invalidNames);
        if (invalidNames.length > 0) {
            validSave = false;
            invalidFields.push("Invalid Cards: " + invalidNames.join(", "));
            // Remove invalid cards from the deck list.
            parsedDeck.cards = parsedDeck.cards.filter(card => !invalidNames.includes(card.cardName));
            invalidFields.push("(These names have been removed from your list)");
        }
        // Update the deck input with the parsed deck list.
        setDeckInput(deparseDeckList(parsedDeck.cards));
        setDeckList(parsedDeck);

        // Deck List needs at least 10 cards
        if (parsedDeck.cards.length < 10) {
            // ALERT MESSAGE
            validSave = false;
            invalidFields.push("Deck must have at least 10 cards.");
        }

        // Commander is required (not empty string)
        if (commander === '') {
            // ALERT MESSAGE
            validSave = false;
            invalidFields.push("Commander is required.");
        }

        // Deck Name is required (not empty string)
        if (deckName === '' || deckName === 'New Deck') {
            // ALERT MESSAGE
            validSave = false;
            invalidFields.push("Deck Name is required.");
        }

        if (!validSave) {
            // @CodyCasselman: Alert user of invalid fields
            //
            // ALERT SHIT GO HERE
            //
            console.log("Invalid Fields: ", invalidFields);
        } else {
            // @b-smiley: Save the deck to the database if user is logged in
            /*
            "commander" has the commander name (string)
            "deckName" has the deck name (string)
            "deckList" has the JSON deck list in the format:
            {
            cards: [
                { quantity: 4, cardName: 'Name1' }, 
                { quantity: 1, cardName: 'Name2' }
            ]
            }
            */

            // IF LOGGED IN:
            //   SAVE TO DATABASE

            // Console log, deckList, commander, and deckName
            toggleIsEditMode();
        }
        printContext();
        setIsLoading(false);
    }

    return (
        isEditMode ? (
            <div className="flex">
                {createPageButton("Save Deck", saveDeck, isLoading)}
            </div>
        ) : (
            <div className="grid grid-rows-2 gap-2">
                <>
                    {createPageButton("Get Suggestions", onOpen, isLoading)}
                    <Modal isOpen={isOpen} placement="top-center" hideCloseButton={true} onOpenChange={onOpenChange} size="sm">
                        <ModalContent>
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-col p-2 m-2">Ready to Submit?</ModalHeader>
                                    <ModalBody className="flex flex-col m-2 py-0">
                                        {createSelect("Number of cards to add")}
                                        {createSelect("Number of cards to remove")}
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="danger" variant="flat" onPress={onClose} >
                                            Not yet!
                                        </Button>
                                        <Button color="primary" as={Link} className="no-underline"
                                            href={{
                                                pathname: `../card-suggestions/${searchParams.get("title")}`,
                                                query: { title: searchParams.get("title") },
                                            }}>
                                            Okay!
                                        </Button>
                                    </ModalFooter>
                                </>
                            )}
                        </ModalContent>
                    </Modal>
                </>
                {createPageButton("Edit Deck", toggleIsEditMode, isLoading)}
            </div>
        )
    )
}

const createPageButton = (label, onPressEvent, isLoading) => {
    /**
     * Helper function to standardize buttons on this page
     */
    return (
        <Button
            size={"md"}
            onPress={onPressEvent}
            isLoading={isLoading ? true : false}
            color={"primary"}
            variant={"faded"}
            className=""
        >{label}
        </Button>
    )
}

const createSelect = (label) => {
    const maxCards = 5;
    const numberArray = arrayFromRange(1, maxCards, 1);

    return (
        <div>
            <Select label={label} classNames={{
                innerWrapper: "group-data-[has-label=true]:pt-0",
                label: "text-xs my-0 relative",
                popoverContent: "p-4 py-1"
            }}
                listboxProps={{
                    classNames: { base: "w-full", list: "ps-0 w-max-fit" }
                }}
                labelPlacement={"inside"}>
                {numberArray.map((item, index) => {
                    return (
                        <SelectItem key={index} textValue={item}>{item}</SelectItem> // add onSelect={function} to cause something to happen on select.
                        //the event handler will use the key as an argument. change accordingly (must be unique to the list)
                    )
                })}
            </Select>
        </div>
    )
}

const arrayFromRange = (start, stop, step) =>
    /**Creates an array from start to stop with step */
    Array.from(
        { length: (stop - start) / step + 1 },
        (value, index) => start + index * step
    );
