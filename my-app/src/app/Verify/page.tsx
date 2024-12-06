"use client"
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import ChangeTheme from "@/components/changeTheme";
import { verified } from "../API/HandleApi";

const Verify = () => {
  const [Email, setEmail] = useState<string | null>(null);
  const [secret, setsecret] = useState<string | null>(null);
  const [loading, setloading] = useState(false);
  const [pause, setpause] = useState(true);
  const [isDisabled, setisDisabled] = useState(false)
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      setEmail(urlParams.get("to"));
      setsecret(urlParams.get("secret"));
    }

    const timeout = setTimeout(() => {
      setpause(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const verification = async () => {
    try {
      const response = await verified(secret,Email);
      if(response){
        toast.success(`Varification successful!`,{theme:"colored", position: "top-center"})
          setTimeout(()=>{
            router.push("/Login")
          },3000)
      }
    } catch (error) {
      toast.error(`Varification failed, Please follow the procedure properly.`,{theme:"colored", position: "top-center"})
        setTimeout(()=>{
          router.push("/Login")
        },3000)
      
    }
    // promise.then(()=>{
    // })
    // .catch(()=>{
    // })
};

  return (
      <>
          
    <ToastContainer />
    <div className="fixed w-full top-0">
        <div className="flex justify-between w-11/12 m-auto mt-8">
    <h1 onClick={() => {router.push("/")}} style={{fontFamily : 'YourFontMedium'}} className={`mx-5 hover:cursor-pointer transition-all duration-300 capitalize font-bold text-[1.4rem] tracking-[0.5px] max-sm:mx-0 max-sm:text-xl `} >make engineering <span className='block-inline text-[#ffaa2b] '> easy</span></h1>
    <ChangeTheme/>
        </div>
        </div>
        
          {pause ? 
          <div className="flex m-auto w-full h-screen justify-center">
          <div
          className="dark:text-gray-300 text-gray-700 text-xl py-2 px-4 rounded items-center flex max-sm:text-xs ml-3 w-fit h-fit my-auto">
          loading...
          </div>
          </div>
          : 
          <div className="flex m-auto w-full h-screen justify-center">
          <button 
          onClick={()=>{verification(),setloading(true); setisDisabled(true)}} 
          disabled={isDisabled}
          className="dark:text-gray-100 text-gray-300 text-xl border py-2 px-4 rounded items-center flex dark:bg-green-500 bg-green-600 max-sm:text-xs ml-3 w-fit h-fit my-auto">
          {loading ? "Processing..." : "verify yourself!"}
          </button>
          </div>}
      </>
  );
};

export default Verify;
