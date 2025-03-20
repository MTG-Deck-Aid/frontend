"use client";
import { usePageTitleContext } from "../context-providers/pageTitleContextProvider";
import { useEffect } from "react";

export default function SetPageTitle({title}){
    /**
     * This component allows the title to be set from server components. They simply need to mount this component and set the title parameter
     */
    const {setPageTitle} = usePageTitleContext();
    useEffect(() => {
        //will be changed when the title prop changes
        setPageTitle(title);
    }, [title, setPageTitle]) 

    return null; //this component does not render
}