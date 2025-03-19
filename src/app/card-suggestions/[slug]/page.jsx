import SuggestionGrid from "@/components/suggestions-page/suggestionGrid";
import { Divider } from "@heroui/react";

export default async function CardSuggestions({params}){
    const {slug} = await params;
    return(
        <div className="flex flex-col lg:grid lg:auto-rows-min gap-5">
            <SuggestionGrid add={true} /> {/**cards to be added */}
            <div>
                <Divider />
            </div>
            <SuggestionGrid add={false} />{/** card to be removed */}
        </div>
    )
}
