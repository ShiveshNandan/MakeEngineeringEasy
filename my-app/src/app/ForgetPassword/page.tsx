"use client";
import React, { useEffect, useState } from "react";
import { account, ID } from "@/components/appwrite";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import ChangeTheme from "@/components/changeTheme";
const Forget = () => {
  const [secret, setSecret] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [password, setpassword] = useState<string | null>(null);
  const [repassword, setrepassword] = useState<string | null>(null);
  const [loading, setloading] = useState(false);
  const [leave, setleave] = useState(false);
  const [isDisabled, setisDisabled] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      setSecret(urlParams.get("secret"));
      setUserId(urlParams.get("userId"));
    }
  }, []);

  const recovery = () => {
    const promise = account.updateRecovery(userId!, secret!, password!);

    promise
      .then((response) => {
        // console.log(response);
        toast.success(`Password reset successfully!`,{theme:"colored", position: "top-center"})
        setpassword("");
        setrepassword("");
        setleave(true);
        setTimeout(() => {
            router.push("/Login")
        }, 4000);
      })
      .catch((error) => {
        // console.log(error);
        toast.error(`Recovery failed, Please follow the procedure properly.`,{theme:"colored", position: "top-center"})
        setisDisabled(true);
        setloading(false);
        setpassword("");
        setrepassword("");
      });
  };

  useEffect(() => {
    if(password == repassword && password!?.length >= 8){
        // console.log("first")
        setisDisabled(false)
    }
  }, [repassword])
  

  return (
      <div className="flex m-auto w-full flex-col h-screen justify-center">
    <ToastContainer />
        <div className="fixed w-full top-0">
        <div className="flex justify-between w-11/12 m-auto mt-8">
    <h1 onClick={() => {router.push("/")}} style={{fontFamily : 'YourFontMedium'}} className={`mx-5 hover:cursor-pointer transition-all duration-300 capitalize font-bold text-[1.4rem] tracking-[0.5px] max-sm:mx-0 max-sm:text-xl `} >make engineering <span className='block-inline text-[#ffaa2b] '> easy</span></h1>
    <ChangeTheme/>
        </div>
        </div>
          <p className="w-3/12 max-md:w-10/12 mx-auto mt-[130px] mb-[-40px] px-1 text-3xl font-[600] tracking-[0.4px] max-sm:text-center">Account Recovery</p>
          <div className="m-auto flex flex-col w-3/12 max-md:w-10/12">
          <p className="px-1 flex dark:text-[#c0bfbf] text-[#333] mb-2">Enter the new password:</p>
        <input
          type="password"
          placeholder="********"
          value={password!}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          className={` p-3 mb-2 rounded dark:bg-[#1e1c1a] border `}
        />
        <p className="text-xs py-1 flex justify-end dark:text-[#ffaa2bd9] text-[#fcad36] z-[200] mb-4">make sure your password is longer than 8 charecters</p>
        <p className="px-1 flex dark:text-[#c0bfbf] text-[#333] mb-2">Re-enter the password:</p>
        <input
          type="text"
          placeholder="password"
          value={repassword!}
          onChange={(e) => {
            setrepassword(e.target.value);
          }}
          className={` p-3 mb-2 rounded dark:bg-[#1e1c1a] border `}
        />
        <button
          onClick={() => {
            recovery(), setloading(true);
            setisDisabled(true);
          }}
          disabled={isDisabled}
          className={`${isDisabled ? "cursor-not-allowed opacity-80 text-[#ffffff] bg-[#263238] dark:text-[#ffffff] dark:bg-[#263238]" : "text-[#ffffff] bg-[#263238] dark:bg-[#ffffff] dark:text-[#263238]"} p-2 my-2 rounded text-[600] transition-all duration-500`}
        > {loading ? "Processing..." : "reset password"}</button>
        <p className={`${!leave? "hidden" : "text-sm py-1 flex justify-end dark:text-green-400 text-green-500 z-[200] mt-10 text-center"}`}>Your password has been successfully updated. You may now safely leave the page.</p>
      </div>
    </div>
  );
};

export default Forget;
