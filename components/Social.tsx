"use client"

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "./ui/button";

export const Social = () => {
    return (
        <>
            <div className="flex items-center w-full gap-x-2">
                <Button variant="outline" size="lg" className="w-full"
                    onClick={()=>{}}
                > 
                <FcGoogle />
                </Button>
                <Button variant="outline" size="lg" className="w-full"
                    onClick={()=>{}}
                > 
                <FaGithub />
                </Button>
            </div>
        </>
    )
}