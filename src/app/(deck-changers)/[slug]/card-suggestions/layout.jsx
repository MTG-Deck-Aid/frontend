import SuggestionContextProvider from "@/components/context-providers/suggestionContextProvider"

export default function SuggestionPageLayout({children}){
    return(
        <SuggestionContextProvider>
            
            {children}
        </SuggestionContextProvider>
    )
}