"use client";
import Navbar from "@/components/navbar";
import React, { useEffect, useState } from "react";
import { allCourses } from "@/app/API/HandleApi";
import Loading from "@/app/Course/Loading";
import Link from "next/link";
import "@/app/Course/styles.css";

interface Course {
  id: number;
  subject: string;
  Course: string;
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

const page = ({ params }: any) => {
  const subjectName = params.subject.replace(/%20/g, " ").replace(/%2C/g, ",");
  const [AllCourses, setAllCourses] = useState<Course[]>([]);

  useEffect(() => {
    const ss = async () => {
      await allCourses(setAllCourses);
    };
    ss();
  }, []);

  const filteredData = AllCourses?.filter(
    (item) => item?.subject === subjectName
  );

  // console.log(filteredData[0]?.pyq.minor)
  // console.log(filteredData[0]?.pyq.major)
  return (
    <>
      <Navbar params="Courses" />
      {Object.keys(AllCourses).length === 0 ? (
        <Loading />
      ) : (
        <>
          <div className="flex flex-col bg-gradient-to-b from-indigo-500 h-[30vh] max-[800px]:h-[38vh]">
            <h1 className="m-auto pt-[15vh] text-4xl font-bold mb-10 max-[800px]:pt-[20vh] text-center max-[800px]:w-11/12 capitalize">
              {filteredData[0]?.subject.toLocaleLowerCase()}
            </h1>
            <div className="flex w-7/12 flex-col m-auto max-[800px]:w-11/12 max-[800px]:text-center">
              <h1>
                <span className="font-bold uppercase">Subject id :</span>{" "}
                {filteredData[0]?.id}{" "}
                <i className="text-gray-700 text-xs"> (may change with time)</i>
              </h1>
              <h1 className="font-bold uppercase mt-5 ">Books</h1>

              {filteredData[0]?.book.length === 0 || filteredData[0]?.book.includes("") ? (
                <div className="flex w-40 h-40 max-[800px]:mx-auto">
                  <h1 className="my-auto mx-auto h-fit w-fit flex text-sm italic">
                    comming soon...
                  </h1>
                </div>
              ) : (
                <div className="flex  flex-col mx-2 mt-3 overflow-x-scroll max-[800px]:mx-auto">
                  {filteredData[0]?.book.map(
                          (item: any, index: any) => (
                            <>
                              <Link target="_blank" href={item}>
                                <div className="flex mx-1 bg-gray-400 w-40 h-40 rounded-md">
                      {/* <Image className="mx-auto" src={"book"} height={10} width={100} alt="book"></Image> */}
                      </div>
                              </Link>
                            </>
                          )
                        )}
                </div>
              )}

              <h1 className="font-bold uppercase mt-5 ">Playlist</h1>
              <div className="flex flex-col mx-2">
                <h1 className="font-semibold my-1 mt-3">Recomended :</h1>

                {filteredData[0]?.playlist.recomended.length <= 1 ? (
                  <div className="flex w-40 h-40 max-[800px]:mx-auto">
                    <h1 className="my-auto mx-auto h-fit w-fit flex text-sm italic">
                      comming soon...
                    </h1>
                  </div>
                ) : (
                  <div className="flex flex-col overflow-x-scroll max-[800px]:mx-auto">
                    <Link
                      className="w-fit"
                      target="_blank"
                      href={`${filteredData[0]?.playlist.recomended}`}
                    >
                      <div className="flex bg-gray-400 w-80 h-40 p-10 rounded-md">
                        {/* <Image className="mx-auto" src={"video"} height="10" width={70} alt="video"></Image> */}
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              <div className="flex flex-col mx-2">
                <h1 className="font-semibold my-1 mt-3">Others :</h1>
                <div className="flex overflow-x-scroll scroll pb-5">
                  {filteredData[0]?.playlist.other.length === 0 || filteredData[0]?.playlist.other.includes("") ? (
                    <div className="flex w-40 h-40 max-[800px]:mx-auto">
                      <h1 className="my-auto mx-auto h-fit w-fit flex text-sm italic">
                        comming soon...
                      </h1>
                    </div>
                  ) : (
                    <div className="flex flex-col overflow-x-scroll max-[800px]:mx-auto">
                      {filteredData[0]?.playlist.other.map(
                          (item: any, index: any) => (
                            <>
                              <Link target="_blank" href={item}>
                                <div className="flex mx-1 bg-gray-400 w-40 h-40 rounded-md">
                      {/* <Image className="mx-auto" src={"book"} height={10} width={100} alt="book"></Image> */}
                      </div>
                              </Link>
                            </>
                          )
                        )}
                    </div>
                  )}
                </div>
              </div>
              <h1 className="font-bold uppercase mt-5">
                PYQs <i className="text-xs ">(previous year question Papers)</i>
              </h1>

              <div className="flex flex-col max-[800px]:mx-auto">
                <div className="flex flex-col mx-2">
                  <h1 className="font-semibold my-1 mt-3">Mid-sem :</h1>
                  <div className="flex overflow-x-scroll scroll pb-5">
                    {filteredData[0]?.pyq.minor.length === 0 || filteredData[0]?.pyq.minor.includes("") ? (
                      <div className="flex w-40 h-40 max-[800px]:mx-auto">
                        <h1 className="my-auto mx-auto h-fit w-fit flex text-sm italic">
                          comming soon...
                        </h1>
                      </div>
                    ) : (
                      <div className="flex overflow-x-scroll max-[800px]:mx-auto">
                        {filteredData[0]?.pyq.minor.map(
                          (item: any, index: any) => (
                            <>
                              <Link target="_blank" href={item}>
                                {/* <Link target="_blank" href={`${filteredData[0]?.pyq.minor}`}> */}
                                <div className="flex mx-1 bg-gray-400 w-40 h-40 rounded-md"></div>
                              </Link>
                            </>
                          )
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col mx-2 max-[800px]:mx-auto">
                  <h1 className="font-semibold my-1 mt-3">End-sem :</h1>
                  <div className="flex overflow-x-scroll scroll pb-5">
                    {filteredData[0]?.pyq.major.length === 0 || filteredData[0]?.pyq.major.includes("") ? (
                      <div className="flex w-40 h-40 max-[800px]:mx-auto">
                        <h1 className="my-auto mx-auto h-fit w-fit flex text-sm italic">
                          comming soon...
                        </h1>
                      </div>
                    ) : (
                      <div className="flex flex-col overflow-x-scroll max-[800px]:mx-auto">
                        {filteredData[0]?.pyq.major.map(
                          (item: any, index: any) => (
                            <>
                              <Link target="_blank" href={item}>
                                {/* <Link target="_blank" href={`${filteredData[0]?.pyq.minor}`}> */}
                                <div className="flex mx-1 bg-gray-400 w-40 h-40 rounded-md"></div>
                              </Link>
                            </>
                          )
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default page;
