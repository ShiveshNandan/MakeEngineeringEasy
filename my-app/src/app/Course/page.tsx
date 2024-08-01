"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import { CSECourses, ITCourses, ECECourses, AddUser } from "../API/HandleApi";
import Loading from "@/app/Course/Loading";
import "../Course/styles.css";
import { account, ID } from "@/components/appwrite";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGlobalState } from "@/components/GlobalVariableProvider";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/footer";

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
      await account.get().then((u) => {
        if(u){
          setGlobalState(u) 
          id = (u.$id)
          email = (u.email)
          username = (u.name)
          AddUser(id,email,username);
        } else {
        }
      }).catch((e) => {
        if(e.message.includes("Failed to fetch")){
          toast.error("something went wrong. Please check your internet connection",{theme:"colored", position: "top-center",autoClose: 2000})
        }else if(e.message.includes("User (role: guests)")){
          toast.error("Login to access this feature",{theme:"colored", position: "top-center",autoClose: 2000})
          setTimeout(() => {
            router.push("/Login")
          }, 3000);
        }else{
          toast.error("We are facing some issue. Sorry for the inconvenience.",{theme:"colored", position: "top-center",autoClose: 2000})
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
      {globalState === null ? (
        <Loading />
      ) : (
        <>
        <div className="bg-[url('../../public/Background.png')] dark:bg-[url('../public/Background_dark.png')] drop pb-[2rem]">
            
            <div className="h-screen my-auto flex flex-col w-8/12 max-[800px]:w-10/12 m-auto justify-center max-sm:pt-[6rem]">
              <h1 className="text-2xl m-2">Select Your Course :</h1>
              <div className="flex justify-center max-sm:flex-wrap max-sm:pt-[2rem]">
              <div onClick={() => router.push("Course/CSE")} className="flex bg-blue-300 m-3 w-3/12 h-[10rem] rounded-2xl text-center justify-center flex-col cursor-pointer text-4xl text-gray-700 max-sm:w-8/12 max-sm:h-[7rem]">
                CSE
              </div>
              <div onClick={() => router.push("Course/IT")} className="flex bg-green-300 m-3 w-3/12 h-[10rem] rounded-2xl text-center justify-center flex-col cursor-pointer text-4xl text-gray-700 max-sm:w-8/12 max-sm:h-[7rem]">
                IT
              </div>
              <div onClick={() => router.push("Course/ECE")} className="flex bg-yellow-300 m-3 w-3/12 h-[10rem] rounded-2xl text-center justify-center flex-col cursor-pointer text-4xl text-gray-700 max-sm:w-8/12 max-sm:h-[7rem]">
                ECE
              </div>
              </div>
            </div>
        </div>
        <Footer/>
        </>
      )}
    </>
  );
};

export default Page;
