import Image from "next/image";
import TitleText from "./pageTitle.jsx"
import leftLine from "/public/line-one.svg";
import rightLine from "/public/line-two.svg";

export default function TitleBar(){
    /**
     * Custom line is simply a component which creates two lines with text in between them
     */
    
    
    
    //If the pageTitle is not in our pre-defined list, use the search parameter
    const lineWidth = 520;
    const lineHeight = 70;
    return(
        <div className="flex flex-nowrap justify-between items-center w-full mx-8">
        <Image
            src={leftLine}
            width={lineWidth}
            height={lineHeight}
            alt="Impact Line One"
        />
        <TitleText />
        <Image
            src={rightLine}
            width={lineWidth}
            height={lineHeight}
            alt="Impact Line Two"
        />
        </div>  
    );
}