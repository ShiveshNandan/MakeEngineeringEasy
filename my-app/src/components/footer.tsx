import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div style={{fontFamily: "YourFontThin"}} className='tracking-wide' >
       <div className="flex justify-center m-auto capitalize py-14">
        <h1 style={{fontFamily: "YourFont"}} className='font-bold mx-3 ' >make engineering <span className=' inline-block text-[#ffaa2b] '>easy</span></h1>
        <h1 className='font-bold mx-3' >home</h1>
        <h1 className='font-bold mx-3' >courses</h1>
        <h1 className='font-bold mx-3' >about</h1>
        <h1 className='font-bold mx-3' >contact</h1>
       </div>
       <div className="flex justify-center dark:text-[#FFFFFF]">
        <Image src={'/Facebook.png'} height={100} width={100} alt='' className='w-[2vw] mx-4 dark:invert ' />
        <Image src={'/Instagram.png'} height={100} width={100} alt='' className='w-[2vw] mx-4 dark:invert ' />
        <Image src={'/Linkedin.png'} height={100} width={100} alt='' className='w-[2vw] mx-4 dark:invert ' />
        <Image src={'/X.png'} height={100} width={100} alt='' className='w-[2vw] mx-4 dark:invert ' />
       </div>
       <div style={{fontFamily: "YourFontThin"}} className="flex justify-center m-auto capitalize py-10">
        <h1 className='font-bold mx-5' >Designed by Tejasva</h1>
        <h1 className='font-bold mx-10' >Copyright <span>&copy;</span> 2024 All rights reserved</h1>
        <h1 className='font-bold mx-5' >Developed by Shivesh</h1>
       </div>
    </div>
  )
}

export default Footer