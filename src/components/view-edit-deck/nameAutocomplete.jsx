import { Autocomplete, AutocompleteItem, Button } from "@heroui/react";
import { useAsyncList } from "@react-stately/data";
import { getCards } from "@/app/api/cards/autocomplete/route";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@heroui/modal";
import { useState } from "react";

export default function NameAutocomplete({ onNameChange }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure(); //disclosure handles the state of the modal
    const [commander, selectCommander] = useState("temp"); //TODO: put in default commander value
    let list = useAsyncList({
        //useAsyncList allows for a dynamic list to be updated whenever we change the filtertext
        //ref: https://react-spectrum.adobe.com/react-stately/useAsyncList.html
        async load({ filterText }) {
            {/**This func is called whenever filterText is changed */ }
            let cards = await getCards(filterText);
            return {
                items: cards
            };
        }
    });
    const onSuccess = () => {
        console.log(commander);
        onNameChange(commander);
        onOpenChange(); //closes modal
    }
    return (
        <>
            <Button
                className="max-w-xs absolute w-[300px] h-[80px]"
                onPress={onOpen}
                color={"primary"}
                variant={"faded"}
            >Autocomplete
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
                                    inputValue={list.filterText}
                                    isLoading={list.isLoading}
                                    onInputChange={list.setFilterText}
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