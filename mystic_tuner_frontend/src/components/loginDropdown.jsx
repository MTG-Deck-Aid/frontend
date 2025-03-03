"use client";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Button } from "@heroui/react";
import Image from "next/image";

export default function LoginDropdown(props){
    const iconWidth=50;
    const iconHeight=50;
    const session = props.session;

    const dropdownItems = 
    session ? [
        {key:"username", label:"Hello, " + session.user.name, type:"name"},
        {key:"pageLink", label:"Your Decks", type:"link"},
        {key:"logout",label:"Sign Out",type:"link"}
    ] : [
        {key:"guest",label:"Guest",type:"text"},
        {key:"login",label:"Login",type:"link"},
        {key:"signup",label:"Signup",type:"link"}
    ]

    return(
        <Dropdown>
            <DropdownTrigger>
                <Button radius="full" isIconOnly disableRipple variant="bordered" className="w-[50] h-[50] border-0 p-0 m-0">
                    <Image className="m-0 p-0" src='userIconLight.svg' width={iconWidth} height={iconHeight} alt='Light User Icon'/>
                </Button>
            </DropdownTrigger>
            <DropdownMenu items={dropdownItems} onAction ={(key) => handleClick(key)}>
                {(item) => (
                    <DropdownItem
                       key={item.key}
                       className = {item.type === "link" ? "text-blue underline" : "text-black"}
                       color = "danger"
                    >{item.label}
                    </DropdownItem>
                )}
            </DropdownMenu>
        </Dropdown>
    )
}

const handleClick = (key) =>{
    switch(key){
        case "logout":{
            window.location.href="/auth/logout";
            break;
        }
        case "login":{
            window.location.href="/auth/login";
            break;
        }
        case "signup":{
            window.location.href="/auth/signup";
            break;
        }
        case "pageLink":{
            window.location.href="/view-decklist";
            break
        }
    }
}