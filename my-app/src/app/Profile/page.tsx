"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import { useGlobalState } from "@/components/GlobalVariableProvider";
import { account, ID } from "@/components/appwrite";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import Loading from "@/app/Course/Loading";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from 'universal-cookie';

const Profile = () => {
  const router = useRouter();
  const { globalState, setGlobalState } = useGlobalState();
  const [loading, setloading] = useState(true);
  const cookies = new Cookies();

  const logout = async () => {
    setGlobalState(null);
    cookies.remove("myCat");
    router.push("/");
  };

  // const verify = () => {
  //   try {
  //     // const response = account.createVerification(
  //     //   "http://localhost:3000/verify"
  //     // );
  //     const response = account.createVerification('https://make-engineering-easy.vercel.app/Verify');
  //     toast.info(`Check your email for verification link`, {
  //       theme: "colored",
  //       position: "top-center",
  //     });
  //     // console.log(response);
  //   } catch (error: any) {
  //     // console.log(error);
  //   }
  // };

  useEffect(() => {
    if (globalState) {
      setloading(false);
      if (!globalState.emailVerification) {
        toast.info(`Please verify yourself to use courses feature!`, {
          theme: "colored",
          position: "top-center",
        });
      }
    }
  }, [globalState]);

  return (
    <>
      <ToastContainer />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar params="LogIn" />
          <div className="max-sm:hidden">
            <Sidebar />
          </div>
          <div
            style={{ fontFamily: "YourFont" }}
            className="flex pt-[120px] w-10/12 m-auto px-10 flex-col max-sm:w-full max-sm:px-4"
          >
            <div className="flex justify-end w-full ">
              {/* <p className="dark:text-gray-300 text-gray-700 text-xl my-2 underline underline-offset-4">
            Logged in as {globalState.name}
          </p> */}
              <button
                type="button"
                onClick={logout}
                className="dark:text-gray-300 text-gray-900 text-xl my-2 border py-2 px-4 rounded items-center flex dark:bg-red-900 bg-red-300 max-sm:text-xs"
              >
                Logout
              </button>

              {!globalState.emailVerification ? (
                <div className="relative">
                <div className="absolute top-0 left-0 text-xl border rounded animate-ping py-2 px-4 my-2 mx-3 max-sm:text-xs bg-slate-900 dark:bg-slate-300">verify</div>
                <button
                  type="button"
                  // onClick={verify}
                  className="relative z-10  dark:text-gray-300 text-gray-900 text-xl my-2 border py-2 px-4 rounded items-center flex dark:bg-slate-900 bg-slate-300 max-sm:text-xs mx-3"
                >
                  verify
                </button>
              </div>
              ) : (
                <button
                  type="button"
                  className="dark:text-gray-300 text-gray-900 text-xl my-2 border py-2 px-4 rounded items-center flex dark:bg-green-700 bg-green-300 max-sm:text-xs ml-3"
                >
                  verified!
                </button>
              )}
            </div>
            <div className="flex flex-col px-2 py-10 max-sm:px-0">
              <div className="flex max-sm:flex-col">
                <Image
                  src={"/image 10.png"}
                  height={100}
                  width={1000}
                  alt=""
                  className="rounded-full h-40 w-40 max-sm:m-auto"
                />
                <div className="flex flex-col my-auto mx-10 max-sm:mx-0">
                  <h1 className="dark:text-gray-300 text-gray-700 text-xl my-2">
                    Name : {globalState.name}
                  </h1>
                  <h1 className="dark:text-gray-300 text-gray-700 text-xl my-2">
                    Username : {globalState.name}
                  </h1>
                  <h1 className="dark:text-gray-300 text-gray-700 text-xl my-2">
                    Email : {globalState.email}
                  </h1>
                </div>
              </div>
              <p className="dark:text-gray-300 text-gray-700 text-lg italic my-10 border rounded p-2">
                bio : {globalState.$id}
              </p>
            </div>
            <h1 className="text-3xl font-[500] my-5 ">Academic Information</h1>
            <h1 className="dark:text-gray-300 text-gray-700 text-xl my-2">
              University name
            </h1>
            <div className="flex w-1/2 justify-between my-7 max-sm:w-full max-sm:justify-around">
              <div className="flex max-sm:flex-col">
                <h1 className="dark:text-gray-300 text-gray-700 text-xl my-2">
                  Course :
                </h1>
                <select className="p-2 w-[100px] rounded text-center mx-2">
                  <option value="someOption">CSE</option>
                  <option value="otherOption">IT</option>
                  <option value="otherOption">ECE</option>
                </select>
              </div>
              <div className="flex max-sm:flex-col">
                <h1 className="dark:text-gray-300 text-gray-700 text-xl my-2">
                  Year :
                </h1>
                <select className="p-2 w-[100px] rounded text-center mx-2">
                  <option value="someOption">First</option>
                  <option value="otherOption">Second</option>
                  <option value="otherOption">Third</option>
                  <option value="otherOption">Forth</option>
                </select>
              </div>
            </div>
            <h1 className="dark:text-gray-300 text-gray-700 text-xl my-2">
              subjects
            </h1>
            <div className="h-[10vh]"></div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
