import { Divider } from "@heroui/react";

export default async function Page({params}){
    const {slug} = await params;
    
    return(
        <div className="flex">
            <div className="flex">
                <div className="">
                    
                </div>
                <div className="">

                </div>
            </div>
            <Divider />
            <div className="flex">
                <div className="">

                </div>
                <div className="">

                </div>
            </div>
        </div>
    )
}