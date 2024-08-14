import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Footer = () => {
  const router = useRouter(); 
  return (
    <div style={{fontFamily: "YourFontThin"}} className='tracking-wide' >
       <div className="flex justify-center m-auto capitalize py-14 max-sm:flex-col max-sm:pb-10">
        <h1 style={{fontFamily: "YourFont"}} className='font-bold mx-3 max-sm:justify-center max-sm:ml-7 flex' >`make engineering `<span className=' inline-block text-[#ffaa2b] '> easy</span></h1>
        <div className='flex max-sm:justify-evenly max-sm:mt-5 max-sm:text-sm max-sm:w-9/12 max-sm:m-auto'>
        <h1 onClick={() => router.push('/')} className='font-bold mx-3 cursor-pointer ' >home</h1>
        <h1 onClick={() => router.push('/Course')} className='font-bold mx-3 cursor-pointer ' >courses</h1>
        <h1 onClick={() => router.push('/About')} className='font-bold mx-3 cursor-pointer ' >about</h1>
        <h1 onClick={() => router.push('/Contact')} className='font-bold mx-3 cursor-pointer ' >contact</h1>
        </div>
       </div>
       <div className="flex justify-center dark:text-[#FFFFFF]">
        {/* <Image src={'/Facebook.png'} height={100} width={100} alt='' className='w-[2vw] mx-4 dark:invert max-sm:w-[1.8rem] max-sm:mx-2 ' />
        <Image src={'/Instagram.png'} height={100} width={100} alt='' className='w-[2vw] mx-4 dark:invert max-sm:w-[1.8rem] max-sm:mx-2 ' />
        <Image src={'/Linkedin.png'} height={100} width={100} alt='' className='w-[2vw] mx-4 dark:invert max-sm:w-[1.8rem] max-sm:mx-2 ' />
        <Image src={'/X.png'} height={100} width={100} alt='' className='w-[2vw] mx-4 dark:invert max-sm:w-[1.8rem] max-sm:mx-2 ' /> */}
       </div>

       <div style={{fontFamily: "YourFontThin"}} className="flex justify-center m-auto capitalize py-10 max-sm:flex-col max-sm:pt-3 max-sm:pb-4">
        
        <div className='flex w-full justify-around sm:hidden mt-5 mb-3 text-xs'>
        {/* <h1 className='font-bold ' >Designed by Tejasva</h1> */}
        {/* <h1 className='font-bold ' >Developed by Shivesh</h1> */}
        </div>

        {/* <h1 className='font-bold mx-5 max-sm:hidden' >Designed by Tejasva</h1> */}

        <h1 className='font-bold mx-10 max-sm:mx-auto max-sm:text-xs ' >Copyright <span>&copy;</span> 2024 All rights reserved</h1>

        {/* <h1 className='font-bold mx-5 max-sm:hidden' >Developed by Shivesh</h1> */}
       </div>
    </div>
  )
}

export default Footer