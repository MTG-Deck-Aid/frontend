"use client";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Button } from "@heroui/react";
import Image from "next/image";

export default function LoginDropdown(props){
    const iconWidth=50;
    const iconHeight=50;

    return(
        <Dropdown>
            <DropdownTrigger>
                <Button radius="full" isIconOnly disableRipple variant="bordered" className="w-[50] h-[50] border-0 p-0 m-0">
                    <Image className="m-0 p-0" src='userIconLight.svg' width={iconWidth} height={iconHeight} alt='Light User Icon'/>
                </Button>
            </DropdownTrigger>
            <DropdownMenu variant="bordered">
                <DropdownItem key="newHere" className="text-dark-grey font-body text-xl">
                    New Here?
                </DropdownItem>
                <DropdownItem>
                    Go to Decks
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}