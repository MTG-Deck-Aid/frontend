import Image from "next/image";
import TitleText from "./pageTitle.jsx"
import leftLine from "/public/line-one.svg";
import rightLine from "/public/line-two.svg";

export default function TitleBar(){
    /**
     * TitleBar is simply a component which creates two lines with text in between them
     */

    //If the pageTitle is not in our pre-defined list, use the search parameter
    const lineWidth = 520;
    const lineHeight = 70;
    return(
        <div className="flex items-center gap-4 mx-8">
            <div>
                <Image
                    src={leftLine}
                    width={lineWidth}
                    height={lineHeight}
                    alt="Impact Line One"
                    className="w-full h-full"
                />
            </div>
            <TitleText />
            <div>
                <Image
                    src={rightLine}
                    width={lineWidth}
                    height={lineHeight}
                    alt="Impact Line Two"
                    className="w-full h-full"
                />
            </div> 
        </div> 
    );
}