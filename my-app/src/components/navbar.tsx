"use client"
import {useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
// import { account, ID } from "@/components/appwrite";
import "./navStyle.css"
import { useGlobalState } from '@/components/GlobalVariableProvider';
import { useTheme } from "next-themes";



const Navbar = (params:any) => {
  const { globalState, setGlobalState } = useGlobalState();
  const [selected, setselected] = useState(params.params)
  const router = useRouter()
  // console.log(selected)
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


  const [menu, setmenu] = useState(false);
  const { theme, setTheme } = useTheme()
  const toggle = () => {
    {theme ==='dark' ? setTheme('light') : setTheme('dark')}
    // console.log(theme)
  }

  
  
  return (
    <>
    
    <div style={{fontFamily : 'YourFontThin'}} className={`${isVisible ? "bg-[#FFFAF599] dark:bg-[#19181799]" : ""} z-[100] backdrop-blur-[13px] flex w-full justify-evenly fixed items-center pt-8 pb-3 tracking-[1px]`}>
      <div className='flex w-full justify-evenly max-sm:justify-between max-sm:w-11/12'>

        <h1 onClick={() => {router.push("/") , setselected("Home")}} className={`${selected === "Home" ? "text-[#3b82f6] font-extrabold " : "font-[500]"} capitalize mx-5 hover:cursor-pointer transition-all duration-300 max-sm:hidden`}>home</h1>
        <h1 onClick={() => {router.push("/Course") , setselected("Courses")}} className={`${selected === "Courses" ? "text-[#3b82f6] font-extrabold" : "font-[500]"} capitalize mx-5 hover:cursor-pointer transition-all duration-300 max-sm:hidden`}>courses</h1>

        <h1 onClick={() => {router.push("/") , setselected("Home")}} style={{fontFamily : 'YourFontMedium'}} className={`mx-5 hover:cursor-pointer transition-all duration-300 capitalize font-bold text-[1.4rem] tracking-[0.5px] max-sm:mx-0`} >make engineering <span className='block-inline text-[#ffaa2b] '> easy</span></h1>

        <h1 onClick={() => {router.push("/About"), setselected("About")}} className={`${selected === "About" ? "text-[#3b82f6] font-extrabold" : "font-[500]"} capitalize mx-5 hover:cursor-pointer transition-all duration-300 max-sm:hidden`}>About</h1>
        <h1 onClick={() => {router.push("/Login") , setselected("LogIn")}} className={`${selected === "LogIn" ? "text-[#3b82f6] font-extrabold" : "font-[500]"} capitalize mx-5 hover:cursor-pointer transition-all duration-300 max-sm:hidden`}>{globalState ? "Profile" : "LogIn"}</h1>



        <div onClick={()=>{setmenu(true)}} className='w-8 h-8 bg-black my-auto sm:hidden'></div>



    </div>

      </div>  
        {/* =================== phone navbar =================== */}
        <div style={{fontFamily : 'YourFontThin'}} className={`${!menu? "translate-x-[110vw]" : "" } flex flex-col fixed w-full h-screen top-0 right-0 align-center justify-between backdrop-blur-xl sm:hidden transition-all duration-700 z-[100] `}>
          <img src="" alt="" onClick={()=> {setmenu(false)}} className='h-7 w-7 fixed bg-white right-4 top-9  '/>

          <div className="flex flex-col w-full mt-20">
            <h1 onClick={() => {router.push("/") , setselected("Home")}} className={`${selected === "Home" ? "text-[#3b82f6] font-extrabold" : "font-[500]"} w-full text-center p-3 border-b-2 rounded-md border-gray-500 `}>Home</h1>
            <h1 onClick={() => {router.push("/Course") , setselected("Course")}} className={`${selected === "Course" ? "text-[#3b82f6] font-extrabold" : "font-[500]"} w-full text-center p-3 border-b-2 rounded-md border-gray-500 `}>Courses</h1>
            <h1 onClick={() => {router.push("/About") , setselected("About")}} className={`${selected === "About" ? "text-[#3b82f6] font-extrabold" : "font-[500]"} w-full text-center p-3 border-b-2 rounded-md border-gray-500 `}>About</h1>
            <h1 onClick={() => {router.push("/Login") , setselected("LogIn")}} className={`${selected === "LogIn" ? "text-[#3b82f6] font-extrabold" : "font-[500]"} w-full text-center p-3 border-b-2 rounded-md border-gray-500 `}>LogIn</h1>
            <h1 onClick={()=> router.push("Contact")} className={`${selected === "Contact" ? "text-[#3b82f6] font-extrabold" : "font-[500]"} w-full text-center p-3 border-b-2 rounded-md border-gray-500 `}>Contact us</h1>
          
            <h1 className='w-full font-extrabold  p-3 uppercase mt-5 tracking-[1.5px]'>Features</h1>
            <h1 onClick={() => toggle()} className='w-full text-center p-3 border-b-2 rounded-md border-gray-500 '>Light Mode</h1>
            <h1 onClick={()=> router.push("CGPA")} className={`${selected === "CGPA" ? "text-[#3b82f6] font-extrabold" : "font-[500]"} w-full text-center p-3 border-b-2 rounded-md border-gray-500 `}>CGPA Calculator</h1>
          </div>
          
          <h1 onClick={() => {router.push("/") , setselected("Home")}} style={{fontFamily : 'YourFontMedium'}} className={`mx-5 hover:cursor-pointer transition-all duration-300 capitalize font-bold text-[1.4rem] tracking-[0.5px] max-sm:mx-auto max-sm:mb-4`} >make engineering <span className='block-inline text-[#ffaa2b] '> easy</span></h1>
        </div>
      
    </>
  )
}

export default Navbar
