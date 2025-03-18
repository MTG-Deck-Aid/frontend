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
    };
    //If the pageTitle is not in our pre-defined list, use the search parameter
    const pageTitle = (titles[pathName] ? titles[pathName] : searchParams.get('title'));

    return(
        <p className="m-2 justify-center font-body text-md md:text-2xl lg:text-4xl text-nowrap">{pageTitle}</p>
    )
}