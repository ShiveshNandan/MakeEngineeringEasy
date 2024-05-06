"use client"
import {useRouter } from 'next/navigation'
import React, { useState } from 'react'
import "./navStyle.css"

const Navbar = (params:any) => {
  const [selected, setselected] = useState(params.params)
  const router = useRouter()
  console.log(selected)
  return (
    <>
    <div className="flex fixed mt-8 font-semibold ">
    <div className="flex w-full justify-evenly fixed max-[800px]:relative items-center ">
        <h1 onClick={() => {router.push("/") , setselected("Home")}} className={`${selected === "Home" ? "text-blue-600" : ""} capitalize mx-5 hover:cursor-pointer transition-all duration-300`}>home</h1>
        <h1 onClick={() => {router.push("/Course") , setselected("Courses")}} className={`${selected === "Courses" ? "text-blue-600" : ""} capitalize mx-5 hover:cursor-pointer transition-all duration-300`}>courses</h1>

        <h1 onClick={() => {router.push("/") , setselected("Home")}} style={{fontFamily : 'YourFontMedium'}} className={`mx-5 hover:cursor-pointer transition-all duration-300 capitalize font-bold text-[1.4rem] tracking-[0.5px]`} >make engineering <span className='block-inline text-yellow-500 '> easy</span></h1>

        <h1 onClick={() => {router.push("/About"), setselected("About")}} className={`${selected === "About" ? "text-blue-600" : ""} capitalize mx-5 hover:cursor-pointer transition-all duration-300`}>About</h1>
        <h1 onClick={() => {router.push("/") , setselected("About")}} className={`${selected === "About" ? "text-blue-600" : ""} capitalize mx-5 hover:cursor-pointer transition-all duration-300`}>Contact</h1>
      </div>
      
    </div>
    </>
  )
}

export default Navbar
