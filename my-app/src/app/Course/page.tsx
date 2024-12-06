"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import { CSECourses, ITCourses, ECECourses, AddUser, verify } from "../API/HandleApi";
import Loading from "@/app/Course/Loading";
import "../Course/styles.css";
import { account, ID } from "@/components/appwrite";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGlobalState } from "@/components/GlobalVariableProvider";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/footer";
import Image from "next/image";

interface Course {
  id: number;
  subject: string;
  course: string;
  notes: any;
  playlist: {
    recomended: any;
    other: any;
  };
  pyq: {
    major: any;
    minor: any;
  };
  book: any;
}

const Page = () => {
  const { globalState, setGlobalState } = useGlobalState();
  let username = "";
  let email = "";
  let id = "";
  const router = useRouter()

  useEffect(() => {
    async function getUser() {
      await verify().then((u) => {
        // console.log("u : " , u)
        if (!u.emailVerification) {
          toast.error("Please verify yourself first",{theme:"colored", position: "top-center",autoClose: 2000})
          setTimeout(() => {
            router.push("/Login")
          }, 3000);
        }
        if(u && u.emailVerification){
          setGlobalState(u) 
          id = (u.$id)
          email = (u.email)
          username = (u.name)
          AddUser(id,email,username);
        } else {
        }
      }).catch((e) => {
        let err = e.response.data.error;
        console.log(err)
        if(err.includes("Failed to fetch")){
          toast.error("something went wrong. Please check your internet connection",{theme:"colored", position: "top-center",autoClose: 2000})
        }else if(err.includes("Access denied")){
          toast.error("Login to access this feature",{theme:"colored", position: "top-center",autoClose: 2000})
          setTimeout(() => {
            router.push("/Login")
          }, 3000);
        }else{
          toast.error("We are facing some issue. Sorry for the inconvenience.",{theme:"colored", position: "top-center",autoClose: 2000})
          console.log(e)
          setTimeout(() => {
            router.push("/Login")
          }, 3000);
        }
      })
    }
    getUser();
  }, []);



  return (
    <>
      <ToastContainer />
      <Navbar params = "Courses" />
      <div className="max-sm:hidden">
        <Sidebar/>
      </div>
      {globalState === null || !globalState.emailVerification? (
        <Loading />
      ) : (
        <>
        <div className="bg-[url('../../public/Background.png')] dark:bg-[url('../public/Background_dark.png')] drop pb-[2rem]">
            
        <Image
        src={'/Plane 1.png'}
        height={1}
        width={100000}
        alt=""
        className="w-[20vw] absolute mt-[15vh] dark:invert max-lg:w-[30vw] max-sm:w-[40vw] max-sm:mt-[12vh]"
      />
            <div className="h-screen my-auto flex flex-col w-8/12 max-[800px]:w-10/12 m-auto justify-center max-sm:pt-[6rem]">
              <h1 className="text-2xl m-2 my-7">Select Your Course :</h1>
              <div className="flex justify-center max-sm:flex-wrap max-sm:pt-[2rem]">
              <div onClick={() => router.push("Course/CSE")} className="m-3 p-1 rounded-2xl bg-blue-300 w-3/12 h-[10rem] max-sm:w-8/12 max-sm:h-[7rem]">
                <div className="flex border-2 border-dotted bg-blue-300 rounded-2xl text-center justify-center flex-col cursor-pointer text-4xl text-gray-700 h-full">
                CSE
                <p className="text-sm pt-2">(Computer Science Engineering)</p>
                </div>
              </div>
              <div onClick={() => router.push("Course/IT")} className="m-3 p-1 rounded-2xl bg-green-300 w-3/12 h-[10rem] max-sm:w-8/12 max-sm:h-[7rem]">
                <div className="flex border-2 border-dotted bg-green-300 rounded-2xl text-center justify-center flex-col cursor-pointer text-4xl text-gray-700 h-full">
                IT
                <p className="text-sm pt-2">(Information Technology)</p>
                </div>
              </div>
              <div onClick={() => router.push("Course/ECE")} className="m-3 p-1 rounded-2xl bg-yellow-300 w-3/12 h-[10rem] max-sm:w-8/12 max-sm:h-[7rem] z-[100]">
                <div className="flex border-2 border-dotted bg-yellow-300 rounded-2xl text-center justify-center flex-col cursor-pointer text-4xl text-gray-700 h-full">
                ECE
                <p className="text-sm pt-2">(Electronics and Communication Engineering)</p>
                </div>
              </div>
              
              {/* <div  className="flex bg-green-300 m-3 w-3/12 h-[10rem] rounded-2xl text-center justify-center flex-col cursor-pointer text-4xl text-gray-700 max-sm:w-8/12 max-sm:h-[7rem]">
                IT
              </div>
              <div onClick={() => router.push("Course/ECE")} className="flex bg-yellow-300 m-3 w-3/12 h-[10rem] rounded-2xl text-center justify-center flex-col cursor-pointer text-4xl text-gray-700 max-sm:w-8/12 max-sm:h-[7rem]">
                ECE
              </div> */}
              </div>
            </div>
        <Image
        src={'/Plane 2.png'}
        height={1}
        width={100000}
        alt=""
        className="w-[20vw] absolute right-0 mt-[-27vh] dark:invert max-lg:w-[30vw] max-sm:w-[40vw] max-sm:mt-[-13vh]"
      />
        </div>
        <Footer/>
        </>
      )}
    </>
  );
};

export default Page;
