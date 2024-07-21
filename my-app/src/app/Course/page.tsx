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
  // const [email, setemail] = useState("");
  // const [id, setid] = useState("");
  // const [Name, setName] = useState("");
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
          // ECEfunc();
          ECECourses(setECECourses,id);
          CSECourses(setCSECourses,id);
          ITCourses(setITCourses,id);
          // CSEfunc();
        } else {
        }
      }).catch((e) => {
        // console.log("error",e);
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

  
  // console.log("info : ", globalState)  
  // setid(globalState); 
  // setName(globalState); 
  // setemail(globalState);  

  // const [AllCourses, setAllCourses] = useState<Course[]>([]);
  const [CSECourse, setCSECourses] = useState<Course[]>([]);
  const [ECECourse, setECECourses] = useState<Course[]>([]);
  const [ITCourse, setITCourses] = useState<Course[]>([]);

  // const func = async () => {
  //   try {
  //     if (globalState) {
  //       const response = allCourses(setAllCourses);
  //     }
  //   } catch (error) {
  //     console.error("error Occured : ", error);
  //   }
  // };
  const CSEfunc = async () => {
    try {
      if (globalState) {
        const response = CSECourses(setCSECourses,id);
      }
    } catch (error) {
      console.error("error Occured : ", error);
    }
  };

  const ITfunc = async () => {
    try {
      if (globalState) {
        const response = ITCourses(setITCourses,id);
      }
    } catch (error) {
      console.error("error Occured : ", error);
    }
  };
  const ECEfunc = async () => {
    try {
      if (globalState) {
        const response = ECECourses(setECECourses,id);
      }
    } catch (error) {
      console.error("error Occured : ", error);
    }
  };


  useEffect(() => {
    // ECEfunc();
    // ITfunc();
    // CSEfunc();
  }, [globalState]);

  // const CSEData = AllCourses?.filter((item) =>
  //   ["All", "all", "cse", "cseit"].includes(item?.course)
  // );
  // const ITData = AllCourses?.filter((item) =>
  //   ["All", "all", "it", "cseit"].includes(item?.course)
  // );
  // const ECEData = AllCourses?.filter((item) =>
  //   ["All", "all", "ece"].includes(item?.course)
  // );

  return (
    <>
      <ToastContainer />
      <Navbar params="Course" />
      {Object.keys(CSECourse).length === 0 ? (
        <Loading />
      ) : (
        <>
        <div className="bg-[url('../../public/Background.png')] dark:bg-[url('../public/Background_dark.png')]">
          <div className="relative top-[8rem]">
            <h1 className="text-4xl font-semibold dark:text-[#efefef] text-gray-700 mx-auto w-8/12 max-[800px]:text-3xl max-[800px]:w-11/12">
              CSE{" "}
              <span className="text-xs">(Computer Science Engineering)</span>
            </h1>

            <div className="scroll flex w-8/12 my-5 mx-auto overflow-x-auto max-[800px]:w-11/12">
              <div className="flex">
                {CSECourse?.map((items: any, index) => (
                  // {AllCourses?.map((items: any, index) => (

                  <div
                    key={index}
                    className="flex flex-col w-[20rem] mx-2 rounded-lg shadow-md my-3 bg-blue-300 max-[800px]:w-[15rem]"
                  >
                    <Link href={`/Course/${items.subject}`}>
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

          <div className="flex flex-col pt-40 mt-10">
            <h1 className="text-4xl font-semibold text-gray-700 dark:text-[#efefef] mx-auto w-8/12 max-[800px]:text-3xl max-[800px]:w-11/12">
              IT <span className="text-xs">(Information Technology)</span>
            </h1>

            <div className="scroll flex w-8/12 my-5 mx-auto overflow-x-auto max-[800px]:w-11/12">
              <div className="flex">
                {ITCourse?.map((items: any, index) => (
                  // {AllCourses?.map((items: any, index) => (
                  <div
                    key={index}
                    className="flex flex-col w-[20rem] mx-2 rounded-lg shadow-md my-3 bg-green-300 max-[800px]:w-[15rem]"
                  >
                    <Link href={`/Course/${items.subject}`}>
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

          <div className="flex flex-col py-[3.5rem]">
            <h1 className="text-4xl font-semibold text-gray-700 dark:text-[#efefef] mx-auto w-8/12 max-[800px]:text-3xl max-[800px]:w-11/12">
              ECE{" "}
              <span className="text-xs">
                (Electronics and Communication Engineering)
              </span>
            </h1>

            <div className="scroll flex w-8/12 my-5 mx-auto overflow-x-auto max-[800px]:w-11/12">
              <div className="flex">
                {ECECourse?.map((items: any, index) => (
                  // {AllCourses?.map((items: any, index) => (
                  <div
                    key={index}
                    className="flex flex-col w-[20rem] mx-2 rounded-lg shadow-md my-3 bg-yellow-300 max-[800px]:w-[15rem]"
                  >
                    <Link href={`/Course/${items.subject}`}>
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
        </>
      )}
    </>
  );
};

export default Page;
