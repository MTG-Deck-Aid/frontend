"use client";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Button } from "@heroui/react";
import Image from "next/image";

export default function LoginDropdown(props){
    const iconWidth=50;
    const iconHeight=50;
    const session = props.session;

    const dropdownItems = 
    session ? [
        {key:"username", label:"Hello, " + session.user.name, type:"label"},
        {key:"view-user-decks", label:"Your Decks", type:"link"},
        {key:"logout",label:"Sign Out",type:"link"}
    ] : [
        {key:"guest",label:"Guest",type:"label"},
        {key:"login",label:"Login / Sign Up",type:"link"},
    ]

    return(
        <div className='flex justify-end items-center m-5'>
            <Dropdown className="p-0">
                <DropdownTrigger>
                    <Button radius="full" isIconOnly disableRipple variant="bordered" className="w-[50] h-[50] border-0 p-0 m-0">
                        <Image className="m-0 p-0" src='userIconLight.svg' width={iconWidth} height={iconHeight} alt='Light User Icon'/>
                    </Button>
                </DropdownTrigger>
                <DropdownMenu 
                    aria-label="Dynamic Menu" 
                    classNames={{
                        list:"w-200 list-none m-2 p-2"
                    }} 
                    variant="faded" 
                    items={dropdownItems} 
                >{(item) => buildDropdownItem(item)}
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

const buildDropdownItem = (item) =>{
     const pageLinks = {"logout" : "/auth/logout", "login" : "/auth/login", "view-user-decks": "/view-user-decks"}
    return(
        <DropdownItem
            showDivider = {item.type == "label" ? true : false}
            key={item.key}
            className = {"font-sans "+ (item.type === "link" ? "text-blue underline" : "text-black")}
            color="primary"
            href = {item.type == "label" ? null : pageLinks[item.key]}
        >{item.label}
        </DropdownItem>
    )
}