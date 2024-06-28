"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"

// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"

const ModeToggle = () => {
  const { theme, setTheme } = useTheme()
  const toggle = () => {
    {theme ==='dark' ? setTheme('light') : setTheme('dark')}
    console.log(theme)
  }

  console.log("theme",theme)
  return (
    <>
    <div onClick={() => toggle()} className="flex cursor-pointer z-[10]">

      {theme === 'light' ? <Image src={'/Light mode.png'} height={100} width={1000} alt="" className="h-11 w-11"/> : <Image src={'/Dark mode.png'} height={100} width={1000} alt="" className="h-11 w-11"/>}  </div>
      
    </>
  )
}

export default ModeToggle;
