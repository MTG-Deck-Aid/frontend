"use client"; //Since we are only passing the session as a prop, this page can be done with CSR
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Button } from "@heroui/react";
import Image from "next/image";
import lightUserIcon from '/public/userIconLight.svg'

export default function LoginDropdown(props){
    /**
     * The login dropdown is a dropdown menu that will appear on the top right of the universal header element.
     * It allows for auth0 routing to handle the user session and authentication.
     * props: session={userSession} retrieved from auth0
     * 
     */
    const iconWidth=50;
    const iconHeight=50;
    const session = props.session;

    const dropdownItems = 
    /**dropdownItems contains information about each potential item.
    * key: required for the dropdownMenu component. Unique identifier for the item
    * label: The text to be displayed with the item
    * type: allows specific handling of the item based on its type. (NOTE: this is not a typescript custom type)
    * link: allows for dynamic routing depending on the dropdown item
    */
    session ? [
        {key:"username", label:"Hello, " + session.user.name, type:"label"},
        {key:"view-user-decks", label:"Your Decks", type:"link", link:"/view-user-decks"},
        {key:"logout",label:"Sign Out",type:"link", link:"/auth/logout"}
    ] : [
        {key:"guest",label:"Guest",type:"label"},
        {key:"login",label:"Login",type:"link", link:"/auth/login"},
        {key: "signup",label:"Sign Up",type:"link",link:"/auth/login?screenhint=signup"}
    ]

    return(
        <div className='flex flex-shrink justify-end items-center p-2'>
            <Dropdown className="p-0">
                <DropdownTrigger>
                    <Button radius="full" isIconOnly variant="bordered" 
                className="w-full h-full border-0 p-0 m-0">
                        <Image src={lightUserIcon} width={iconWidth} height={iconHeight} alt='Light User Icon' className="m-0 p-0 w-full h-full"/>
                    </Button>
                </DropdownTrigger>
                {/**Dropdown menu will be populated dynamically depending on the contents of dropdownItems*/}
                <DropdownMenu
                    aria-label="Dynamic Menu" 
                    classNames={{
                        list:"w-200 list-none m-2 p-2"
                    }} 
                    variant="light" 
                    items={dropdownItems} 
                >{(item) => buildDropdownItem(item)}
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

const buildDropdownItem = (item) =>{
    /**
     * buildDropdownItem takes an item from the dropdownItems list and returns a DropDownItem component with the designated functionality.
     */
    return(
        <DropdownItem
            showDivider = {item.type == "label" ? true : false}
            key={item.key}
            className = {"font-sans "+ (item.type === "link" ? "text-blue underline" : "text-white")}
            color="primary"
            href = {item.link} //this will be null if the item does not contain a link
        >{item.label}
        </DropdownItem>
    )
}