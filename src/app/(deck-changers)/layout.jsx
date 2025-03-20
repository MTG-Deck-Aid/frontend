import { UserDeckContextProvider } from "@/components/context-providers/userDeckContextProvider";

export default async function DeckChangersLayout({ params, searchParams, children }){
    // Get the slug from the URL
    const { initialDeckName } = await params;

    // Get the query from the URL
    const awaitedSearchParams = await searchParams;
    const initialDeckId = await awaitedSearchParams?.deckId || "";
    console.log(initialDeckName)

    return(
        <UserDeckContextProvider urlName={params?.deckName} urlId={searchParams?.deckId}>
            {children}
        </UserDeckContextProvider>
    )
}