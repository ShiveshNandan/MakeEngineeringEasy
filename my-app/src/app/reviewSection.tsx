"use client"
import React, { useEffect, useState } from "react";

const reviews = [
    {
        review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi laborum non unde exercitationem quibusdam, ipsum officiis a architecto repellendus eaque est. Voluptatum accusamus numquam reiciendis velit consequuntur ducimus nisi, quis repellat fuga amet! Velit tenetur recusandae sapiente eaque autem iusto.",
    author:"himesh bhaiya ji"
},
    {
        review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi laborum non unde exercitationem quibusdam, ipsum officiis a architecto repellendus eaque est.untur ducimus nisi, quis repellat fuga amet! Velit tenetur recusandae sapiente eaque autem iusto.",
    author:"haresh bhaiya ji"
},
    {
        review:"Lorm quibusdam, ipsum officiis a architecto repellendus eaque est. Voluptatum accusamus numquam reiciendis velit consequuntur ducimus nisi, quis repellat fuga amet! Velit tenetur recusandae sapiente eaque autem iusto.",
    author:"bhaiya ji"
},
    {
        review:" Excepturi laborum non unde exercitationem quibusdam, ipsum officiis a architecto repellendus eaque est. Voluptatum accusamus numquam reiciendis velit consequuntur ducimus nisi, quis repellat fuga amet! Velit tenetur recusandae sapiente eaque autem iusto.",
    author:"himesh bhaiya"
},
    
]


const reviewSection = () => {
    const [selected, setselected] = useState(0)
    const [isVisible, setIsVisible] = useState(true);
 

  useEffect(() => {
    const interval = setInterval(() => {
      selected === reviews.length -1 ? setselected(0) : setselected(selected+1);
    }, 3000);
    console.log(isVisible)
    return () => {clearInterval(interval)};
  }, [selected]);

  return (
    <div className="flex flex-col">

      <h1 className="text-3xl text-center font-semibold max-[800px]:text-2xl">User Voices: Unveiling Reviews</h1>
      <div className="flex flex-col">
        <div className="flex mt-10 flex-col h-[30vh] max-[800px]:mt-2 max-[800px]:h-[33vh]">


          {reviews.map((items:any, index:any) => (
            <div className="flex flex-col">
            <div key={index} className={`${selected === index ? "flex flex-row" : "hidden"} transition-opacity duration-500 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } w-11/12 mx-auto`}>
              <div className="flex flex-col text-xl ">
                <p className="text-center w-8/12 m-auto px-1 py-5 italic text-gray-500 max-[1024px]:w-full max-[800px]:text-sm ">" {items.review} "
                <h1 className="text-right text-sm italic pt-4 max-[800px]:text-xs">~ {items.author}</h1>
                </p>
              </div>
            </div>
            </div>
          ))}


        </div>
          <div className="flex my-2 mx-auto w-20">
          {reviews.map((items:any, index:any) => (
            <div key={index} onClick={() => setselected(index)} className={`${selected === index ? "bg-gray-950" : "bg-gray-400"} flex flex-row max-[1024px]:flex-col mx-auto h-2 w-2 rounded-full cursor-pointer`}>
            </div>
          ))}
          </div>
      </div>
    </div>
  );
};

export default reviewSection;
