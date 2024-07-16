"use client";
import React, { useEffect } from "react";
import ReviewSection from "./reviewSection";
import Footer from "./footer";
import Image from "next/image";
import { useTheme } from "next-themes";
import Sidebar from "./Sidebar";

const HeroSection = () => {
  // const {theme,} = useTheme()
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    {
      theme === "light" ? setTheme("light") : setTheme("dark");
    }
    // setTheme('dark')
  }, []);

  // console.log("first")

  return (
    <>
      <div
        style={{ fontFamily: "YourFontBold" }}
        className='h-[120vh] max-lg:h-[90vh] max-sm:h-[100vh] flex flex-col justify-center bg-[url("../../public/Background.png")] dark:bg-[url("../public/Background_dark.png")]'
      >
        <Image
          src={"/Plane 1.png"}
          height={1}
          width={100000}
          alt=""
          className="w-[20vw] max-lg:w-[30vw] max-lg:mt-[-50vh] max-sm:w-[40vw] absolute mt-[-55vh] max-sm:mt-[-46vh]  dark:invert "
        />
        <div className="flex flex-col text-center mt-[10vh] max-sm:mt-[12vh]">
          <h1 className="uppercase m-auto text-[4vw] tracking-[0.8px] w-7/12 text-[#333333] max-lg:w-10/12 max-lg:text-[6vw] leading-[5.5vw] max-lg:leading-[7vw] max-sm:w-11/12 max-sm:text-[9vw] max-sm:leading-[10vw] dark:text-[#fffaf5] ">
            unlock the{" "}
            <span className="inline-block">
              {theme === "light" ? (
                <Image
                  src={"/DOOR.png"}
                  height={1}
                  width={100000}
                  alt=""
                  className="w-[12vw] max-lg:w-[17vw] max-sm:w-[26vw] "
                />
              ) : (
                <Image
                  src={"/DOOR_dark.png"}
                  height={1}
                  width={100000}
                  alt=""
                  className="w-[12vw] max-lg:w-[17vw] max-sm:w-[26vw] "
                />
              )}
            </span>{" "}
            to{" "}
            <span className="inline-block">
              <Image
                src={"/sitting.png"}
                width={10000}
                height={1800}
                alt=""
                className=" w-[4.5vw] max-lg:w-[8vw] absolute mt-[-4vw] ml-[-0.7vw] max-lg:ml-[-1.8vw] max-lg:mt-[-8vw] 
          max-sm:hidden "
              />
            </span>{" "}
            effortless{" "}
            <span className="px-[1.5vw] ml-[1vw] border-[#3b82f6] text-[#3b82f6] border-[3px]  max-lg:rounded-xl border-dashed rounded-2xl inline-block max-sm:mt-1">
              learning
            </span>
          </h1>
          <div className="flex m-auto bg-[#333333] w-fit mt-20 p-1 rounded-full dark:bg-[#fff4ec] max-sm:mt-12">
            <h1 className="text-xl flex bg-[#333333] text-[#fff4ec] rounded-full px-6 py-3 capitalize border-dashed border-[#fff4ec] border-2 items-center dark:bg-[#fff4ec] dark:border-[#333333] dark:text-[#333333] max-sm:text-sm max-sm:px-3 max-sm:py-1 max-sm:border-[1.3px]">
              <span className="inline-block">
                <Image
                  src={"/Bulb.png"}
                  height={1}
                  width={100000}
                  alt=""
                  className="w-[30px] max-sm:w-[20px] justify-center mr-2 "
                />
              </span>{" "}
              explore courses
            </h1>
          </div>
        </div>
        <Image
          src={"/Plane 2.png"}
          height={1}
          width={100000}
          alt=""
          className="w-[20vw] max-lg:w-[30vw] absolute right-0 mt-[60vh] dark:invert max-sm:w-[40vw] max-sm:mt-[70vh]"
        />
      </div>
      <div className=" max-sm:hidden ">
        <Sidebar />
      </div>

      {/* ================== features section =================== */}

      <div
        style={{ fontFamily: "YourFont" }}
        className="flex flex-col text-center bg-[#fff3e8] rounded-[70px] justify-center dark:bg-[#242424] max-sm:rounded-[40px]"
      >
        <div
          className={`${
            theme === "dark" ? "drop" : ""
          } flex flex-col w-10/12 border-4 border-b-0 justify-center border-dashed border-[#c1b9b2] rounded-[70px] my-20 mt-40 mx-auto dark:border-[#6f6a65] max-lg:w-11/12 max-sm:rounded-[40px] max-sm:border-[3.5px] max-sm:mt-16`}
        >
          <h1
            style={{ fontFamily: "YourFontbold" }}
            className="uppercase text-4xl my-14 text-[#333333] font-bold dark:text-[#FFFFFF] max-sm:my-8"
          >
            features
          </h1>
          <div className=" flex justify-between max-sm:flex-col">
            <div className="flex relative overflow-hidden w-[32%] ml-[-4px] max-sm:w-[100%] max-sm:ml-0 max-sm:mb-3 max-sm:scale-[1.015]">
              <div className="flex flex-col rounded-2xl bg-[#FAD85D]  text-left overflow-hidden ">
                <Image
                  src={"/Highlights yellow.png"}
                  height={1}
                  width={100000}
                  alt=""
                  className="w-[100%] h-[100%] absolute overflow-hidden "
                />

                <div className="flex flex-col z-10 mt-10 mb-5 max-sm:my-4">
                  <Image
                    src={"/image 5 (1).png"}
                    height={1}
                    width={100000}
                    alt=""
                    className="w-[10vw] max-sm:mx-2 max-sm:w-1/5 "
                  />
                  <div className="flex flex-col px-7 max-sm:px-2">
                    <h1 className="mt-5 text-[2.3vw] text-[#1e1c1a] leading-[1.1] font-[700] tracking-[0.03vw] max-sm:text-lg max-sm:mt-0">
                      Past Year Question Papers
                    </h1>
                    <p className=" text-[#766735] py-5 w-12/12 text-[1.35vw] font-[400] tracking-[0.01vw] max-sm:text-xs max-sm:py-1">
                      {" "}
                      Access a repository of meticulously compiled PYQs spanning
                      various subjects and educational boards, enabling you to
                      familiarize yourself with exam patterns and prepare
                      effectively.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex relative overflow-hidden w-[32%] ml-[-4px] max-sm:w-[100%] max-sm:ml-0 max-sm:mb-3 max-sm:scale-[1.015]">
              <div className="flex flex-col rounded-2xl bg-[#707eff]  text-left overflow-hidden ">
                <Image
                  src={"/Highlights blue.png"}
                  height={1}
                  width={100000}
                  alt=""
                  className="w-[100%] h-[100%] absolute overflow-hidden "
                />

                <div className="flex flex-col z-10 mt-10 mb-5 max-sm:my-4">
                  <Image
                    src={"/image 6 (1).png"}
                    height={1}
                    width={100000}
                    alt=""
                    className="w-[10vw] max-sm:mx-2 max-sm:w-1/5 "
                  />
                  <div className="flex flex-col px-7 max-sm:px-2">
                    <h1
                      style={{ fontFamily: "YourFontThin" }}
                      className="mt-5 text-[2.3vw] leading-[1.1] font-[700] tracking-[0.03vw] max-sm:text-lg max-sm:mt-0"
                    >
                      Comprehensive Study Notes
                    </h1>
                    <p className="text-[#e1efffdc] py-5 w-12/12 text-[1.35vw] font-[200] tracking-[0.02vw] max-sm:text-xs max-sm:py-1">
                      Explore a rich assortment of well-researched study
                      materials created by our team of experienced educators,
                      designed to simplify complex concepts and facilitate a
                      deeper understanding of your course material.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex relative overflow-hidden w-[32%] mr-[-4px] max-sm:w-[100%] max-sm:ml-0 max-sm:mb-[-4px] max-sm:scale-[1.015]">
              <div className="flex flex-col rounded-2xl bg-[#f2a0ff] text-left overflow-hidden">
                <Image
                  src={"/Highlights purple.png"}
                  height={1}
                  width={100000}
                  alt=""
                  className="w-[100%] h-[100%] absolute overflow-hidden "
                />
                <div className="flex flex-col z-10 mt-10 max-sm:my-4">
                  <Image
                    src={"/image 8 (1).png"}
                    height={1}
                    width={100000}
                    alt=""
                    className="w-[10vw] max-sm:mx-2 max-sm:w-1/5 "
                  />

                  <div className="flex flex-col px-7 max-sm:px-2">
                    <h1 className="mt-5 text-[2.3vw] leading-[1.1] w-10/12 font-[700] tracking-[0.05vw] text-[#1E1C1A] max-sm:text-lg max-sm:mt-0">
                      Curated Lecture Links
                    </h1>
                    <p className="text-[#735176] py-5 w-12/12 text-[1.35vw] font-[400] max-sm:text-xs max-sm:py-1">
                      {" "}
                      Seamlessly integrate your learning experience with our
                      carefully curated collection of lecture links from
                      renowned educators, ensuring that you have access to
                      valuable insights and explanations to supplement your
                      studies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================================testimonials====================================== */}

        <ReviewSection />
      </div>

      <Footer />
    </>
  );
};

export default HeroSection;
