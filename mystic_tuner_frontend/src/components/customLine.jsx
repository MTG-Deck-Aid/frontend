import Image from "next/image";

export default function CustomLine(props){
    
    const lineWidth = 520;
    const lineHeight = 70;
    return(
        <div className="flex flex-nowrap justify-between items-center">
        <Image
            src={"line-one.svg"}
            width={lineWidth}
            height={lineHeight}
            alt="Impact Line One"
        />
        <p className="font-body font-semibold text-5xl">
            Deck Upgrade Assistant
        </p>
        <Image
            src={"line-two.svg"}
            width={lineWidth}
            height={lineHeight}
            alt="Impact Line Two"
        />
        </div>  
    );
}