'use client';

import { createContext, useContext, useState } from 'react';

const ViewDeckContext = createContext(false);

export function ViewDeckContextProvider({ children }) {
    /**
     * This context provider will allow components wrapped by it to access the page's context.
     * The context will be two states: either edit or view
     * This context can be updated via the function toggleIsEditMode
     * Could be expanded to include additional deck information. This additional functionality could also be split into seperate context provider
     * NOTE that depending on the scope of the context. It may make sense to put it in a layout.jsx file.
     * i.e., if making context for card-suggestions/[slug] and view-import-deck/[slug], context could be placed in a shared layout.jsx file
     * see: https://nextjs.org/docs/app/building-your-application/routing/route-groups#opting-specific-segments-into-a-layout for more info
     */
    const [isEditMode, setIsEditMode] = useState(true);
    const [deckInput, setDeckInput] = useState('');
    const [deckList, setDeckList] = useState({});

    function toggleIsEditMode() {
        setIsEditMode((isEditMode ? false : true));
    }

    return (
        <ViewDeckContext.Provider value={{ isEditMode, toggleIsEditMode, deckInput, setDeckInput, deckList, setDeckList }}>
            {children}
        </ViewDeckContext.Provider>
    );
}



export function useViewDeckContext() {
    /**
     * useViewDeckContext takes in no parameters and returns the context of the page.
     * This will be a string 
     */
    const context = useContext(ViewDeckContext);
    if (!context) {
        throw new Error('useViewDeckContext must be used within a ViewDeckContextProvider');
    }
    return context;
}