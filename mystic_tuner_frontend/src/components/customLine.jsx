import Image from "next/image";

export default function CustomLine(props){
    return(
        <div className="flex flex-nowrap justify-between items-center">
        <Image
            src={"line-one.svg"}
            width={520}
            height={0}
            alt="Impact Line One"
        />
        <p className="font-body font-semibold text-5xl">
            Deck Upgrade Assistant
        </p>
        <Image
            src={"line-two.svg"}
            width={520}
            height={0}
            alt="Impact Line Two"
        />
        </div>  
    );
}