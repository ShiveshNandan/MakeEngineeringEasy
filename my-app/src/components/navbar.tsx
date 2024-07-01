"use client"
import {useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { account, ID } from "@/components/appwrite";
import "./navStyle.css"
import { useGlobalState } from '@/components/GlobalVariableProvider';



const Navbar = (params:any) => {
  const { globalState, setGlobalState } = useGlobalState();
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
  

  const handlePush = () => {
      router.push("/Course") 
  }
  
  return (
    <>
    
    <div style={{fontFamily : 'YourFontThin'}} className={`${isVisible ? "bg-[#FFFAF599] dark:bg-[#19181799]" : ""} z-[100] backdrop-blur-[13px] flex w-full justify-evenly fixed items-center pt-8 pb-3 tracking-[1px]`}>
        <h1 onClick={() => {router.push("/") , setselected("Home")}} className={`${selected === "Home" ? "text-blue-600 font-extrabold " : "font-[500]"} capitalize mx-5 hover:cursor-pointer transition-all duration-300`}>home</h1>
        <h1 onClick={() => {handlePush() , setselected("Courses")}} className={`${selected === "Courses" ? "text-blue-600 font-extrabold" : "font-[500]"} capitalize mx-5 hover:cursor-pointer transition-all duration-300`}>courses</h1>

        <h1 onClick={() => {router.push("/") , setselected("Home")}} style={{fontFamily : 'YourFontMedium'}} className={`mx-5 hover:cursor-pointer transition-all duration-300 capitalize font-bold text-[1.4rem] tracking-[0.5px]`} >make engineering <span className='block-inline text-[#ffaa2b] '> easy</span></h1>

        <h1 onClick={() => {router.push("/About"), setselected("About")}} className={`${selected === "About" ? "text-blue-600 font-extrabold" : "font-[500]"} capitalize mx-5 hover:cursor-pointer transition-all duration-300`}>About</h1>
        <h1 onClick={() => {router.push("/Login") , setselected("LogIn")}} className={`${selected === "LogIn" ? "text-blue-600 font-extrabold" : "font-[500]"} capitalize mx-5 hover:cursor-pointer transition-all duration-300`}>{globalState ? "Profile" : "LogIn"}</h1>
      </div>
      
    </>
  )
}

export default Navbar
