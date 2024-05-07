import Image from 'next/image'
import React from 'react'
import facebook from "../public/Facebook.png"
import instagram from "../public/Instagram.png"
import linkedin from "../public/Linkedin.png"
import x from "../public/X.png"

const Footer = () => {
  return (
    <div style={{fontFamily: "YourFontThin"}} className='tracking-wide' >
       <div className="flex justify-center m-auto capitalize my-14">
        <h1 style={{fontFamily: "YourFont"}} className='font-bold mx-3 ' >make engineering <span className=' inline-block text-[#ffaa2b] '>easy</span></h1>
        <h1 className='font-bold mx-3' >home</h1>
        <h1 className='font-bold mx-3' >courses</h1>
        <h1 className='font-bold mx-3' >about</h1>
        <h1 className='font-bold mx-3' >contact</h1>
       </div>
       <div className="flex justify-center ">
        <Image src={facebook} height={100} width={100} alt='' className='w-[2vw] mx-4 ' />
        <Image src={instagram} height={100} width={100} alt='' className='w-[2vw] mx-4 ' />
        <Image src={linkedin} height={100} width={100} alt='' className='w-[2vw] mx-4 ' />
        <Image src={x} height={100} width={100} alt='' className='w-[2vw] mx-4 ' />
       </div>
       <div className="flex justify-center m-auto capitalize py-10">
        <h1 className='font-bold mx-3' >Designed by Tejasva</h1>
        <h1 className='font-bold mx-3' >Copyright @ 2024 All rights reserved</h1>
        <h1 className='font-bold mx-3' >Developed by Shivesh</h1>
       </div>
    </div>
  )
}

export default Footer