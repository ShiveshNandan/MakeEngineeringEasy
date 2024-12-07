"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import Image from "next/image"


const ModeToggle = () => {
  const { theme, setTheme } = useTheme()
  const toggle = () => {
    {theme ==='dark' ? setTheme('light') : setTheme('dark')}
    // .log(theme)
  }
  
  return (
    <>
    <div onClick={() => toggle()} className="flex cursor-pointer z-[10]">

      {theme === 'light' ? <Image src={'/Light mode.png'} height={100} width={1000} alt="" className="h-9 w-9"/> : <Image src={'/Dark mode.png'} height={100} width={1000} alt="" className="h-9 w-9"/>}  </div>
      
    </>
  )
}

export default ModeToggle;
