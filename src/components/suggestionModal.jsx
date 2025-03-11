"use client";

import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
  } from "@heroui/react";
import Image from "next/image";


  export default function SuggestionModal(props){
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const cardHeight = 375;
    const cardWidth = 275;
    const card = props.card
    return(
        <>
            <Button onPress={onOpen} className="min-w-fit min-h-fit">
                <Image 
                    alt={card.name}
                    height={cardHeight}
                    width={cardWidth}
                    src={card.image_uris.normal}
                />
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => {
                        <>
                            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                            <ModalBody>
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
                            </ModalBody>
                            <ModalFooter>
                            <Button onPress={onClose}>
                                Close
                            </Button>
                            <Button onPress={onClose}>
                                Action
                            </Button>
                            </ModalFooter>
                        </>
                    }}
                </ModalContent>
            </Modal>
        </>
    )
  }