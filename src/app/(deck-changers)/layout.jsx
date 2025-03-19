import { UserDeckContextProvider } from "@/components/context-providers/userDeckContextProvider";

export default async function DeckChangersLayout({ children }){
    // Get the slug from the URL
    const { initialDeckName } = await params;

    // Get the query from the URL
    const awaitedSearchParams = await searchParams;
    const initialDeckId = await awaitedSearchParams?.deckId || "";

    return(
        <UserDeckContextProvider urlName={initialDeckName} urlId={initialDeckId}>
            {children}
        </UserDeckContextProvider>
    )
}