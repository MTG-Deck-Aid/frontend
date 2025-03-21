import SuggestionGrid from "@/components/suggestions-page/suggestionGrid";
import { Divider } from "@heroui/react";
import SetPageTitle from "@/components/header-components/setPageTitle";
import SuggestionsFetcher from "@/components/suggestions-page/suggestionsFetcher";

export default async function CardSuggestions({searchParams}){
    const pageTitle = "The Tuner"
    
    return(
        <div className="w-full h-min-full flex flex-col lg:grid lg:grid-rows-[1fr_minmax(0,40px)_1fr]">   
            <SuggestionsFetcher /> 
                <SetPageTitle title={pageTitle}/>
                <SuggestionGrid add={true}/> {/**cards to be added */}
                <div>
                    <Divider/>
                </div>
                <SuggestionGrid add={false}/>{/** card to be removed */}
        </div>
    )
}
