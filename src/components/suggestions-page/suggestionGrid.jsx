"use client"
import { useSuggestionContext } from "../context-providers/suggestionContextProvider";
import SuggestionModal from "@/components/suggestions-page/suggestionModal";
import { Divider, ScrollShadow } from "@heroui/react";
import { useEffect, useState } from "react";
export default function SuggestionGrid({add}){
    //props: add=(true/false). Denotes whether we use cardsToRemove or cardsToAdd
    const {suggestions} = useSuggestionContext();
    const [displayedCards, setDisplayedCards] = useState();
    //update displayed cards after we get suggestions
    useEffect(() => {
        console.log("New Suggestions:", suggestions);
        if(!suggestions){
            return;
        }
        setDisplayedCards(add?suggestions.cardsToAdd:suggestions.cardsToRemove);
    }, [suggestions])


    const label = (add?"Cards to Add":"Cards to Remove");
    const textContent = "Click to see suggested reasoning";
    return(
        <div className="lg:grid lg:grid-cols-4 w-full">
            {(displayedCards)?
            <>
                <div className="flex flex-col justify-center items-center gap-4 font-body">
                    <div className="flex text-6xl">
                        {label}
                    </div>
                    <div className="flex text-2xl">
                        {textContent}
                    </div>
                </div>
                <Divider className="lg:hidden"/>
                <ScrollShadow orientation="horizontal" className="col-span-3 max-w-full">
                    <div className="flex justify-start gap-10">
                    {displayedCards.map((card, index) => (
                        <SuggestionModal card={card} key={index}/>  //FOR API: card is the main prop to pass card info. We can probably add another prop like geminiResponse
                    ))}
                    </div>
                </ScrollShadow>
            </>:
            <div>

            </div>
            }
            
        </div>
    )
}