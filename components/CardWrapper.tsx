"use client";

import { BackBtn } from "./BackBtn";
import { Social } from "./Social";
import { Card , CardFooter, CardContent, CardHeader } from "./ui/card";

interface CardWrapperProp {
    children : React.ReactNode,
    header: string,
    backBtn: string,
    backBtnLink: string,
    showSocial?: boolean
}

export const CardWrapper = ({children,header,backBtn,backBtnLink,showSocial}:CardWrapperProp) => {

    return (
        <>
            <Card className="px-8">
                <CardHeader>
                    <div className="text-4xl font-extrabold">
                       🔐 Auth
                    </div>
                    <h1 className="flex justify-center font-semibold">{header}</h1>
                </CardHeader>
                <CardContent>
                    {children}
                </CardContent>
                {
                    showSocial && (
                        <CardFooter>
                            <Social />
                        </CardFooter>
                    )
                }
                <CardFooter>
                    <BackBtn
                     
                        label={backBtn}
                        href={backBtnLink}
                    />
                </CardFooter>
            </Card>
        </>
    )
}