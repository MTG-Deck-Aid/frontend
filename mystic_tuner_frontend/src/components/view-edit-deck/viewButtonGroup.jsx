'use client';
import { useViewDeckContext } from "../viewDeckContextProvider";
import { Select, SelectItem} from "@heroui/select";
  import{ Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@heroui/modal";
  import { Button } from "@heroui/button";
import { listbox } from "@heroui/theme";


export default function ViewButtonGroup(){
    const{isEditMode, toggleIsEditMode} = useViewDeckContext();
    const{isOpen, onOpen, onOpenChange} = useDisclosure();

    return(
            isEditMode?(
                <div className="flex">
                    <Button
                        onPress={toggleIsEditMode}>   
                    Save
                    </Button>
                </div>
            ):(
                <div className="flex flex-col gap-2">
                    <>
                    <Button
                        onPress={onOpen}
                        size="md"
                        > Get Suggestions 
                    </Button>
                    <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange} size="sm">
                        <ModalContent>
                            {(onClose) => (
                                <>
                                <ModalHeader className="flex flex-col gap-1">Ready to Submit?</ModalHeader>
                                <ModalBody className="flex flex-col">
                                    {createSelect("Number of cards to add")}
                                    {createSelect("Number of cards to remove")}
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="flat" onPress={onClose}>
                                    Let me Back!
                                    </Button>
                                    <Button color="primary" onPress={onClose}>
                                    Okay!
                                    </Button>
                                </ModalFooter>
                                </>
                            )}
                        </ModalContent>
                    </Modal>
                    </>
                    <Button
                        size="md"
                        onPress={toggleIsEditMode}
                    >Edit Deck</Button>
                </div>
            )
    )
}

const createSelect = (label) => {
    const maxCards = 5;
    const numberArray = arrayFromRange(1, maxCards, 1);


    return(
        <div>
            <Select label={label} classNames={{base:"max-w-[inherit]", innerWrapper:"max-w-[inherit]", popoverContent: "max-w-[inherit] relative", listbox:"max-w-[inherit]"}}>
                {numberArray.map((item, index) =>{ return(
                    <SelectItem key={index}>{item}</SelectItem>
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
