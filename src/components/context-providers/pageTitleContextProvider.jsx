'use client';
import { createContext, useContext, useEffect, useState } from 'react';


const PageTitleContext = createContext();
export default function PageTitleContextProvider({children}){
    const [pageTitle, setPageTitle] = useState('');

    return(
        <PageTitleContext.Provider value={{pageTitle, setPageTitle}}>
            {children}
        </PageTitleContext.Provider>
    )
}

export function usePageTitleContext(){
    const context = useContext(PageTitleContext);
        if (!context) {
            throw new Error(
                'usePageTitleContext must be used within a UsePageTitleContextProvider',
            );
        }
        return context;
}