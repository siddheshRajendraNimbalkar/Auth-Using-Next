import React from "react";

const login = ({children}:{children : React.ReactNode}) => {
    return (  
        <div className="h-screen w-full bg-black text-white flex justify-center items-center">
            {children}
        </div>
    );
}
 
export default login;