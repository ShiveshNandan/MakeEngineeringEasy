"use client";
import { useEffect, useState } from "react";
import { account, ID } from "@/components/appwrite";
import { useRouter } from "next/navigation";
import ChangeTheme from "@/components/changeTheme";
import Image from "next/image";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGlobalState } from '@/components/GlobalVariableProvider';

const LoginPage = () => {
  const { globalState, setGlobalState } = useGlobalState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [Signup, setSignup] = useState(false)
  // const [errors, errors = ] = useState("")
  let errors : string | null = null;
  const router = useRouter();


  // const notify = () => toast("Wow so easy !");


  useEffect(() => {
    async function getUser() {
      setGlobalState(await account.get());
      console.log("loggedin user :", useGlobalState);
    }
    getUser();
  }, []);

  const login = async (email: any, password: any) => {
    try {
      const session = await account.createEmailPasswordSession(email, password);
      setGlobalState(await account.get());
      console.log("session :", session);
    } catch (error:any) {

      alert(error.message)

      if (error.message.includes("Invalid `email` param")) {
        errors = ("Enter a valid email address");
      } else if (error.message.includes("Invalid `password` param")) {
        errors = ("Password is wrong");
      } else if (error.message.includes("Invalid credentials.")) {
        errors = ("Email and Password is wrong");
      }else{
        errors = ("Enter Credentials");
      }
      toast.error(`${errors}`,{theme: "dark"})
    }
  };

  const register = async () => {
    try {
      await account.create(ID.unique(), email, password, name);
      login(email, password);
    } catch (error:any) {
      // console.log("error register: ", error);
      alert(error.message)
      if (error.message.includes("Invalid `email` param")) {
        errors = ("Enter a valid email address");
      } else if (error.message.includes("Invalid `password` param")) {
        errors = ("Enter a Password");
      }else if (error.message.includes("Invalid `name` param")) {
        errors = ("Enter Username");
      }else if (error.message.includes("A user with the same id, email, or phone already exists in this project.")) {
        errors = ("Email Already used");
      }else{
        errors = ("Unexpected Error Occured. Please try after Sometime" !);
      }
      toast.error(`${errors}`,{theme: "dark"})
    }
  };

  const handleSignup = () => {
    {Signup ? setSignup(false) : setSignup(true)}
  } 

  const logout = async () => {
    await account.deleteSession("current");
    setGlobalState(null);
  };

  if (globalState) {
    const handlePush = () => {
    if (globalState) {
    router.push("/Login")
    }
    handlePush()
    }
    return (
      <div>
        <p onClick={() => {router.push("/")}}>Logged in as {(globalState.name)}</p>
        <button type="button" onClick={logout}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <>
      <ToastContainer />

      <div style={{fontFamily : 'YourFont'}} className="flex">


        <div className="flex justify-between px-7 py-14 fixed w-full">
          <h1
            onClick={() => {
              router.push("/");
            }}
            style={{ fontFamily: "YourFontMedium" }}
            className={`mx-5 hover:cursor-pointer transition-all duration-300 capitalize font-bold text-[1.4rem] tracking-[0.5px]`}
          >
            make engineering{" "}
            <span className="block-inline text-[#ffaa2b] "> easy</span>
          </h1>
          <ChangeTheme />
        </div>

        <div className="flex h-screen w-full ">
          <div className="flex w-5/12 pt-10 bg-[#242424]">
            <Image src={"/cuate.png"} height={100} width={1000} alt="" className="w-8/12 m-auto" />
          </div>

          <div className="flex flex-col w-7/12 justify-center items-center ">




              {Signup ? 
            <div className="flex flex-col w-7/12 mx-auto ">
              <div className="flex flex-col">
              <h1 style={{fontFamily : 'YourFontMedium'}} className=" text-3xl font-[600] tracking-[0.4px] ">Create an account</h1>
              {/* <h1 className="text-sm pt-2 font-[100] text-[#a5a5a5] tracking-[0.5px] pb-1 ">Enter your email below to create your account</h1> */}
            </div> 
              <form className="flex flex-col mt-10">
              <h1 className="text-sm pt-2 font-[100] text-[#a5a5a5] tracking-[0.5px] pb-1 ">Username </h1>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="p-3 mb-2 outline-none rounded bg-[#1e1c1a] border"
                />
                <h1 className="text-sm pt-2 font-[100] text-[#a5a5a5] tracking-[0.5px] pb-1 ">Email Address </h1>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 mb-2 outline-none rounded bg-[#1e1c1a] border"
                />
                <h1 className="text-sm pt-2 font-[100] text-[#a5a5a5] tracking-[0.5px] pb-1 ">Create Password </h1>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 mb-2 outline-none rounded bg-[#1e1c1a] border"
                />
                <button
                  type="button"
                  onClick={register}
                  className="p-2 my-2 rounded text-black bg-[#ffffff] text-[600] "
                >
                  Create Account
                </button>
              </form>
              <h1 onClick={() => handleSignup()} className="text-xs py-1 flex justify-end underline underline-offset-4 text-[#a5a5a5]  cursor-pointer">Already have an account?</h1>
              {/* <button >Notify !</button> */}
              </div>


              : 



              <div className="flex flex-col w-7/12 mx-auto my-0 ">
                <div className="flex flex-col">
              <h1 style={{fontFamily : 'YourFontMedium'}} className=" text-3xl font-[600] tracking-[0.4px] ">Login</h1>
              {/* <h1 className="text-sm pt-2 font-[100] text-[#a5a5a5] tracking-[0.5px] pb-1 ">Enter your email below to create your account</h1> */}
            </div> 
              <form className="flex flex-col mt-10">
              <h1 className="text-sm pt-2 font-[100] text-[#a5a5a5] tracking-[0.5px] pb-1 ">Email Address </h1>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 mb-2 outline-none rounded bg-[#1e1c1a] border"
              />
              <h1 className="text-sm pt-2 font-[100] text-[#a5a5a5] tracking-[0.5px] pb-1 ">Password </h1>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 mb-2 outline-none rounded bg-[#1e1c1a] border"
              />

              <button
                type="button"
                onClick={() => login(email, password)}
                className="p-2 my-2 rounded text-black bg-[#ffffff] text-[600] "
              >
                Login
              </button>
              
            </form> 
            <h1 onClick={() => handleSignup()} className="text-xs py-1 flex justify-end underline underline-offset-4 text-[#a5a5a5]  cursor-pointer">dont have an account?</h1>
            </div>
             }

<div className="flex flex-col w-7/12 mx-auto ">
              <h1 className="text-center text-[#a5a5a5] p-4">or continue with</h1>
              <div className="flex flex-col">
              <button
                  type="button"
                  // onClick={register}
                  className="p-2 my-2 rounded text-black bg-[#ffffff] text-[600] flex justify-center"
                >
                  <Image src={'/google.png'} height={10} width={1000} alt="" className="h-6 w-6 mx-2"/> Google
                </button>
                <button
                  type="button"
                  // onClick={register}
                  className="p-2 my-2 rounded text-black bg-[#ffffff] text-[600] flex justify-center"
                >
                  <Image src={'/GitHub.png'} height={10} width={1000} alt="" className="h-6 w-6 mx-2"/> Github
                </button> 
              </div>
            </div>
          </div>
        </div>
        </div>
    </>
  );
};

export default LoginPage;

// export default loginPage
