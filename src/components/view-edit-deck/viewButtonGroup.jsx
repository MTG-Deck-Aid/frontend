'use client';
import { useEditContext, useLoadingContext } from "../context-providers/viewDeckContextProvider";
import SaveButton from "./saveButton";
import { Select, SelectItem } from "@heroui/select";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@heroui/modal";
import { Button } from "@heroui/button";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ViewButtonGroup(props) {
    //page context
    const { isEditMode, toggleIsEditMode } = useEditContext();
    const { isLoading } = useLoadingContext();
    //modal context
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    //route handler
    const searchParams = useSearchParams();

    /** Function to save the current deck (to database if logged in) and exit edit mode.
     *  @returns {void}
     */

    return (
        isEditMode ? (
            <div className="flex">
                <SaveButton />
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
                                                pathname: `./card-suggestions`,
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
            <Select
                label={label}
                classNames={{
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
