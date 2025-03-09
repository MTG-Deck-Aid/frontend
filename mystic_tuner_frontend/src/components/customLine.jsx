"use client";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";

export default function CustomLine(){
    /**
     * Custom line is simply a component which creates two lines with text in between them
     */
    const searchParams = useSearchParams();
    const pathName = usePathname();

    const titles = {
        "/": "Deck Tuning Assistant",
        "/decklist": "My Decks",
        "/import-new-deck": "Import New Deck",
        "/view-decklist/[slug]": "View Deck",
        "/view-user-decks": "My Decks"
    };
    
    const pageTitle = (titles[pathName] ? titles[pathName] : searchParams.get('title'));

    const lineWidth = 520;
    const lineHeight = 70;
    return(
        <div className="flex flex-nowrap justify-between items-center w-full mx-8">
        <Image
            src={"line-one.svg"}
            width={lineWidth}
            height={lineHeight}
            alt="Impact Line One"
        />
        <p className="font-body font-semibold text-5xl">
            {pageTitle}
        </p>
        <Image
            src={"line-two.svg"}
            width={lineWidth}
            height={lineHeight}
            alt="Impact Line Two"
        />
        </div>  
    );
}