"use client"
import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Image from "next/image";
import Sidebar from "../../components/Sidebar";
import { useTheme } from "next-themes";

const page = () => {
  const {theme} = useTheme()
  return (
    <>
    <div className="max-sm:hidden">
    <Sidebar/>
    </div>
    <div style={{fontFamily: "yourFontThin"}}>
      <Navbar params="Contact" />
    </div>
      <Image
        src={'/Plane 1.png'}
        height={1}
        width={100000}
        alt=""
        className="w-[20vw] absolute mt-[15vh] dark:invert max-lg:w-[30vw] max-sm:w-[40vw] "
      />

      <div style={{fontFamily: "yourFont"}} className='flex bg-[#FFFAF5] dark:bg-[#191817] bg-[url("../../public/Background.png")] dark:bg-[url("../../public/Background_dark.png")] drop'>

        <div className="flex flex-col bg-[#fff3e8] w-9/12 rounded-3xl m-auto mt-[42vh] shadow-xl mb-20 dark:bg-[#242424] max-md:mt-64 max-sm:w-11/12 ">
          <div>
             {theme === 'light' ? 
          <Image
          src={'/get in touch.png'}
          height={1}
          width={100000}
          alt=""
          className="w-[auto] h-[10vw] mt-[-6.3vw]  ml-[-1vw] max-sm:h-[6rem] max-sm:mt-[-4rem] max-sm:ml-[0.5rem]"
        />
          :
          <Image
              src={'/get in touch_dark.png'}
              height={1}
              width={100000}
              alt=""
              className="w-[auto] h-[10vw] mt-[-6.3vw]  ml-[-1vw] max-sm:h-[6rem] max-sm:mt-[-4rem] max-sm:ml-[0.5rem]"
            />
         }
          </div>
          <div className="flex">
            <div className="flex flex-col w-9/12 pl-[3.5vw] py-10 max-md:w-11/12 max-md:m-auto max-md:px-2">
              <input
                type="text"
                className="w-full px-2 py-2 border-2 rounded border-[#3333] my-3 "
                placeholder="Full Name"
              />
              <input
                type="email"
                className="w-full px-2 py-2 border-2 rounded border-[#3333] my-3 "
                placeholder="Email Address"
              />
              <textarea
                id="w3review"
                className="w-full border-2 border-[#3333] rounded-lg px-2 py-2 my-3 resize-none "
                rows={9}
                placeholder={`Message`}
                
              ></textarea>
              <div className="flex justify-end w-full mx-auto my-4">
                <button className=" w-full bg-blue-500 rounded-md px-5 py-4 text-white max-[800px]:text-sm">
                  Submit
                </button>
              </div>
            </div>
            <div className="mx-auto max-md:hidden">
              <Image
                src={'/contact illustration.png'}
                height={10000}
                width={100000}
                alt=""
                className=" w-[10vw] h-[78%] mt-[4vw]"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
