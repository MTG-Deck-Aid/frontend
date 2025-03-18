import Image from "next/image";
import { Button, Link } from "@heroui/react";
import smallLogo from '/public/logo-small-icon.svg'; //This makes the image STATICALLY imported


export default function HomeButton(){
    /**
     * HomeButton is a static icon that will redirect the user to the homePage when it is clicked
     */
    const iconWidth = 100;
    const iconHeight = iconWidth;

    return(
        <div className="flex justify-start items-center">
            <Button radius="full" isIconOnly variant="bordered" 
                className="w-full h-full border-0 p-0 m-0" as={Link} href="/">
                <Image 
                    src={smallLogo} 
                    width={iconWidth} 
                    height={iconHeight} 
                    alt='Mystic Tuner Logo'
                    className="w-full h-full"
                    />
                    
            </Button>
        </div>
    );
}