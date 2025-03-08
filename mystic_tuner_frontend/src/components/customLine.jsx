"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function CustomLine(props){
    const titles = {
        "/": "Home",
        "/decklist": "My Decks",
        "/import-new-deck": "Import New Deck",
        "/view-decklist": "View Deck",
        "/view-user-decks": "My Decks"
    };
    const pathName = usePathname();
    const pageTitle = titles[pathName];

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