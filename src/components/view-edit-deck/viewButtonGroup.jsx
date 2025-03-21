"use client";
import { use, useState, useEffect } from "react";
import {
  useEditContext,
  useLoadingContext,
} from "../context-providers/viewDeckContextProvider";
import SaveButton from "./saveButton";
import SubmitSuggestionButton from "./submitSuggestionButton";
import { Select, SelectItem } from "@heroui/select";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import { Button } from "@heroui/button";
import Link from "next/link";
import { useDeckIDContext } from "../context-providers/userDeckContextProvider";
import DeleteButton from "./deleteButton";
import { useDeckIdContext } from "../context-providers/userDeckContextProvider";

export default function ViewButtonGroup(props) {
  // local use state
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  //page context
  const { isEditMode, toggleIsEditMode } = useEditContext();
  const { isLoading } = useLoadingContext();

  //modal context
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // deck context
  const { deckId } = useDeckIdContext();

  const [numCardsToAdd, setNumCardsToAdd] = useState(3);
  const [numCardsToRemove, setNumCardsToRemove] = useState(3);

  /**
   * If the user is authenticated and they are viewing an existing deck, they can delete it.
   * If the user is authenticated and they are creating a new deck, they can verify and save it.
   * If the user is a guest, they can ONLY verify it.
   */
  const handleButtonRenders = async () => {
    fetch("/api/auth/authenticated/")
      .then(async (res) => await res.json())
      .then((data) => {
        if (data.data.isAuthenticated && parseInt(deckId) !== -1) {
          setShowDeleteButton(true);
        } else {
          setShowDeleteButton(false);
        }
      })
      .catch((error) => {
        console.error("Error getting user decks:", error);
      });
  };

  /** The deckId may be updated from - 1 when deckId is returned on creation */
  useEffect(() => {
    handleButtonRenders();
  }, [deckId]);

  return isEditMode ? (
    <div className="flex">
      <SaveButton />
      {showDeleteButton ? <DeleteButton /> : null}
    </div>
  ) : (
    <div className="grid grid-rows-2 gap-2">
      <>
        {createPageButton("Get Suggestions", onOpen, isLoading)}
        <Modal
          isOpen={isOpen}
          placement="top-center"
          hideCloseButton={true}
          onOpenChange={onOpenChange}
          size="sm"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col p-2 m-2">
                  Ready to Submit?
                </ModalHeader>
                <ModalBody className="flex flex-col m-2 py-0">
                  {createSelect(
                    "Number of cards to add",
                    numCardsToAdd,
                    setNumCardsToAdd
                  )}
                  {createSelect(
                    "Number of cards to remove",
                    numCardsToRemove,
                    setNumCardsToRemove
                  )}
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="ghost" onPress={onClose}>
                    Not yet!
                  </Button>
                  <Button
                    color="primary"
                    isLoading={isLoading ? true : false}
                    variant="ghost"
                    className="no-underline border-solid"
                    as={Link}
                    href={{
                      pathname: `./card-suggestions`,
                      query: {
                        numToAdd: `${numCardsToAdd}`,
                        numToRemove: `${numCardsToRemove}`,
                        deckId: `${deckId}`,
                      },
                    }}
                  >
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
  );
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
    >
      {label}
    </Button>
  );
};

const createSelect = (label, value, setValue, val) => {
  const maxCards = 5;
  const numberArray = arrayFromRange(1, maxCards, 1);
  const handleSelectionChange = (event) => {
    setValue(+event.target.value + 1);
  };

  return (
    <div>
      <Select
        label={label}
        value={value}
        onChange={handleSelectionChange}
        classNames={{
          innerWrapper: "group-data-[has-label=true]:pt-0",
          label: "text-xs my-0 relative",
          popoverContent: "p-4 py-1",
        }}
        listboxProps={{
          classNames: { base: "w-full", list: "ps-0 w-max-fit" },
        }}
        labelPlacement={"inside"}
      >
        {numberArray.map((item, index) => {
          return (
            <SelectItem key={index} textValue={item}>
              {item}
            </SelectItem> // add onSelect={function} to cause something to happen on select.
            //the event handler will use the key as an argument. change accordingly (must be unique to the list)
          );
        })}
      </Select>
    </div>
  );
};

const arrayFromRange = (start, stop, step) =>
  /**Creates an array from start to stop with step */
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );
