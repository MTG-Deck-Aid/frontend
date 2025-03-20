import UserDeckContextProvider from "@/components/context-providers/userDeckContextProvider"

export default function DeckChangersLayout({ children }){

    return(
        <UserDeckContextProvider>{children}</UserDeckContextProvider>
    )
}