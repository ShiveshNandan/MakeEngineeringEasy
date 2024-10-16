"use client"
import React, { useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Image from "next/image";
import Sidebar from "../../components/Sidebar";
import { useTheme } from "next-themes";
import { AddMessage } from "../API/HandleApi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const {theme} = useTheme()
  const [loading,setloading] = useState(false)

  const [username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [message, setmessage] = useState("")

  function isValidEmail(email:any) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  function isNameValid(username:String) {
    return username.length > 3;
  }

  const messageSend = () => {
    setTimeout(() => {
        if(isValidEmail(email)){
          if(isNameValid(username)){
            if(isNameValid(message)){
                const res = AddMessage(message,setmessage,email,setemail,username,setusername,setloading);
                res.then(result => {
                  // console.log(result);
                  if(!result){
                    toast.success("Thanks for your words!",{theme:"colored", position: "top-center",autoClose: 2000});          
                  }else{
                    setloading(false);
                    toast.error("can't send message at the moment",{theme:"colored", position: "top-center",autoClose: 2000});
                  }
                }).catch(error => {
                    console.error(error);
                });
            }else{
              setloading(false);
              toast.error("Message is too short to be send !",{theme:"colored", position: "top-center",autoClose: 2000});
            }
          }else{
            setloading(false);
            toast.error("Enter Valid User Name",{theme:"colored", position: "top-center",autoClose: 2000});
          }
        }else{
          setloading(false);
          toast.error("Enter Valid email",{theme:"colored", position: "top-center",autoClose: 2000});
        }
          
    }, 1000);
    setloading(true);
  }
  return (
    <>
    <div className="max-sm:hidden">
    <Sidebar/>
    </div>
    <ToastContainer/>
    <div style={{fontFamily: "yourFontThin"}}>
      <Navbar params="Contact" />
    </div>
      <Image
        src={'/Plane 1.png'}
        height={1}
        width={100000}
        alt=""
        className="w-[20vw] absolute mt-[15vh] dark:invert max-lg:w-[30vw] max-sm:w-[40vw] max-sm:mt-[12vh]"
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
          <p className="w-10/12 pl-[3.5rem] pt-4 max-sm:text-xs max-sm:w-11/12 max-sm:px-2 max-sm:m-auto dark:text-[#a5a5a5] text-[#333]">We're eager to hear from you! Your suggestions are invaluable in helping us improve. If you encounter any issues or have any feedback, please don't hesitate to let us know. We're here to listen and assist you with any concerns or ideas you may have.</p>
          <div className="flex">
            <div className="flex flex-col w-9/12 pl-[3.5vw] py-10 max-md:w-11/12 max-md:m-auto max-md:px-2 max-sm:py-5">
              <input
                type="text"
                className="w-full px-2 py-2 border-2 rounded border-[#3333] my-3 "
                value={username}
                onChange={(e) => setusername(e.target.value)}
                placeholder="Full Name"
              />
              <input
                type="email"
                className="w-full px-2 py-2 border-2 rounded border-[#3333] my-3 "
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="Email Address"
              />
              <textarea
                id="review"
                className="w-full border-2 border-[#3333] rounded-lg px-2 py-2 my-3 resize-none "
                rows={9}
                value={message}
                onChange={(e) => setmessage(e.target.value)}
                placeholder={`Message / Suggestions`}
                
              ></textarea>
              <div className="flex justify-end w-full mx-auto my-4">
                <button onClick={() => {messageSend()}} disabled={loading} className={`${loading? "bg-blue-300 cursor-not-allowed" : "bg-blue-500"} w-full  rounded-md px-5 py-4 text-white max-[800px]:text-sm`}>
                  {loading? "Processing..." : "Submit"}
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
