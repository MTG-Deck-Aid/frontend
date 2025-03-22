"use client"
import { useUserDeckContext } from "../context-providers/userDeckContextProvider";
import { useSuggestionContext } from "../context-providers/suggestionContextProvider";
import { useSearchParams } from "next/navigation";
import { getSuggestions } from "./utills";
import { useEffect } from "react";

export default function SuggestionsFetcher(){
    const searchParams = useSearchParams();
    const {deckList, commander, isReady} = useUserDeckContext();
    const {setSuggestions} = useSuggestionContext();
    useEffect(() => {
        if(!isReady) return;
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
    }, [isReady]) //should only run when isReady is true
    return null;
}