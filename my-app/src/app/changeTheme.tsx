"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"

const ModeToggle = () => {
  const { theme, setTheme } = useTheme()

  console.log("theme",theme)
  return (
    <>
    <div onClick={() => setTheme("dark")} className="flex">Dark</div>
    <div onClick={() => setTheme("light")} className="flex">Light</div>
    </>
  )
}

export default ModeToggle;
