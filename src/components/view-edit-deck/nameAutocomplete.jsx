import { Autocomplete, AutocompleteItem } from "@heroui/react";
import { useAsyncList } from "@react-stately/data";
import { getCards } from "@/app/api/cards/autocomplete/route";

export default function NameAutocomplete(){

    let list = useAsyncList({
        async load({filterText}){
            
            let cards = await getCards(filterText);
            return{
                items: cards
            };
        }
    });
    return(
        <Autocomplete
            label="Select Commander"
            placeholder="Type to search..."
            /**classNames={{
                base: "max-w-xs absolute w-[300px] h-[80px]",
            }}
            inputProps={{
                classNames:{label:"my-0 relative"}
            }}*/
            items={list.items}
            inputValue={list.filterText}
            isLoading = {list.isLoading}
            onInputChange={list.setFilterText}
        >
            {list.items.map((item, index) => {return (
                <AutocompleteItem className="" key={index}>
                    {item}
                </AutocompleteItem>
            )})}

        </Autocomplete>
    )
}