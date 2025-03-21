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
    const {setSuggestions} = useSuggestionContext();
    useEffect(() => {
        const fetchSuggestion = async () => {
            console.log("Getting suggestions")
            const numToAdd = +searchParams.get("numToAdd");
            const numToRemove = +searchParams.get("numToRemove")
            const suggestions = await getSuggestions(deckList, commander, numToAdd, numToRemove)
            console.log("Get Suggestion response")
            setSuggestions(suggestions);
            console.log("Set suggestions:", suggestions)
        }

        fetchSuggestion();
    }, []) 
    return null;
}