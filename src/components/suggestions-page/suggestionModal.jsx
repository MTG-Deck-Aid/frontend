"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import { Button } from "@heroui/button";
import Image from "next/image";

export default function SuggestionModal({ card, add }) {
  /**
   * SuggestionModal is a window that pops up with generated suggestions for certain cards.
   * props: card={at least card.name, card.image_uris.normal} <- card data,
   * textContent={string} <- gemini response to be displayed
   */
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const cardHeight = 375;
  const cardWidth = Math.round(0.75 * cardHeight);
  return (
    <div>
      <>
        <Button
          onPress={onOpen}
          className="min-w-fit min-h-fit"
          variant="ghost"
          color={add?"success":"danger"} 
        >
          <Image
            alt={card.name}
            height={cardHeight}
            width={cardWidth}
            src={card.imageURL.normal}
            className="rounded-2xl"
          />
        </Button>
        <Modal
          isOpen={isOpen}
          placement="top-center"
          size="lg"
          backdrop="opaque"
          onOpenChange={onOpenChange}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Mystic Suggestions
                </ModalHeader>
                <ModalBody className="flex flex-col m-2 py-0">
                  <div>
                    <p>{card.reason}</p>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" onPress={onClose}>
                    Close
                  </Button>
                  {/*
                        <Button color="primary" onPress={onClose}>
                            {(add?"Add To Deck":"Remove From Deck")} {/**If we want to do adding/removing 
                        </Button>
                        */}
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    </div>
  );
}
