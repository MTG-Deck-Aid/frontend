'use client';
import { useViewDeckContext } from "../viewDeckContextProvider";
import { Select, SelectItem } from "@heroui/select";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@heroui/modal";
import { Button } from "@heroui/button";
import { useSearchParams } from "next/navigation";
import Link from "next/link";


export default function ViewButtonGroup() {
    const { isEditMode, toggleIsEditMode, deckInput, setDeckInput, setDeckList } = useViewDeckContext();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const searchParams = useSearchParams();

    const parseDeck = (text) => {
        // Split the text into individual lines.
        const lines = text.split('\n');
        let deckLines = [];
        let currentSection = 'deck'; // default section if none are specified
        let hasExplicitSections = false;

        // First pass: check if any explicit section headings exist.
        lines.forEach(line => {
            const trimmed = line.trim();
            if (/^(Commander|Deck|Sideboard|About):?/i.test(trimmed)) {
                hasExplicitSections = true;
            }
        });

        // Second pass: assign lines to sections.
        // (If headings like "Commander:" or "Sideboard:" appear, we use them to ignore unwanted cards.)
        lines.forEach(line => {
            const trimmed = line.trim();
            if (trimmed === '') return;

            // Update currentSection based on header lines.
            if (/^(Commander):?/i.test(trimmed)) {
                currentSection = 'commander';
                return;
            } else if (/^(Deck):?/i.test(trimmed)) {
                currentSection = 'deck';
                return;
            } else if (/^(Sideboard):?/i.test(trimmed)) {
                currentSection = 'sideboard';
                return;
            } else if (/^(About):?/i.test(trimmed)) {
                // Skip sections like About.
                currentSection = 'ignore';
                return;
            }

            // Only add lines that belong to the deck section.
            if (currentSection === 'deck') {
                deckLines.push(trimmed);
            }
        });

        // Regex to capture the quantity and card name.
        // This pattern matches a number at the start, then the card name,
        // and ignores any set identifiers or trailing numbers.
        const cardRegex = /^(\d+)\s+(.+?)(?=\s+\([^)]+\)|\s+\d+$|$)/;
        const parsedCards = [];

        deckLines.forEach(line => {
            const match = line.match(cardRegex);
            if (match) {
                const quantity = parseInt(match[1], 10);
                let cardName = match[2].trim();
                // Remove any trailing number that might remain
                cardName = cardName.replace(/\s+\d+$/, '');
                parsedCards.push({ quantity, cardName });
            }
        });

        return { cards: parsedCards };
    };

    const cardsJsonToDeckList = (cards) => {
        const lines = [];
        cards.forEach(card => {
            lines.push(`${card.quantity} ${card.cardName}`);
        });
        return lines.join('\n');
    }

    const parseAndVerifyDeck = async () => {
        const parsedDeck = parseDeck(deckInput);
        console.log(parsedDeck);

        let verified = false;
        let invalidNames = [];
        try {
            let names = parsedDeck.cards.map(card => card.cardName);
            console.log("Names: ", names);
            const response = await fetch('/api/decks/verify-cards', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ names: names })
            });
            console.log(response);

            const responseText = await response.text();
            let data = {};
            if (responseText) {
                data = JSON.parse(responseText);
            } else {
                throw new Error('Empty response from the server.');
            }
            console.log(data);

            if (data.status === 200) {
                verified = true;
            }

            if (verified) {
                console.log("Deck is valid! Exiting edit mode.");
                setDeckList(parsedDeck);
                toggleIsEditMode();
            } else {
                console.log("Deck is invalid! Removing invalid cards.");
                invalidNames = data.invalidNames;
                console.log("Invalid Names: ", invalidNames);
                for (const invalidName of invalidNames) {
                    // remove invalid names from parsedDeck
                    parsedDeck.cards = parsedDeck.cards.filter(card => card.cardName !== invalidName);
                    console.log("Removed: ", invalidName);
                }
                // NEED TO PUT ALERT HERE OF INVALID CARDS
            }

        } catch (err) {
            setError(err.message);
        }

        let deckList = cardsJsonToDeckList(parsedDeck.cards);
        console.log(deckList);
        setDeckInput(deckList);
    }
    return(
            isEditMode?(
                <div className="flex">
                    {createPageButton("Save Deck", toggleIsEditMode)}
                </div>
            ):(
                <div className="grid grid-rows-2 gap-2">
                    <>
                    {createPageButton("Get Suggestions", onOpen)}
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
                {createPageButton("Edit Deck", toggleIsEditMode)}
            </div>
        )
    )
}

const createPageButton = (label, onPressEvent) => {
    /**
     * Helper function to standardize buttons on this page
     */
    return (
        <Button
            size={"md"}
            onPress={onPressEvent}
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
