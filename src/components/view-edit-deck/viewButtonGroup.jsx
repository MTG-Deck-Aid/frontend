'use client';
import { useViewDeckContext } from "../viewDeckContextProvider";
import { Select, SelectItem} from "@heroui/select";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@heroui/modal";
import { Button } from "@heroui/button";
import { useSearchParams } from "next/navigation";
import Link from "next/link";


export default function ViewButtonGroup(){
    const{isEditMode, toggleIsEditMode} = useViewDeckContext();
    const{isOpen, onOpen, onOpenChange} = useDisclosure();
    const searchParams = useSearchParams();

    return(
            isEditMode?(
                <div className="flex">
                    {createPageButton("Save Deck", toggleIsEditMode)}
                </div>
            ):(
                <div className="flex flex-col gap-2">
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
                                    <Button color="primary" as={Link}  className="no-underline"
                                    href={{
                                        pathname: `../card-suggestions/${searchParams.get("title")}`,
                                        query: {title:searchParams.get("title")},
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
    return(
        <Button
            size={"md"}
            onPress={onPressEvent}
            color={"primary"}
            variant={"faded"}
        >{label}
        </Button>
    )
}

const createSelect = (label) => {
    const maxCards = 5;
    const numberArray = arrayFromRange(1, maxCards, 1);

    return(
        <div>
            <Select label={label}  classNames={{
                innerWrapper:"group-data-[has-label=true]:pt-0",
                label:"text-xs my-0 relative",
                popoverContent:"p-4 py-1"
                }} 
                listboxProps={{
                    classNames:{base:"w-full", list:"ps-0 w-max-fit"}
                }}
                labelPlacement={"inside"}>
                {numberArray.map((item, index) =>{ return(
                    <SelectItem key={index} textValue={item}>{item}</SelectItem>
                )})}
            </Select>
        </div>
    )
}

const arrayFromRange = (start, stop, step) => 
    Array.from(
    {length: (stop-start) / step + 1},
    (value, index) => start + index * step
);
