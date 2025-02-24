import { getAccessToken } from "@auth0/nextjs-auth0"
import Link from "next/link"

export default async function Decklist(){
    async function fetchToken(){
        'use server' //way to inline a server function, preferably would use actions.js

        try{
            const token = await getAccessToken()
            //send token to backend
        } catch(err){
            //Error will be an instance of AccessTokenErr if access token could not be obtained
        }
    }


    return (
        <div>
            <p>Nothing to see here!</p>
            <Link href="/">Home</Link>
        </div>
    )
}