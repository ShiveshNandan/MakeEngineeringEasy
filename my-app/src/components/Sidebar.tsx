"use client"
import React, { useState } from "react";
import ChangeTheme from "./changeTheme";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

const Sidebar = () => {
    const [Hover0, setHover0] = useState(false)
    const [Hover1, setHover1] = useState(false)
    const [Hover2, setHover2] = useState(false)
    const router = useRouter(); 
    const {theme} = useTheme()
  return (
    <>
      <div style={{fontFamily : 'YourFont'}} className="flex flex-col items-end overflow-x-hidden mr-5 z-[100] fixed top-0 right-0 mt-[20vh]">
        <div className="flex mb-4 rounded-lg overflow-x-hidden">
            <div className={`${Hover0 ? "translate-x-[0.2vw]" : "translate-x-[110px] "} transition-all duration-300 h-8 m-auto text-center items-center px-3 dark:bg-[#54545445] bg-[#FFF3E845] rounded-l-lg flex `}>
              {theme == 'light' ? "Light Mode" : "Dark Mode"}
              </div>
            <div onMouseEnter={() => setHover0(true)} onMouseLeave={() => setHover0(false)} className="z-[10000000000] cursor-pointer">
       <ChangeTheme/>
       </div>
        </div>
        <div className="flex mb-4 rounded-lg overflow-x-hidden ">
          <div className={`${Hover1 ? "translate-x-[0.2vw]" : "translate-x-[110px] "} transition-all duration-300 h-8 m-auto text-center items-center px-3 bg-[#707EFF45] rounded-l-lg flex `}>Contact Us</div>
        <Image onClick={() => {router.push("/Contact")}} onMouseEnter={() => setHover1(true)} onMouseLeave={() => setHover1(false)} src={'/Contact.png'} height={100} width={1000} alt="" className="h-9 w-9 z-[1] cursor-pointer"/>
        </div>
        <div className="flex mb-4 rounded-lg overflow-x-hidden ">
          <div className={`${Hover2 ? "translate-x-[0.2vw]" : "translate-x-[140px] "} transition-all duration-300 h-8 m-auto text-center items-center px-3 bg-[#ff990044] rounded-l-lg flex `}>CGPA Calculator</div>
        <Image onClick={() => {router.push("/CGPA")}} onMouseEnter={() => setHover2(true)} onMouseLeave={() => setHover2(false)} src={'/CGPA Calculator.png'} height={100} width={1000} alt="" className="h-9 w-9 z-[1] cursor-pointer"/>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
