"use client"
import React, { useEffect, useState } from "react";
import { account, ID } from "@/components/appwrite";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";

const Verify = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const secret = urlParams.get("secret");
  const userId = urlParams.get("userId");
  const [loading, setloading] = useState(false);
  const [pause, setpause] = useState(true);
  const [isDisabled, setisDisabled] = useState(false)
  const router = useRouter();


  setTimeout(()=>{
    setpause(false)
  },1000)
  const verification = () => {
    const promise = account.updateVerification(userId!, secret!);
    promise.then(()=>{
        toast.success(`Varification successful!`,{theme:"colored", position: "top-center"})
          setTimeout(()=>{
            router.push("/Login")
          },3000)
    })
    .catch(()=>{
        toast.error(`Varification failed, Please follow the procedure properly.`,{theme:"colored", position: "top-center"})
          setTimeout(()=>{
            router.push("/Login")
          },3000)
    })
};

  return (
      <>
          
    <ToastContainer />
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
          className="dark:text-gray-300 text-gray-700 text-xl border py-2 px-4 rounded items-center flex dark:bg-slate-900 bg-slate-300 max-sm:text-xs ml-3 w-fit h-fit my-auto">
          {loading ? "Processing..." : "verify yourself!"}
          </button>
          </div>}
      </>
  );
};

export default Verify;
