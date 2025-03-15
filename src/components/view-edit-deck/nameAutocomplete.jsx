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
            placeholder="Search a commander"
            classNames={{
                base: "max-w-xs absolute w-[300px] h-[80px]",
            }}
            inputProps={{
                classNames:{label:"my-0 relative"}
            }}
            
            isLoading = {list.isLoading}
            onInputChange={debounceInput(list.setFilterText, 100)} //ineherently sets filter text to current input
        >
            {list.items.map((item, index) => {return (
                <AutocompleteItem className="" key={index}>
                    {item}
                </AutocompleteItem>
            )})}

        </Autocomplete>
    )
}

const debounceInput = (func, delay) => {
    /**
     * This function will delay the API request until after the user stops typing (hopefully)
     */
    let timeoutId;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function() {
            func.apply(context, args); //func.apply calls the inputted function with the current context and arguments
        }, delay)
    }
}