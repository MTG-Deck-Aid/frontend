"use client"
import { useDeckListContext, useCommanderContext } from "../context-providers/userDeckContextProvider";
import { useSuggestionContext } from "../context-providers/suggestionContextProvider";
import { useSearchParams } from "next/navigation";
import { getSuggestions } from "./utills";
import { useEffect } from "react";
export default function SuggestionsFetcher(){
    const searchParams = useSearchParams();
    const {deckList} = useDeckListContext();
    const {commander} = useCommanderContext();
    const {setSuggestion} = useSuggestionContext();
    useEffect(() => {
        const suggestions = getSuggestions(deckList, commander, searchParams.get("numToAdd"), searchParams.get("numToRemove"));
        console.log(suggestions)
    }, [])
    
    return null;
}