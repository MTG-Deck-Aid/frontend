import mysticLogo from "/public/MysticTuner-Logo.svg"
import Image from "next/image"
import { CircularProgress } from "@heroui/progress";

export default function RedirectPage(){
    const logoWidth = 350;
    const logoHeight = logoWidth;

    return(
        <div className="flex flex-col items-center w-full">
            <div>
                <div className="absolute w-[350px] h-[350px] border-2 border-dashed border-white rounded-full animate-pulse"></div>
                <Image
                    width={logoWidth}
                    height={logoHeight}
                    src={mysticLogo}
                    alt="Page Logo"
                />
            </div>
            <div className="text-center text-medium lg:text-xl">
                <p>We're getting overloaded. Please wait to make any more requests!</p>
            </div>
        </div>
    )

}