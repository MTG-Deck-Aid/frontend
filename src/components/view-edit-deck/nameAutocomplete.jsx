import { Autocomplete, AutocompleteItem, Button } from "@heroui/react";
import { useAsyncList } from "@react-stately/data";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@heroui/modal";
import { useState, useEffect } from "react";
import { useLoadingContext, useViewDeckContext } from "../context-providers/viewDeckContextProvider";
import { useCommanderContext } from "../context-providers/userDeckContextProvider";

export default function NameAutocomplete() {
    //modal context
    const { isOpen, onOpen, onOpenChange } = useDisclosure(); //disclosure handles the state of the modal
    //loading context
    const { isLoading, setIsLoading } = useLoadingContext();
    //commander context
    const {commander, setCommander} = useCommanderContext();
    //componentState
    const [selectedCommander, setSelectedCommander] = useState(commander); //TODO: put in default commander value
    const [filterText, setFilterText] = useState("");
    const [debouncedFilterText, setDebouncedFilterText] = useState(filterText);
    
    //component constants
    const debounceTime = 500;

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedFilterText(filterText);
        }, debounceTime);

        return () => {
            clearTimeout(handler);
        };
    }, [filterText]);

    let list = useAsyncList({
        async load({ filterText }) {
            try {
                const response = await fetch(`/api/cards/autocomplete?q=${filterText}&commander=true`);
                const data = await response.json();
                // console.log("Card response:", data.cards);
                // console.log("Response Status:", response.status);
                // console.log("Cards Status:", data.status);
                if (data.status === 200) {
                    return {
                        items: data.cards
                    };
                } else {
                    return {
                        items: []
                    };
                }
            } catch (error) {
                console.error("Error getting autocomplete:", error);
            }
        }
    });

    useEffect(() => {
        list.setFilterText(debouncedFilterText);
    }, [debouncedFilterText]);

    const onSuccess = () => {
        setCommander(selectedCommander);
        onOpenChange();
    }
    return (
        <>
            <Button
                className="text-xl"
                onPress={onOpen}
                color={"primary"}
                variant={"faded"}
                isLoading={isLoading}
            >Choose Your Commander
            </Button>
            <Modal 
                backdrop="blur"
                isOpen={isOpen} 
                placement="top-center" 
                hideCloseButton={true} 
                onOpenChange={onOpenChange} 
                size="md" 
                shouldBlockScroll={true}
                >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col p-2 m-2">Find a Commander!</ModalHeader>
                            <ModalBody className="flex flex-col m-2 py-0">
                                <Autocomplete
                                    label="Select Commander"
                                    placeholder="Type to search..."
                                    isClearable={false}
                                    inputProps={{
                                        classNames: { label: "my-0 relative", }
                                    }}
                                    items={list.items}
                                    inputValue={filterText}
                                    isLoading={list.isLoading}
                                    onInputChange={setFilterText}
                                    onSelectionChange={setSelectedCommander}
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
                                <Button color="success" variant="flat" onPress={onSuccess} >
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