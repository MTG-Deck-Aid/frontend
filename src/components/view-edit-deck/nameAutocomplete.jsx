import { Autocomplete, AutocompleteItem, Button } from "@heroui/react";
import { useAsyncList } from "@react-stately/data";
import { getCards } from "@/app/api/cards/autocomplete/route";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@heroui/modal";
import { useState } from "react";

export default function NameAutocomplete(){
    const{isOpen, onOpen, onOpenChange} = useDisclosure();
    const [commander, selectCommander] = useState("temp"); //TODO: put in default commander value
    let list = useAsyncList({
        async load({filterText}){
            let cards = await getCards(filterText);
            return{
                items: cards
            };
        }
    });
    return(
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
                            classNames:{label:"my-0 relative"}
                        }}
                        items={list.items}
                        inputValue={list.filterText}
                        isLoading = {list.isLoading}
                        onInputChange={list.setFilterText}
                        onSelectionChange={selectCommander}
                        >
                        {list.items.map((item, index) => {return (
                            <AutocompleteItem className="" key={index}>
                                {item}
                            </AutocompleteItem>
                        )})}
                        </Autocomplete>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" variant="flat" onPress={onClose} > {/**This is where the commander api will be sent*/}
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