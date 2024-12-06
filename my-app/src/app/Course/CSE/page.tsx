"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { CSECourses, verify} from "../../API/HandleApi";
import Loading from "@/app/Course/Loading";
import { account} from "@/components/appwrite";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGlobalState } from "@/components/GlobalVariableProvider";
import Sidebar from "@/components/Sidebar";
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';


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
    
  const [CSECourse, setCSECourses] = useState<Course[]>([]);
  const { globalState, setGlobalState } = useGlobalState();
  const [loading, setloading] = useState(true)
  const router = useRouter()
  


  async function getUser() {
        await verify().then((u) => {
          if (!u.emailVerification) {
            toast.error("Please verify yourself first",{theme:"colored", position: "top-center",autoClose: 2000})
            setTimeout(() => {
              router.push("/Login")
            }, 3000);
          }
          if(u && u.emailVerification){
            setGlobalState(u) 
            let id = (u.$id)
          CSECourses(setCSECourses,id);
          setloading(false)
          }
        })
        .catch((e) => {
          let err = e.response.data.error;
          if(err.includes("Failed to fetch")){
            toast.error("something went wrong. Please check your internet connection",{theme:"colored", position: "top-center",autoClose: 2000})
          }else if(err.includes("Access denied")){
            toast.error("Login to access this feature",{theme:"colored", position: "top-center",autoClose: 2000})
            setTimeout(() => {
              router.push("/Login")
            }, 3000);
          }else{
            toast.error("We are facing some issue. Sorry for the inconvenience.",{theme:"colored", position: "top-center",autoClose: 2000})
          }
          console.log(e)
        })
  }
  
  async function CSE () {
      await CSECourses(setCSECourses,globalState.$id)
     setloading(false)
  }

useEffect(() => {  
    if(globalState === null){
    getUser();
    }else{ 
     CSE();
    }
}, []);



// console.log(globalState)

  return (
    <>
    <ToastContainer/>
    <Navbar params = "Courses" />
      <div className="max-sm:hidden">
        <Sidebar/>
      </div>
      {/* {Object.keys(CSECourse).length === 0 ? ( */}
    {loading || !globalState.emailVerification? (
        <Loading />
      ) : (
        <div className="bg-[url('../../public/Background.png')] dark:bg-[url('../public/Background_dark.png')] drop pb-[2rem]">
          <div className="relative pt-[8rem]">
            <h1 className="text-4xl font-semibold dark:text-[#efefef] text-gray-700 mx-auto w-8/12 max-[800px]:text-3xl max-[800px]:w-11/12">
              CSE{" "}
              <span className="text-xs">(Computer Science Engineering)</span>
            </h1>

            <div className="flex w-10/12 my-5 mx-auto max-[800px]:w-11/12">
              <div className="flex flex-wrap justify-center">
                {Array.isArray(CSECourse) && CSECourse?.map((items: any, index) => (
                  // {AllCourses?.map((items: any, index) => (

                  <div
                    key={index}
                    className="flex flex-col w-[20rem] rounded-lg shadow-md my-3 mx-2 bg-blue-300 max-[800px]:w-[15rem]"
                  >
                    <Link href={`/Course/CSE/${items.subject}`}>
                      <h1 className="text-4xl text-gray-700 p-3 min-h-[15rem]  border-b-2 w-full max-[800px]:text-2xl max-[800px]:min-h-[10rem] capitalize">
                        {items.subject.toLowerCase()}
                      </h1>
                      <div className="flex text-gray-600 py-2 px-3 justify-between bg-gray-50 rounded-b-lg">
                        <div className="flex flex-col">
                          <p className="text-xs font-bold uppercase">
                            subject code
                          </p>
                          <h1 className="text-2xl font-bold text-black">
                            {items.id}
                          </h1>
                        </div>
                        <div className="flex my-auto">
                          <h1 className="text-sm pr-2">View More</h1>
                          {/* <ArrowRightIcon className="flex h-4 w-4 my-auto ml-1" /> */}
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>
          )}
          <Footer/>

    </>
  )
}

export default Page