import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import plane2 from "../../public/Plane 1.png";
import getinTouch from "../../public/get in touch.png";
import contactIllus from "../../public/contact illustration.png";
import Image from "next/image";
import Sidebar from "../Sidebar";
import A from "../../public/Bulb.png"

const page = () => {
  return (
    <>
    <Sidebar/>
    <div style={{fontFamily: "yourFontThin"}}>
      <Navbar params="Contact" />
    </div>
      <Image
        src={plane2}
        height={1}
        width={100000}
        alt=""
        className="w-[20vw] absolute mt-[15vh] dark:invert "
      />

      <div style={{fontFamily: "yourFont"}} className='flex bg-[url("../public/Background.png")] dark:bg-[url("../public/Background_dark.png")]'>

        <div className="flex flex-col bg-[#fff3e8] w-9/12 rounded-3xl m-auto mt-[42vh] shadow-xl mb-20 dark:bg-[#242424] dark:drop ">
          <div>
            <Image
              src={getinTouch}
              height={1}
              width={100000}
              alt=""
              className="w-[auto] h-[10vw] mt-[-6.3vw]  ml-[-1vw]"
            />
          </div>
          <div className="flex">
            <div className="flex flex-col w-9/12 pl-[3.5vw] py-10">
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
            <div className="mx-auto">
              <Image
                src={contactIllus}
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
