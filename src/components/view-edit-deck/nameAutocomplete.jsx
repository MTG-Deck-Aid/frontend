import { Autocomplete, AutocompleteItem, Button } from "@heroui/react";
import { useAsyncList } from "@react-stately/data";
import { getCards } from "@/app/api/cards/autocomplete/route";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@heroui/modal";
import { useState, useEffect } from "react";
import { useLoadingContext, useViewDeckContext } from "../context-providers/viewDeckContextProvider";

export default function NameAutocomplete({ onNameChange }) {
    //modal context
    const { isOpen, onOpen, onOpenChange } = useDisclosure(); //disclosure handles the state of the modal
    //componentState
    const [commander, selectCommander] = useState(""); //TODO: put in default commander value
    const [filterText, setFilterText] = useState("");
    const [debouncedFilterText, setDebouncedFilterText] = useState(filterText);
    //loading context
    const { isLoading, setIsLoading } = useLoadingContext();
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
        setIsLoading(true);
        console.log(commander);
        onNameChange(commander);
        onOpenChange(); //closes modal
        setIsLoading(false);
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