"use client"
import { usePathname, useSearchParams } from "next/navigation";

export default function PageTitle(){
    /**
     * PageTitle() returns a <p> component with the page's title text.
     */
    const searchParams = useSearchParams();
    const pathName = usePathname();
    //Collections of paths and Titles
    const titles = {
        "/": "Deck Tuning Assistant",
        "/decklist": "My Decks",
        "/import-new-deck": "Import New Deck",
        "/view-user-decks": "My Decks"
    };
    //If the pageTitle is not in our pre-defined list, use the search parameter
    const pageTitle = (titles[pathName] ? titles[pathName] : searchParams.get('title'));

    return(
        <p>{pageTitle}</p>
    )
}