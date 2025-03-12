'use client';

import { createContext, useContext, useState } from 'react';

const ViewDeckContext = createContext(false);

export function ViewDeckContextProvider({ children }){
    /**
     * This context provider will allow components wrapped by it to access the page's context.
     * The context will be two states: either edit or view
     */
    const [isEditMode, setIsEditMode] = useState(true);

    function toggleIsEditMode(){
        setIsEditMode((isEditMode ? false:true));
    }
    
    return(
        <ViewDeckContext.Provider value={{ isEditMode, toggleIsEditMode }}>
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