"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';



const reviews = [
    {
        review:"Make Engineering Easy's resources were instrumental in our success. The study materials provided clarity and confidence, leading to exam success. Highly recommended!",
        author:"himesh bhaiya ji",
    profileBorder:"#624cad",
    Border:"#bf83ff",
    bg:"#e0c5fd",
    comma:"#bf83ff",
    font: "#56515c"
},
    {
        review:"Make Engineering Easy's support was invaluable. Past year question papers, study notes, and lecture links simplified learning. Passed exams with confidence and deeper understanding. Highly recommend!",
    author:"haresh bhaiya ji",
    profileBorder:"#FFF3E8",
    Border:"#fdd25c",
    bg:"#ffedab",
    comma:"#ff9900",
    font: "#3b3a37"
},
    {
        review:"Make Engineering Easy's support was invaluable. Past year question papers, study notes, and lecture links simplified learning. Passed exams with confidence and deeper understanding. Highly recommend!",
    author:"bhaiya ji",
    profileBorder:"#36b6f6",
    Border:"#36bafb",
    bg:"#c3cced",
    comma:"#5f626b",
    font: "#5f626b"
},
    {
        review:" Make Engineering Easy's support was invaluable. Past year question papers, study notes, and lecture links simplified learning. Passed exams with confidence and deeper understanding. Highly recommend!",
    author:"himesh bhaiya",
    profileBorder:"#FFF3E8",
    Border:"#fdd25c",
    bg:"#ffedab",
    comma:"#ff9900",
    font: "#3b3a37"
},
    
]


const reviewSection = () => {

  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [reviews.length]);

  const handleDotClick = (index:any) => {
    setActiveIndex(index);
  };

  return (
    <>
<h1 style={{fontFamily : "YourFontBold"}} className='uppercase text-4xl my-[10vh] text-[#333931] dark:text-[#FFFFFF] max-sm:my-[1rem]'>Testimonials</h1>
<div style={{fontFamily : "YourFont"}} className="relative z-10">
  
      <div className="flex w-12/12 overflow-x-hidden m-auto pt-10 ">
        <div className="flex transition-all duration-500 ease-in-out" style={{ transform: `translateX(-${activeIndex*25}%)` }}> 

        <div className="flex left-[-100px]">
          {reviews.map((slide:any, index:any) => (
            <div key={index} onClick={() => handleDotClick(index)}  className="flex flex-col max-md:translate-x-[15vw] translate-x-[30vw] cursor-pointer max-sm:translate-x-[11vw] max-sm:w-[78vw] items-center">
              <div style={{background : `${index === activeIndex ?  `${slide.bg}` : " #ffffff "}`, border : ` ${index === activeIndex ?  `4px solid ${slide.Border}` : `2px solid ${slide.Border}`}`}}  className={` ${index === activeIndex ? " scale-[1.1] " : ""} flex w-[35.3vw] h-[20vw] mx-10 transition-all duration-500 ease-in-out my-10 bg-blue-200 border-4 rounded-3xl flex-col max-md:w-[57.3vw] max-md:h-[35vw] max-sm:w-[70vw] max-sm:h-[35vw]`}>
                <div className='mt-[-6vh]'>
                <Image src={'/image 10.png'} width={100} height={100} alt='' style={{background : `${index === activeIndex ?  `white` : "white"}`, border : `${index === activeIndex ?  `4px solid ${slide.profileBorder}` : `2px solid ${slide.profileBorder}`}`}} className={`' rounded-full w-[100px] h-[100px] m-auto max-sm:w-[75px] max-sm:h-[75px] '`}/>
                </div>
                <div className='flex flex-col w-10/12 m-auto text-xl max-sm:w-11/12'>
                  
                <p style={{color : `${index === activeIndex ?  `${slide.font}` : " #adadad "}`}} className={`${index === activeIndex ?  "text-[1.2vw] max-md:text-[2.5vw]" : "text-[1vw] max-md:text-[2.3vw]"}  leading-[1.8vw] max-md:leading-[2.9vw] transition-all duration-500 ease-in-out `} >{slide.review}</p>
                <p style={{color : `${index === activeIndex ?  `${slide.comma}` : `${slide.comma}`}`}}  className={` ${index === activeIndex ?  "font-bold text-[1.2vw] tracking-wide max-md:text-[2.5vw]" : "text-[1.1vw] max-md:text-[2.3vw]"} flex justify-end my-5 capitalize transition-all duration-500 ease-in-out max-sm:my-1 max-sm:p-0`}>- {slide.author}</p>
                </div>
              </div>
              
            </div>
          ))}
          
          </div>

        </div>
      </div>
      <div className="flex justify-center mt-6 mb-[10vh]">
        {reviews.map((slide, index) => (
          <button
            key={index}
            className={`h-2 mx-1 rounded-full transition-all duration-500 ease-in-out ${index === activeIndex ? 'bg-[#7683ff] w-7' : 'bg-[#c8c6f1] w-2 cursor-pointer '}`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
  </div>

    </>

  );
};

export default reviewSection;
