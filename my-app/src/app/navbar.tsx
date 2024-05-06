"use client"
import {useRouter } from 'next/navigation'
import React, { useState } from 'react'
import "./navStyle.css"

const Navbar = (params:any) => {
  const [selected, setselected] = useState(params.params)
  const router = useRouter()
  console.log(selected)
  return (
    // <div className='flex justify-between px-5 pt-5 pb-3 shadow-xl fixed w-full z-10 bg-slate-50 max-[800px]:flex-col'>
    //   <div className="flex justify-between mb-3">
    //   <div className="flex">
    //     <BuildingStorefrontIcon className='flex h-6 w-6 text-blue-500 text-center hover:cursor-pointer'/>
    //     <p className='text-blue-500 text-center pl-3 font-bold'>Make Engineering Easy</p>
    //   </div>
    //   <div className="flex flex-co text-center min-[800px]:hidden">
    //     <UserIcon className="flex h-6 w-6 text-blue-500 text-center hover:cursor-pointer"/>
    //     {/* <h1 className='text-xs'>login</h1> */}
    //     </div>
    //   </div>
    //   <div className="flex w-full justify-center fixed max-[800px]:relative">
    //     <h1 onClick={() => {router.push("/") , setselected("Home")}} className={`${selected === "Home" ? "border-b-2 border-blue-500 font-semibold" : ""} capitalize mx-5 hover:cursor-pointer transition-all duration-300`}>home</h1>
    //     <h1 onClick={() => {router.push("/Course") , setselected("Courses")}} className={`${selected === "Courses" ? "border-b-2 border-blue-500 font-semibold" : ""} capitalize mx-5 hover:cursor-pointer transition-all duration-300`}>courses</h1>
    //     <h1 onClick={() => {router.push("/About"), setselected("About")}} className={`${selected === "About" ? "border-b-2 border-blue-500 font-semibold" : ""} capitalize mx-5 hover:cursor-pointer transition-all duration-300`}>about us</h1>
    //   </div>
    //   <div className="flex">
    //     <div className="flex flex-co text-center max-[800px]:hidden">
    //     <UserIcon className="flex h-6 w-6 text-blue-500 text-center hover:cursor-pointer"/>
    //     {/* <h1 className='text-xs'>login</h1> */}
    //     </div>
    //   </div>
    // </div>

      




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
