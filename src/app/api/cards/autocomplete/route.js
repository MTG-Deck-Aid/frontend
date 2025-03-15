"use server";
import { NextResponse } from "next/server";


export async function GET(request) {
    try{
        const response = await getCards(request.params.query);
        return NextResponse.json(response);
    }catch(error){
        console.error("Error getting autcomplete:", error);
        return NextResponse.json({
            status: 500,
            message: "Error getting Cards",
        });
    }
}

export async function getCards(cardQuery, signal){
    try{
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);

        const response = await fetch(`${process.env.BACKEND_BASE_URL}/api/decks/autocomplete?q=${cardQuery}`, {signal});
        clearTimeout(timeoutId);

        const data = await response.json();
        console.log("Card response:", data);
        return data;
    } catch(error){
        console.error("Error getting cards", error);
        return {status: 500, message: "error getting cards"};
    }
}