import React from "react";
// import Team from "./FeedBack";
import Navbar from "../navbar";
import Image from "next/image";
import plane2 from "../../public/Plane 1.png";
import plane from "../../public/Plane 2.png";
import about from "../../public/aboutus.png";
import mission from "../../public/ourmission.png";
import offer from "../../public/whatoffer.png";
import commitment from "../../public/commitment.png";
import Footer from "../footer";
import { useTheme } from "next-themes";

const About = () => {
  // const {theme} = useTheme
  // console.log("themes " , theme)
  return (
    <>
      <div style={{ fontFamily: "yourFontThin" }}>
        <Navbar params="About" />
      </div>
      <div
        style={{ fontFamily: "yourFont" }}
        className='flex flex-col bg-[url("../public/Background.png")] dark:bg-[url("../public/Background_dark.png")]'
      >
        <div className="flex">
          <Image
            src={plane2}
            height={1}
            width={100000}
            alt=""
            className="w-[20vw] absolute mt-[13vh] dark:invert"
            // className="w-[20vw] absolute right-0 mt-[60vh]"
          />
          <div className="flex flex-col bg-[#fff3e8] w-9/12 rounded-3xl m-auto mt-[40vh] shadow-xl dark:bg-[#242424]">
            <div>
              <Image
                src={'/aboutus.png'}
                height={1}
                width={100000}
                alt=""
                className="w-[auto] h-[10vw] mt-[-6vw] ml-[-1.3vw]"
              />
            </div>
            <div className="flex">
              <p className="px-[4vw] pb-10 pt-5 text-[1.5vw] text-[#89847f] tracking-wide dark:text-[#dbdbdb]">
                Welcome to{" "}
                <span className="text-[#706d69] dark:text-white font-semibold">
                  Make Engineering Easy
                </span>
                , where we are committed to simplifying your academic journey.
                We understand the challenges that students face while navigating
                through their studies, and we are dedicated to providing
                comprehensive study materials that make learning a seamless and
                enjoyable experience.
              </p>
            </div>
          </div>
        </div>


        <div className="flex">
          <Image
            src={plane}
            height={1}
            width={100000}
            alt=""
            // className="w-[20vw] absolute mt-[15vh]"
            className="w-[20vw] absolute right-0 mt-[6vh] dark:invert"
          />
          <div className="flex flex-col bg-[#fff3e8] w-9/12 rounded-3xl m-auto mt-[40vh] shadow-xl dark:bg-[#242424]">
            <div>
              <Image
                src={mission}
                height={1}
                width={100000}
                alt=""
                className="w-[auto] h-[10vw] mt-[-6.5vw]  ml-[-1vw]"
              />
            </div>
            <div className="flex">
              <p className="px-[4vw] pb-10 pt-5 text-[1.5vw] text-[#89847f] tracking-wide dark:text-[#dbdbdb]">
              At{" "}
          <span className="text-[#706d69] dark:text-white font-semibold">
            Make Engineering Easy
          </span>
          , our mission is to empower students with the resources they need to
          excel in their academic endeavors. We strive to curate a diverse
          collection of past year question papers (PYQs), comprehensive study
          notes, and valuable lecture links, all carefully organized to support
          your learning process.
              </p>
            </div>
          </div>
        </div>

        <div className="flex">
          <Image
            src={plane2}
            height={1}
            width={100000}
            alt=""
            className="w-[20vw] absolute mt-[6vh] dark:invert"
            // className="w-[20vw] absolute right-0 mt-[6vh]"
          />
          <div className="flex flex-col bg-[#fff3e8] w-9/12 rounded-3xl m-auto mt-[40vh] shadow-xl dark:bg-[#242424]">
            <div>
              <Image
                src={offer}
                height={1}
                width={100000}
                alt=""
                className="w-[auto] h-[10vw] mt-[-6.5vw] ml-[-1vw] "
              />
            </div>
            <div className="flex flex-col">
              <p className="px-[4vw] pb-10 pt-5 text-[1.5vw] text-[#89847f] tracking-wide dark:text-[#dbdbdb]">
              <span className="text-[#706d69] dark:text-white font-semibold">
            Past Year Question Papers (PYQs):
          </span>{" "}
          Access a repository of meticulously compiled PYQs spanning various
          subjects and educational boards, enabling you to familiarize yourself
          with exam patterns and prepare effectively.
        </p>
              <p className="px-[4vw] pb-10 pt-5 text-[1.5vw] text-[#89847f] tracking-wide dark:text-[#dbdbdb]">
              <span className="text-[#706d69] dark:text-white font-semibold">
            Comprehensive Study Notes:
          </span>{" "}
          Explore a rich assortment of well-researched study materials created
          by our team of experienced educators, designed to simplify complex
          concepts and facilitate a deeper understanding of your course
          material.
        </p>
              <p className="px-[4vw] pb-10 pt-5 text-[1.5vw] text-[#89847f] tracking-wide dark:text-[#dbdbdb]">
              <span className="text-[#706d69] dark:text-white font-semibold">Lecture Links:</span>{" "}
          Seamlessly integrate your learning experience with our carefully
          curated collection of lecture links from renowned educators, ensuring
          that you have access to valuable insights and explanations to
          supplement your studies.
        </p>
            </div>
          </div>
        </div>

        <div className="flex">
          <Image
            src={plane}
            height={1}
            width={100000}
            alt=""
            // className="w-[20vw] absolute mt-[15vh]"
            className="w-[20vw] absolute right-0 mt-[6vh] dark:invert"
          />
          <div className="flex flex-col bg-[#fff3e8] w-9/12 rounded-3xl m-auto mt-[40vh] shadow-xl mb-20 dark:bg-[#242424]">
            <div>
              <Image
                src={commitment}
                height={1}
                width={100000}
                alt=""
                className="w-[auto] h-[13vw] mt-[-6.5vw] ml-[-1vw] "
              />
            </div>
            <div className="flex">
              <p className="px-[4vw] pb-10 text-[1.5vw] text-[#89847f] tracking-wide dark:text-[#dbdbdb]">
              We are passionate about fostering a learning environment that
          encourages
          <span className="text-[#706d69] dark:text-white font-semibold">
            {" "}
            exploration, critical thinking, and academic excellence.
          </span>{" "}
          Our team is dedicated to continually enriching our platform with
          updated study resources and relevant materials, ensuring that you have
          everything you need to thrive academically. Join us at{" "}
          <span className="text-[#706d69] dark:text-white font-semibold">
            Make Engineering Easy
          </span>{" "}
          and embark on a journey towards effortless learning and academic
          success. Should you have any questions or require further assistance,
          please feel free to reach out to us. We are here to support you every
          step of the way.
              </p>
            </div>
          </div>
        </div>


      </div>






      {/* <div className="my-auto pt-[4vw] w-7/12 mx-auto text-gray-700 scroll-none snap-none max-[800px]:w-11/12 max-[800px]:pt-12">
        <h1 className="text-3xl my-2 mt-20 font-semibold border-b-2 pb-2 text-black max-[800px]:text-2xl">
          About Us
        </h1>
        <p className="max-[800px]:text-sm">
          Welcome to{" "}
          <span className="text-[#706d69] dark:text-white font-semibold">
            Make Engineering Easy
          </span>
          , where we are committed to simplifying your academic journey. We
          understand the challenges that students face while navigating through
          their studies, and we are dedicated to providing comprehensive study
          materials that make learning a seamless and enjoyable experience.
        </p>

        <h1 className="text-3xl my-2 mt-20 font-semibold border-b-2 pb-2 text-black max-[800px]:text-2xl">
          Our Mission
        </h1>
        <p className="max-[800px]:text-sm">
          At{" "}
          <span className="text-[#706d69] dark:text-white font-semibold">
            Make Engineering Easy
          </span>
          , our mission is to empower students with the resources they need to
          excel in their academic endeavors. We strive to curate a diverse
          collection of past year question papers (PYQs), comprehensive study
          notes, and valuable lecture links, all carefully organized to support
          your learning process.
        </p>

        <h1 className="text-3xl my-2 mt-20 font-semibold border-b-2 pb-2 text-black max-[800px]:text-2xl">
          What We Offer
        </h1>
        <p className="mt-3 max-[800px]:text-sm">
          <span className="text-[#706d69] dark:text-white font-semibold">
            Past Year Question Papers (PYQs):
          </span>{" "}
          Access a repository of meticulously compiled PYQs spanning various
          subjects and educational boards, enabling you to familiarize yourself
          with exam patterns and prepare effectively.
        </p>
        <p className="mt-3 max-[800px]:text-sm">
          <span className="text-[#706d69] dark:text-white font-semibold">
            Comprehensive Study Notes:
          </span>{" "}
          Explore a rich assortment of well-researched study materials created
          by our team of experienced educators, designed to simplify complex
          concepts and facilitate a deeper understanding of your course
          material.
        </p>
        <p className="mt-3 max-[800px]:text-sm">
          <span className="text-[#706d69] dark:text-white font-semibold">Lecture Links:</span>{" "}
          Seamlessly integrate your learning experience with our carefully
          curated collection of lecture links from renowned educators, ensuring
          that you have access to valuable insights and explanations to
          supplement your studies.
        </p>

        <h1 className="text-3xl my-2 mt-20 font-semibold border-b-2 pb-2 text-black max-[800px]:text-2xl">
          Our Commitment
        </h1>
        <p className="max-[800px]:text-sm">
          We are passionate about fostering a learning environment that
          encourages
          <span className="text-[#706d69] dark:text-white font-semibold">
            {" "}
            exploration, critical thinking, and academic excellence.
          </span>{" "}
          Our team is dedicated to continually enriching our platform with
          updated study resources and relevant materials, ensuring that you have
          everything you need to thrive academically. Join us at{" "}
          <span className="text-[#706d69] dark:text-white font-semibold">
            Make Engineering Easy
          </span>{" "}
          and embark on a journey towards effortless learning and academic
          success. Should you have any questions or require further assistance,
          please feel free to reach out to us. We are here to support you every
          step of the way.
        </p> */}

        {/* <Team/> */}
      {/* </div> */}
      <Footer/>
    </>
  );
};

export default About;
