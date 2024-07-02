'use client'
import React, { useState } from "react";
import Navbar from "@/components/navbar";
import { useGlobalState } from "@/components/GlobalVariableProvider";
import { account, ID } from "@/components/appwrite";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import Loading from "@/app/Course/Loading";

const Profile = () => {
  const { globalState, setGlobalState } = useGlobalState();
  const logout = async () => {
    await account.deleteSession("current");
    setGlobalState(null);
  };
  
  const [loading, setloading] = useState(false)
setTimeout(() => {
    setloading(true)
  }, 2000);

  console.log(globalState);

  return (
    <>
    {!loading ? 
    <Loading/> 
    :
      <> 
      <Navbar />
      <Sidebar />
      <div className="flex pt-[120px] w-10/12 m-auto px-10 flex-col">
        <div className="flex justify-end w-full">
          {/* <p className="dark:text-gray-300 text-gray-700 text-xl my-2 underline underline-offset-4">
            Logged in as {globalState.name}
          </p> */}
          <button
            type="button"
            onClick={logout}
            className="dark:text-gray-300 text-gray-700 text-xl my-2 border py-2 px-4 rounded items-center flex dark:bg-slate-900 bg-slate-300"
          >
            Logout
          </button>
        </div>
        <div className="flex flex-col px-2 py-10">
          <div className="flex">
            <Image
              src={"/image 10.png"}
              height={100}
              width={1000}
              alt=""
              className="rounded-full h-40 w-40"
            />
            <div className="flex flex-col my-auto mx-10">
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
        <div className="flex w-1/2 justify-between my-7">
        <div className="flex">
          <h1 className="dark:text-gray-300 text-gray-700 text-xl my-2">
            Course :
          </h1>
          <select className="p-2 w-[100px] rounded text-center mx-2">
            <option value="someOption">CSE</option>
            <option value="otherOption">IT</option>
            <option value="otherOption">ECE</option>
          </select>
          </div>
          <div className="flex">
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
      }
    </>
  );
};

export default Profile;
