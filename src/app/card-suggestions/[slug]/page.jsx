import SuggestionGrid from "@/components/suggestions-page/suggestionGrid";
import { Divider } from "@heroui/react";

export default async function CardSuggestions({params}){
    const {slug} = await params;
    return(
        <div className="grid auto-rows-min gap-5">
            <SuggestionGrid add={true} />
            <div>
                <Divider />
            </div>
            <SuggestionGrid add={false} />
        </div>
    )
}
