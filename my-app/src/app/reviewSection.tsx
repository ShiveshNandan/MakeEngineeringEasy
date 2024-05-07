"use client"
import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image';



const reviews = [
    {
        review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi laborum non unde exercitationem quibusdam, ipsum officiis a architecto repellendus eaque est. Voluptatum accusamus numquam reiciendis velit consequuntur ducimus nisi, quis repellat fuga amet! Velit tenetur recusandae sapiente eaque autem iusto.",
    author:"himesh bhaiya ji",
    color:"255"
},
    {
        review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi laborum non unde exercitationem quibusdam, ipsum officiis a architecto repellendus eaque est.untur ducimus nisi, quis repellat fuga amet! Velit tenetur recusandae sapiente eaque autem iusto.",
    author:"haresh bhaiya ji",
    color:"191"
},
    {
        review:"Lorm quibusdam, ipsum officiis a architecto repellendus eaque est. Voluptatum accusamus numquam reiciendis velit consequuntur ducimus nisi, quis repellat fuga amet! Velit tenetur recusandae sapiente eaque autem iusto.",
    author:"bhaiya ji",
    color:"173"
},
    {
        review:" Excepturi laborum non unde exercitationem quibusdam, ipsum officiis a architecto repellendus eaque est. Voluptatum accusamus numquam reiciendis velit consequuntur ducimus nisi, quis repellat fuga amet! Velit tenetur recusandae sapiente eaque autem iusto.",
    author:"himesh bhaiya",
    color:"265"
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
<h1 style={{fontFamily : "YourFontBold"}} className='uppercase text-4xl my-[10vh] text-[#333931]'>Testimonials</h1>
<div className="relative">
  
      <div className="flex w-12/12 overflow-x-hidden m-auto pt-10">
        <div className="flex transition-all duration-500 ease-in-out" style={{ transform: `translateX(-${activeIndex*25}%)` }}> 

        <div className="flex w-12/12   left-[-100px]">
          {reviews.map((slide:any, index:any) => (
            <div key={index}  className="flex flex-col translate-x-[30vw]">
              <div style={{background : `${index === activeIndex ?  `rgb(${slide.color} ${(slide.color - 18)} ${slide.color -84})` : ""}`, border : `4px solid ${index === activeIndex ?  `rgb(${slide.color - 2} ${(slide.color - 45)} ${slide.color -163})` : ""}`}}  className={` ${index === activeIndex ? " scale-[1.1] " : ""} flex w-[35.3vw] h-[20vw] mx-10 transition-all duration-500 ease-in-out my-10 bg-blue-200 border-4 rounded-3xl flex-col `}>
                <div className='mt-[-6vh]'>
                <Image src={""} width={100} height={100} alt='' style={{background : `${index === activeIndex ?  `rgb(${slide.color - 2} ${(slide.color - 45)} ${slide.color -163})` : ""}`, border : `4px solid ${index === activeIndex ?  `rgb(${slide.color} ${(slide.color - 12)} ${slide.color -23})` : ""}`}} className={`' rounded-full w-[100px] h-[100px] m-auto '`}/>
                </div>
                <div className='flex flex-col w-10/12 m-auto text-xl '>
                  
                <p style={{color : `${index === activeIndex ?  `rgb(${slide.color - 46} ${(slide.color - 126)} ${slide.color -254})` : ""}`}} >{slide.review}</p>
                <p style={{color : `${index === activeIndex ?  `rgb(${slide.color - 46} ${(slide.color - 126)} ${slide.color -254})` : ""}`}}  className='flex justify-end my-5'>- {slide.author}</p>
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
            className={`h-2 mx-1 rounded-full transition-all duration-500 ease-in-out ${index === activeIndex ? 'bg-[#7683ff] w-7' : 'bg-[#c8c6f1] w-2 '}`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
  </div>

    </>

  );
};

export default reviewSection;
