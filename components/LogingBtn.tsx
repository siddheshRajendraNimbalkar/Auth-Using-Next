"use client"

import { useRouter } from "next/navigation";

interface LoggingBtn {
    children : React.ReactNode,
    mode? : "modal" | "redirect",
    asChild? : boolean
}

const LogingBtn = ({children , mode="redirect" , asChild} : LoggingBtn) => {
  const router = useRouter();
  function handler(){
    router.push("/auth/login")
  }

  if(mode === "modal"){
    return(
      <span>
        T0D0
      </span>
    )
  }
  return (
    <span className="cursor-pointer" onClick={handler}>
        {children}
    </span>
  )
}

export default LogingBtn