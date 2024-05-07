"use client"
import {useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import "./navStyle.css"

const Navbar = (params:any) => {
  const [selected, setselected] = useState(params.params)
  const router = useRouter()
  console.log(selected)
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY / window.innerHeight;
      // console.log("position :",window.innerHeight)
      if (scrollPosition > 0.2945 ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // console.log("scroll " , isVisible)
  
  return (
    <>
    
    <div className={`${isVisible ? "bg-[#FFFAF5]" : ""} z-[100] flex w-full justify-evenly fixed items-center pt-8 pb-3`}>
        <h1 onClick={() => {router.push("/") , setselected("Home")}} className={`${selected === "Home" ? "text-blue-600" : "font-[500]"} capitalize mx-5 hover:cursor-pointer transition-all duration-300`}>home</h1>
        <h1 onClick={() => {router.push("/Course") , setselected("Courses")}} className={`${selected === "Courses" ? "text-blue-600" : "font-[500]"} capitalize mx-5 hover:cursor-pointer transition-all duration-300`}>courses</h1>

        <h1 onClick={() => {router.push("/") , setselected("Home")}} style={{fontFamily : 'YourFontMedium'}} className={`mx-5 hover:cursor-pointer transition-all duration-300 capitalize font-bold text-[1.4rem] tracking-[0.5px]`} >make engineering <span className='block-inline text-[#ffaa2b] '> easy</span></h1>

        <h1 onClick={() => {router.push("/About"), setselected("About")}} className={`${selected === "About" ? "text-blue-600" : "font-[500]"} capitalize mx-5 hover:cursor-pointer transition-all duration-300`}>About</h1>
        <h1 onClick={() => {router.push("/Contact") , setselected("Contact")}} className={`${selected === "Contact" ? "text-blue-600" : "font-[500]"} capitalize mx-5 hover:cursor-pointer transition-all duration-300`}>Contact</h1>
      </div>
      
    </>
  )
}

export default Navbar
