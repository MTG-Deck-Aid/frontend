"use client";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@heroui/modal";
import { Button } from "@heroui/button";
import Image from "next/image";


export default function SuggestionModal(props){
    /**
     * SuggestionModal is a window that pops up with generated suggestions for certain cards.
     */
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const cardHeight = 375;
    const cardWidth = Math.round(0.75 * cardHeight);
    const card = props.card
    return(
        <div>
        <>
        <Button onPress={onOpen} className="min-w-fit min-h-fit">
            <Image 
                alt={card.name}
                height={cardHeight}
                width={cardWidth}
                src={card.image_uris.normal}
            />
        </Button>
        <Modal isOpen={isOpen} placement="top-center" size="lg" backdrop="opaque" onOpenChange={onOpenChange}>
            <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                    <ModalBody className="flex flex-col m-2 py-0">
                    <div>
                        <p>
                            Blah Blah Blah Card Card Card Blah Blah Blah Card Card CardBlah Blah Blah Card Card Card
                            Blah Blah Blah Card Card CardBlah Blah Blah Card Card CardBlah Blah Blah Card Card Card
                            Blah Blah Blah Card Card CardBlah Blah Blah Card Card CardBlah Blah Blah Card Card Card
                            Blah Blah Blah Card Card CardBlah Blah Blah Card Card CardBlah Blah Blah Card Card Card
                        </p>
                        <p>
                            Blah Blah Blah Card Card CardBlah Blah Blah Card Card CardBlah Blah Blah Card Card Card
                            Blah Blah Blah Card Card CardBlah Blah Blah Card Card CardBlah Blah Blah Card Card Card
                            Blah Blah Blah Card Card CardBlah Blah Blah Card Card CardBlah Blah Blah Card Card Card
                        </p>
                    </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onPress={onClose}>
                            Close
                        </Button>
                        <Button color="primary" onPress={onClose}>
                            Action
                        </Button>
                    </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
        </>
        </div>
    )
  }