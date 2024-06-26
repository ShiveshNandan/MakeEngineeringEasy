"use client"
import React, { useEffect } from 'react'
import ReviewSection from './reviewSection'
import Footer from './footer'
import Image from 'next/image'
import { useTheme } from "next-themes"
import Sidebar from './Sidebar'


const HeroSection = () => {

  // const {theme,} = useTheme()
  const {theme,setTheme} = useTheme()
  useEffect(() => {
    {theme === 'light' ? setTheme('light') : setTheme('dark')}
    // setTheme('dark')
  }, [])

  // console.log("first")


  return (
    <>
      <div style={{fontFamily : 'YourFontBold'}} className='h-[120vh] flex flex-col justify-center bg-[url("../../public/Background.png")] dark:bg-[url("../public/Background_dark.png")]'>
      <Image src={'/Plane 1.png'} height={1} width={100000} alt='' className='w-[20vw] absolute mt-[-55vh] dark:invert '/>
      <div className="flex flex-col text-center mt-[10vh]">
      <h1 className='uppercase m-auto text-[4vw] tracking-[0.8px] w-7/12 text-[#333333] leading-[5.5vw] dark:text-[#fffaf5] '>
        unlock the <span className='inline-block'>
        {theme === 'light' ? 
          <Image src={'/DOOR.png'} height={1} width={100000} alt='' className='w-[12vw]'/>
          :
          <Image src={'/DOOR_dark.png'} height={1} width={100000} alt='' className='w-[12vw]'/>
         }
          </span> to <span className='inline-block'><Image src={'/sitting.png'} width={10000} height={1800} alt='' className=' w-[4.5vw] absolute mt-[-4vw] ml-[-0.7vw] '/></span> effortless <span className='px-[1.5vw] ml-[1vw] border-[#3b82f6] text-[#3b82f6] border-[3px] border-dashed rounded-2xl inline-block'>learning</span>
        </h1>
        <div className='flex m-auto bg-[#333333] w-fit mt-20 p-1 rounded-full dark:bg-[#fff4ec]'>
        <h1 className='text-xl flex bg-[#333333] text-[#fff4ec] rounded-full px-6 py-3 capitalize border-dashed border-[#fff4ec] border-2 items-center dark:bg-[#fff4ec] dark:border-[#333333] dark:text-[#333333]'>
          <span className='inline-block'><Image src={'/Bulb.png'} height={1} width={100000} alt='' className='w-[30px] justify-center mr-2 '/></span> explore courses</h1>
        </div>
      </div>
      <Image src={'/Plane 2.png'} height={1} width={100000} alt='' className='w-[20vw] absolute right-0 mt-[60vh] dark:invert'/>
      </div>
      <div className=''>
      <Sidebar/>
      </div>





      {/* ================== features section =================== */}





      <div style={{fontFamily : 'YourFont'}} className="flex flex-col text-center bg-[#fff3e8] rounded-[70px] justify-center dark:bg-[#242424]">
        <div className={`${theme === 'dark' ? "drop" : ""} flex flex-col w-10/12 border-4 border-b-0 justify-center border-dashed border-[#c1b9b2] rounded-[70px] my-20 mt-40 mx-auto dark:border-[#6f6a65] `}>
          <h1 style={{fontFamily : 'YourFontbold'}} className='uppercase text-4xl my-14 text-[#333333] font-bold dark:text-[#FFFFFF]'>features</h1>
          <div className=" flex justify-between ">
            
            <div className="flex relative overflow-hidden w-[32%] ml-[-4px]">
            <div className="flex flex-col rounded-2xl bg-[#FAD85D]  text-left overflow-hidden ">
            <Image src={'/Highlights yellow.png'} height={1} width={100000} alt='' className='w-[100%] h-[100%] absolute overflow-hidden '/>
              <div className="flex flex-col z-10 mt-10 mb-5">
            <Image src={'/image 5 (1).png'} height={1} width={100000} alt='' className='w-[10vw]'/>
            <div className="flex flex-col px-7 ">
            <h1  className='mt-5 text-[2.3vw] text-[#1e1c1a] leading-[1.1] font-[700] tracking-[0.03vw] '>Past Year Question Papers</h1>
          <p className=' text-[#766735] py-5 w-12/12 text-[1.35vw] font-[400] tracking-[0.01vw] '> Access a repository of meticulously compiled PYQs spanning various subjects and educational boards, enabling you to familiarize yourself with exam patterns and prepare effectively.</p>
              </div>
              </div>
            </div>
            </div>

            <div className="flex relative overflow-hidden w-[32%] ">
            <div className="flex flex-col rounded-2xl bg-[#707eff]  text-left overflow-hidden ">
            <Image src={'/Highlights blue.png'} height={1} width={100000} alt='' className='w-[100%] h-[100%] absolute overflow-hidden '/>
              <div className="flex flex-col z-10 mt-10 mb-5">
            <Image src={'/image 6 (1).png'} height={1} width={100000} alt='' className='w-[10vw]'/>
            <div className="flex flex-col px-7 ">
            <h1 style={{fontFamily : 'YourFontThin'}} className='mt-5 w-10/12 text-[2.3vw] leading-[1.1] font-[900] tracking-[0.08vw] '>Comprehensive Study Notes</h1>
          <p className='text-[#e1efffdc] py-5 w-12/12 text-[1.35vw] font-[200] tracking-[0.02vw] '>Explore a rich assortment of well-researched study materials created by our team of experienced educators, designed to simplify complex concepts and facilitate a deeper understanding of your course material.</p>
              </div>
              </div>
            </div>
            </div>
            <div className="flex relative overflow-hidden w-[32%] mr-[-4px]">
            <div className="flex flex-col rounded-2xl bg-[#f2a0ff] text-left overflow-hidden ">
            <Image src={'/Highlights purple.png'} height={1} width={100000} alt='' className='w-[100%] h-[100%] absolute overflow-hidden '/>
              <div className="flex flex-col z-10 mt-10 mb-5">
            <Image src={'/image 8 (1).png'} height={1} width={100000} alt='' className='w-[10vw]'/>
            <div className="flex flex-col px-7 ">
            <h1  className='mt-5 text-[2.3vw] leading-[1.1] w-10/12 font-[700] tracking-[0.05vw] text-[#1E1C1A]'>Curated Lecture Links</h1>
          <p className='text-[#735176] py-5 w-12/12 text-[1.35vw] font-[400]'> Seamlessly integrate your learning experience with our carefully curated collection of lecture links from renowned educators, ensuring that you have access to valuable insights and explanations to supplement your studies.</p>
              </div>
              </div>
            </div>
            </div>

          </div>
        </div>



        {/* ================================testimonials====================================== */}




        <ReviewSection/>
      </div> 

      <Footer/>
    </>
  )
}

export default HeroSection
