import React from 'react'
import ReviewSection from './reviewSection'
import Image from 'next/image'
import door from "../../public/DOOR.png"
import sit from "../../public/sitting.png"
import plane from "../../public/Plane 2.png"
import plane2 from "../../public/Plane 1.png"
import yellowCard from "../../public/Highlights yellow.png"
import blueCard from "../../public/Highlights blue.png"
import purpleCard from "../../public/Highlights purple.png"
import pyq from "../../public/image 5 (1).png"
import notes from "../../public/image 6 (1).png"
import links from "../../public/image 8 (1).png"
import bulb from "../../public/Bulb.png"


const HeroSection = () => {

  return (
    <>
      {/* <div className="flex w-full h-[90vh] bg-blue-500 overflow-hidden">
        <div className="flex flex-col mx-auto my-auto w-6/12 max-[800px]:w-full">
            <h1 className='mx-auto w-9/12 text-xl mb-6'>Hello Amigo,</h1>
            <h1 className='mx-auto w-9/12 text-2xl'>Unlock the door to <span className='text-green-400 font-bold'>effortless learning </span> and embark on a journey of <span className='text-green-400 font-bold'>academic excellence</span> with us.</h1>
        </div>
        <div className='w-6/12 max-[800px]:w-0'>
        <img className='bg-black w-full h-full' src="" alt="" />
        </div>
      </div>

      // ==================what we provide=================== 
      <div className="flex w-9/12 m-auto my-20 max-[1024px]:w-full max-[800px]:flex-col">
        <div className="flex flex-col mx-5 text-center px-8 py-5 ">
          <img src="" alt="gg" className='border' />
          <h1 className='mt-5 font-bold text-xl text-gray-700'>Past Year Question Papers</h1>
          <p className='text-sm text-gray-600 py-2'> Access a repository of meticulously compiled PYQs spanning various subjects and educational boards, enabling you to familiarize yourself with exam patterns and prepare effectively.</p>
        </div>
        <div className="flex flex-col mx-5 text-center px-8 py-5">
          <img src="" alt="gg" className='border' />
          <h1 className='mt-5 font-bold text-xl text-gray-700'>Recomended videos</h1>
          <p className='text-sm text-gray-600 py-2'>Discover our curated collection of recommended videos for each subject, carefully selected to support your studies. Plus, explore additional related videos we provide to further enrich your learning journey.</p>
        </div>
        <div className="flex flex-col mx-5 text-center px-8 py-5">
          <img src="" alt="gg" className='border' />
          <h1 className='mt-5 font-bold text-xl text-gray-700'>E-Books</h1>
          <p className='text-sm text-gray-600 py-2'> Explore our recommended books section, offering curated selections for each subject to enhance your study materials. Additionally, find links to related books that we provide for further reading and in-depth understanding.</p>
        </div>
      </div>

      // ============== review carausal ===============
      <div className="flex flex-col w-9/12 m-auto max-[1024px]:w-full">
        <ReviewSection/>
      </div> */}


      {/* ============= new section =============== */}


      <div className='h-[120vh] flex flex-col justify-center bg-[url("../../public/Background.png")]'>
      <Image src={plane2} height={1} width={100000} alt='' className='w-[20vw] absolute mt-[-55vh] '/>
      <div className="flex flex-col text-center mt-[10vh]">
      <h1 className='uppercase m-auto text-[4vw] tracking-[0.8px] w-7/12 text-[#333333] leading-[5.5vw] '>
        unlock the <span className='inline-block'><Image src={door} height={1} width={100000} alt='' className='w-[12vw] '/></span> to <span className='inline-block'><Image src={sit} width={10000} height={1800} alt='' className=' w-[4.5vw] absolute mt-[-4vw] ml-[-0.7vw] '/></span> effortless <span className='px-[1.5vw] ml-[1vw] border-[#3b82f6] text-[#3b82f6] border-[3px] border-dashed rounded-2xl inline-block'>learning</span>
        </h1>
        <div className='flex m-auto bg-[#333333] w-fit mt-20 p-1 rounded-full'>
        <h1 className='text-xl flex bg-[#333333] text-white rounded-full px-6 py-3 capitalize border-dashed border-white border-2 items-center '>
          <span className='inline-block'><Image src={bulb} height={1} width={100000} alt='' className='w-[30px] justify-center mr-2 '/></span> explore courses</h1>
        </div>
      </div>
      <Image src={plane} height={1} width={100000} alt='' className='w-[20vw] absolute right-0 mt-[60vh]'/>
      </div>


      {/* ================== features section =================== */}

      <div className="flex text-center bg-pink-100 rounded-[70px] justify-center ">
      {/* <div style={{fontFamily : 'YourFontMedium'}} className="flex text-center bg-pink-100 rounded-[70px] justify-center "> */}
        <div className="flex flex-col w-10/12 border-4 border-b-0 justify-center border-dashed border-[#c1b9b2] rounded-[70px] my-20 ">
          <h1 className='uppercase text-4xl my-14 text-[#333333] font-bold '>features</h1>
          <div className=" flex justify-between ">
            
            <div className="flex relative overflow-hidden w-[32%] ml-[-4px]">
            <div className="flex flex-col rounded-3xl bg-[#FAD85D]  text-left overflow-hidden ">
            <Image src={yellowCard} height={1} width={100000} alt='' className='w-[100%] h-[100%] absolute overflow-hidden '/>
              <div className="flex flex-col z-10 my-10">
            <Image src={pyq} height={1} width={100000} alt='' className='w-[10vw]'/>
            <div className="flex flex-col px-7 ">
            <h1 className='mt-5 text-4xl font-bold '>Past Year Question Papers</h1>
          <p className='text-xl text-gray-600 py-5 w-11/12'> Access a repository of meticulously compiled PYQs spanning various subjects and educational boards, enabling you to familiarize yourself with exam patterns and prepare effectively.</p>
              </div>
              </div>
            </div>
            </div>

            <div className="flex relative overflow-hidden w-[32%] ">
            <div className="flex flex-col rounded-3xl bg-[#707eff]  text-left overflow-hidden ">
            <Image src={blueCard} height={1} width={100000} alt='' className='w-[100%] h-[100%] absolute overflow-hidden '/>
              <div className="flex flex-col z-10 my-10">
            <Image src={notes} height={1} width={100000} alt='' className='w-[10vw]'/>
            <div className="flex flex-col px-7 ">
            <h1 className='mt-5 text-4xl font-bold '>Comprehensive Study Notes</h1>
          <p className='text-xl text-gray-600 py-5 w-11/12'>Explore a rich assortment of well-researched study materials created by our team of experienced educators, designed to simplify complex concepts and facilitate a deeper understanding of your course material.</p>
              </div>
              </div>
            </div>
            </div>
            <div className="flex relative overflow-hidden w-[32%] mr-[-4px]">
            <div className="flex flex-col rounded-3xl bg-[#f2a0ff] text-left overflow-hidden ">
            <Image src={purpleCard} height={1} width={100000} alt='' className='w-[100%] h-[100%] absolute overflow-hidden '/>
              <div className="flex flex-col z-10 my-10">
            <Image src={links} height={1} width={100000} alt='' className='w-[10vw]'/>
            <div className="flex flex-col px-7 ">
            <h1 className='mt-5 text-4xl font-bold '>Curated Lecture Links</h1>
          <p className='text-xl text-gray-600 py-5 w-11/12'> Seamlessly integrate your learning experience with our carefully curated collection of lecture links from renowned educators, ensuring that you have access to valuable insights and explanations to supplement your studies.</p>
              </div>
              </div>
            </div>
            </div>

            

          </div>
        </div>
      </div>



    </>
  )
}

export default HeroSection
