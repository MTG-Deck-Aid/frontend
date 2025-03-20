import { ViewDeckContextProvider } from '@/components/context-providers/viewDeckContextProvider';

export default async function ViewDeckLayout({searchParams, children}){

    // Get the query from the URL
    const awaitedSearchParams = await searchParams;
    const initialDeckMode = await awaitedSearchParams?.mode || "edit";

    return(
        <ViewDeckContextProvider urlMode={initialDeckMode}>
            {children}
        </ViewDeckContextProvider>
    )
}