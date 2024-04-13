"use client"

import Link from "next/link"
import { Button } from "./ui/button"

interface BackButton {
    label : string,
    href : string
}

export const BackBtn = ({label , href}:BackButton) => {
  return (
    <Button
        variant="link"
        className="font-normal w-full"
        size="sm" 
    >
        <Link href={href}>
            {label}
        </Link>
    </Button>
  )
}

