"use_client";

import { Button } from "@heroui/button";
import { getSuggestions } from "./utils";
import { useLoadingContext } from "../context-providers/viewDeckContextProvider";
import { useCommanderContext, useDeckListContext } from "../context-providers/userDeckContextProvider";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function SubmitSuggestionButton({ numToAdd, numToRemove }) {
	const { isLoading, setIsLoading } = useLoadingContext();
	const { commander } = useCommanderContext();
	const { deckList } = useDeckListContext();
	const searchParams = useSearchParams();

	const handleGetSuggestions = async () => {
		console.log('DeckList Before Suggest: ', deckList);
		const suggestion = await getSuggestions(deckList, commander, numToAdd, numToRemove);
	}

	return (
		<>
			<Button
				color={"primary"}
				isLoading={isLoading ? true : false}
				className=""
				onPress={handleGetSuggestions}
			>Okay!
			</Button>
		</>
	);
}
// as={Link}
// href={{
// 	pathname: `./card-suggestions`,
// 	query: { title: searchParams.get("title") },
// }}