"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
const ViewDeckContext = createContext();

export default function ViewDeckContextProvider({ children }) {
  /**
   * This context provider will allow components wrapped by it to access the page's context.
   * The context will be two states: either edit or view
   * This context can be updated via the function toggleIsEditMode
   * Could be expanded to include additional deck information. This additional functionality could also be split into seperate context provider
   * NOTE that depending on the scope of the context. It may make sense to put it in a layout.jsx file.
   * i.e., if making context for card-suggestions/[slug] and view-import-deck/[slug], context could be placed in a shared layout.jsx file
   * see: https://nextjs.org/docs/app/building-your-application/routing/route-groups#opting-specific-segments-into-a-layout for more info
   */
  const searchParams = useSearchParams();
  const initialMode = searchParams.get("mode") || "edit";

  const [isEditMode, setIsEditMode] = useState(
    initialMode === "edit" ? true : false
  );
  const [isLoading, setIsLoading] = useState(false);
  const [displayName, setDisplayName] = useState(
    initialMode === "edit" ? "New Deck" : "NeedExistingDeckNameVar"
  );

  function toggleIsEditMode() {
    setIsEditMode(isEditMode ? false : true);
  }

  return (
    <ViewDeckContext.Provider
      value={{
        isEditMode,
        toggleIsEditMode,
        isLoading,
        setIsLoading,
        displayName,
        setDisplayName,
      }}
    >
      {children}
    </ViewDeckContext.Provider>
  );
}

export function useViewDeckContext() {
  /**
   * useViewDeckContext takes in no parameters and returns the entire context from the provider
   */
  const context = useContext(ViewDeckContext);
  if (!context) {
    throw new Error(
      "useViewDeckContext must be used within a ViewDeckContextProvider"
    );
  }
  return context;
}

export function useLoadingContext() {
  /**
   * useLoadingContext only returns the section of context relevant to the pageLoadingState
   * returns: isLoading, setIsLoading
   */
  const context = useViewDeckContext();
  const { isLoading, setIsLoading } = context;
  return { isLoading, setIsLoading };
}

export function useEditContext() {
  /**
   * useEditContext only returns the section of context relevant to whether the page is in editMode or not
   * returns: isEditMode, setIsEditMode
   */
  const context = useViewDeckContext();
  const { isEditMode, toggleIsEditMode } = context;
  return { isEditMode, toggleIsEditMode };
}

export function useDisplayNameContext() {
  const { displayName, setDisplayName } = useViewDeckContext();
  return { displayName, setDisplayName };
}
