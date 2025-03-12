'use client';

import { createContext, useContext, useState } from 'react';

const ViewDeckContext = createContext("view");

export function ViewDeckContextProvider({ children }){
    /**
     * This context provider will allow components wrapped by it to access the page's context.
     * The context will be two states: either edit or view
     */
    const [isEditMode, setIsEditMode] = useState("view");

    function toggleEditMode(){
        setIsEditMode((mode === "view" ? "edit":"view"));
    }
    
    return(
        <ViewDeckContext.Provider value={{ isEditMode, setState }}>
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
      throw new Error('useMyPageContext must be used within a MyPageProvider');
    }
    return context;
}