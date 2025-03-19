import { Autocomplete, AutocompleteItem, Button } from "@heroui/react";
import { useAsyncList } from "@react-stately/data";
import { getCards } from "@/app/api/cards/autocomplete/route";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@heroui/modal";
import { useState, useEffect } from "react";

export default function NameAutocomplete({ onNameChange }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure(); //disclosure handles the state of the modal
    const [commander, selectCommander] = useState(""); //TODO: put in default commander value
    const [filterText, setFilterText] = useState("");
    const [debouncedFilterText, setDebouncedFilterText] = useState(filterText);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedFilterText(filterText);
        }, 1000);

        return () => {
            clearTimeout(handler);
        };
    }, [filterText]);

    let list = useAsyncList({
        async load({ filterText }) {
            console.log("CALLING GET CARDS");
            let cards = await getCards(filterText);
            return {
                items: cards
            };
        }
    });

    useEffect(() => {
        list.setFilterText(debouncedFilterText);
    }, [debouncedFilterText]);

    const onSuccess = () => {
        console.log(commander);
        onNameChange(commander);
        onOpenChange(); //closes modal
    }
    return (
        <>
            <Button
                className="text-xl"
                onPress={onOpen}
                color={"primary"}
                variant={"faded"}
            >Choose Your Commander
            </Button>

            <Modal isOpen={isOpen} placement="top-center" hideCloseButton={true} onOpenChange={onOpenChange} size="md">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col p-2 m-2">Find a Commander!</ModalHeader>
                            <ModalBody className="flex flex-col m-2 py-0">
                                <Autocomplete
                                    label="Select Commander"
                                    placeholder="Type to search..."
                                    inputProps={{
                                        classNames: { label: "my-0 relative" }
                                    }}
                                    items={list.items}
                                    inputValue={filterText}
                                    isLoading={list.isLoading}
                                    onInputChange={setFilterText}
                                    onSelectionChange={selectCommander} //will call specified method with selected item's key (in this case key=item= commanders name)
                                >
                                    {list.items.map((item) => {
                                        return (
                                            <AutocompleteItem className="" key={item}>
                                                {item}
                                            </AutocompleteItem>
                                        )
                                    })}
                                </Autocomplete>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="success" variant="flat" onPress={onSuccess} > {/** Make sure whatever func this calls also
                         *  calls onOpenChange in order to close the modal */}
                                    Commander Found!
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}