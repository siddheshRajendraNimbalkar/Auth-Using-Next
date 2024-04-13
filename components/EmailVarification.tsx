"use client"
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

export const EmailVarification = ({ data, dataType }: any) => {
    {

        if (dataType == "success") {
            return (
                <div className="w-full bg-green-200 text-green-900 p-2 gap-2 flex rounded">
                    <div className=" flex justify-center items-center">
                        <TiTick />
                    </div>
                    {data}
                </div>
            )
        }
        else if (dataType == "error") {
            return (
                <div className="w-full bg-red-200 text-red-900 p-2 gap-2 flex rounded">
                    <div className=" flex justify-center items-center">
                        <ImCross />
                    </div>
                    {data}
                </div>
            )
        }
    }
}