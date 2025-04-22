"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/app/Course/Loading";
import Image from "next/image";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGlobalState } from "@/components/GlobalVariableProvider";
import ProfilePage from "../Profile/page";
import { useTheme } from "next-themes";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/Sidebar";
import {forgetPasswordEmail, tryLogin , tryRegister, verify, getInfo} from "@/app/API/HandleApi"
import { useGoogleLogin } from '@react-oauth/google';

const LoginPage = () => {
  const { globalState, setGlobalState } = useGlobalState();
  const [loading, setloading] = useState(true);
  const [loadingBtn, setloadingBtn] = useState(false);
  const [email, setEmail] = useState("");
  const [Erremail, setErrEmail] = useState(false);
  const [password, setPassword] = useState("");
  const [Errpassword, setErrPassword] = useState(false);
  const [name, setName] = useState("");
  const [Errname, setErrName] = useState(false);
  const [Signup, setSignup] = useState(false);
  const [isDisabledLogin, setisDisabledLogin] = useState(true);
  const [isDisabledSignup, setisDisabledSignup] = useState(true);
  const [fbBtn, setfbBtn] = useState(true);
  const [Btn, setBtn] = useState(false);
  const { theme } = useTheme();

  let errors: string | null = null;
  const router = useRouter();


  useEffect(() => {
    const allFieldsFilled = email !== "" && password !== "";

    setisDisabledLogin(!allFieldsFilled);
  }, [password, email]);

  useEffect(() => {
    const allFieldsFilled = name !== "" && password !== "" && name !== "";

    setisDisabledSignup(!allFieldsFilled);
  }, [password, email, name]);


  async function getUser() {
    try {
      const very = await verify();
      setGlobalState(very);
    } catch (error) {
      setloading(false);
      setloadingBtn(false);
    }
  }

  if (globalState) {
    // console.log(globalState)
    // const handlePush = () => {
    //   if (globalState) {
    //     setloadingBtn(false);
    //     setPassword("");
    //     router.push("/Login");
    //   }
    //   handlePush();
    // };
    // return (
    //   <div>
    //     <ProfilePage />
    //   </div>
    // );
    router.push("/Profile")
  }
  useEffect(() => {
    getUser();
  }, []);
  

  const login = async (email:string,password:string,isVerified:boolean) => {
    try {
      const response = await tryLogin(email,password,isVerified,setEmail,setPassword,setloadingBtn);
      if(response){
        // console.log("here i am at login")
        getUser();
      }
    } catch (error:any) {
      const err = error.response.data.error;
      if (err.includes("User not found")) {
              errors = "Enter a valid email address";
              setErrEmail(true);
            } else if (err.includes("password")) {
              errors = "Password is wrong";
              setErrPassword(true);
            } else {
              errors = "Enter valid Credentials";
              setErrEmail(true);
              setErrPassword(true);
            }
            toast.error(`${errors}`, { theme: "colored", position: "top-center" });
            setPassword("");
            setloadingBtn(false);
    }
  }

  const register = async (email:any,password:any,username:any,isVerified:boolean) => {
    try {
      const response = await tryRegister(email,password,username,isVerified,setEmail,setPassword,setName,setloadingBtn) ;
      if(response){
        login(email,password,isVerified);
      }else{
      }
    } catch (error:any) {
      const err = error.response.data.error;
      if (err.includes("User")) {
              errors = err;
              setErrEmail(true);
            }  else {
              errors = "Unexpected Error Occured. Please try after Sometime";
            }
            toast.error(`${errors}`, { theme: "colored", position: "top-center" });
            setPassword("");
            setName("");
            setloadingBtn(false);
    }
  }


  const handleSignup = () => {
    {
      !Signup ? setSignup(true) : setSignup(false);
    }
  };

  const handleForgetPassword = async (to:string) => {
    try {
      if (email && fbBtn) {
        const response = await forgetPasswordEmail(to);
        setfbBtn(false);
        if (response) {
          toast.success(`Mail send successfully!`, { theme: "colored", position: "top-center" });
        }
      }
    } catch (error) {
      toast.error(`This email is not registered`, { theme: "colored", position: "top-center" });
    }
  };

  
  // if (globalState) {
  //   router.push("/profile"); // Redirect to the profile page once authenticated
  //   return null; // Prevent rendering anything else
  // }

  const handleGoogle = useGoogleLogin({
      onSuccess: (tokenResponse) => {
        userInfo(tokenResponse.access_token); 
      },
      onError: (error) => {

        toast.error("you are unique child, we cant make you login. Please try after sometime", { theme: "colored", position: "top-center" });
        // console.error("Login Failed:", error);
      },
    });

  const userInfo = async (gtoken:any) => {
    const gg = await getInfo(gtoken)
    register(gg.data.email,gg.data.sub,gg.data.name,true)
    setBtn(true);
  }

  // console.log("userinflo :");
  // const gg = true;


  return (
    <>
      <ToastContainer />
      <div className="max-sm:hidden">
        <Sidebar />
      </div>

      {loading ? (
        <Loading />
      ) : (
        <div style={{ fontFamily: "YourFont" }} className="flex">
          <div>
            {theme === "dark" ? (
              <Image
                src={"/shape_dark.png"}
                height={100}
                width={1000}
                alt=""
                className="fixed bottom-0 right-0 w-[300px]"
              />
            ) : (
              <Image
                src={"/shape.png"}
                height={100}
                width={1000}
                alt=""
                className="fixed bottom-0 right-0 w-[300px]"
              />
            )}
          </div>

          <Navbar params="LogIn" />

          <div className="flex h-screen w-full ">
            <div className="flex w-5/12 pt-10 dark:bg-[#242424] max-sm:hidden ">
              <Image
                src={"/cuate.png"}
                height={100}
                width={1000}
                alt=""
                className="w-8/12 m-auto "
              />
            </div>

            <div className="flex flex-col w-7/12 justify-center items-center bg-[#fff] dark:bg-[#191817] h-screen overflow-hidden  max-sm:w-full">
            
              <div className="flex flex-col w-full h-screen overflow-y-scroll items-center mt-40 max-sm:mt-[7rem] scroll">

              <div className="flex flex-col w-7/12 mt-2 max-sm:w-10/12">
                  <div className="flex flex-col">
                    <button
                      type="button"
                      onClick={() => handleGoogle()}
                      className="p-2 my-2 rounded bg-[#ffffff] dark:bg-[#191817] text-[600] flex justify-center border backdrop-blur-[10px] "
                    >
                      <Image
                        src={"/google.png"}
                        height={10}
                        width={1000}
                        alt=""
                        className="h-6 w-6 mx-2"
                        onClick={() => console.log("clicked")}
                      />{" "}
                      {!Signup  ? 
                      <p>Sign up with Google</p>
                      : 
                      <p>Login with Google</p> 
                      }
                      
                    </button>

                    {Btn ? 
                    <div className={`w-full h-[100vh] bg-[#2d2d2da5] fixed left-0 top-0 z-[20000] justify-center`}>
                    <div className="h-full flex">
                    <Image src={'/loading.gif'} alt="ss" height={0} width={70} className=' m-auto '/>
                    </div>
                  </div>
                  : 
                  <p></p> }
                    



                    {/* <button
                      type="button"
                      onClick={handleGithub}
                      className="p-2 my-2 rounded bg-[#ffffff] dark:bg-[#191817] text-[600] flex justify-center border backdrop-blur-[10px] "
                    >
                      <Image
                        src={"/GitHub.png"}
                        height={10}
                        width={1000}
                        alt=""
                        className="h-6 w-6 mx-2"
                      />{" "}
                      Github
                    </button> */}
                  </div>
                  <h1 className="text-center dark:text-[#a5a5a5] text-[#333] p-4">
                    or
                  </h1>
                </div>

                {!Signup ? (
                  <div className="flex flex-col w-7/12 max-sm:w-10/12 mb-10">
                    <div className="flex flex-col">
                      <h1
                        style={{ fontFamily: "YourFontMedium" }}
                        className=" text-3xl font-[600] tracking-[0.4px] max-sm:text-center"
                      >
                        Create an account
                      </h1>
                      <h1 className="text-sm pt-2 font-[100] text-[#a5a5a5] tracking-[0.5px] pb-1 ">Enter your email below to create your account</h1>
                    </div>
                    <form className="flex flex-col mt-10 z-[200]">
                      <h1 className="text-sm pt-2 font-[100] dark:text-[#a5a5a5] text-[#333] tracking-[0.5px] pb-1 ">
                        Email Address{" "}
                      </h1>
                      <input
                        type="email"
                        placeholder="example@gmail.com"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value), setErrEmail(false);
                        }}
                        className={`${
                          Erremail
                            ? "text-red-400 border-red-700 outline-red-700"
                            : "outline-none"
                        } p-3 mb-2 rounded dark:bg-[#1e1c1a] border `}
                      />
                      <h1 className="text-sm pt-2 font-[100] dark:text-[#a5a5a5] text-[#333] tracking-[0.5px] pb-1 ">
                        Create Password{" "}
                      </h1>
                      <input
                        type="password"
                        placeholder="********"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value), setErrPassword(false);
                        }}
                        className={`${
                          Errpassword
                            ? "text-red-400 border-red-700"
                            : "outline-none"
                        } p-3 mb-2 rounded dark:bg-[#1e1c1a] border `}
                      />
                      <h1 className="text-sm pt-2 font-[100] dark:text-[#a5a5a5] text-[#333] tracking-[0.5px] pb-1 ">
                        Username{" "}
                      </h1>
                      <input
                        type="text"
                        placeholder="JohnWick"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value), setErrName(false);
                        }}
                        className={`${
                          Errname
                            ? "text-red-400 border-red-700"
                            : "outline-none"
                        } p-3 mb-2 rounded dark:bg-[#1e1c1a] border `}
                      />
                      <button
                        type="button"
                        onClick={() => {
                          register(email,password,name,false);
                          setloadingBtn(true);
                          setisDisabledSignup(true);
                        }}
                        disabled={isDisabledSignup}
                        className={`${
                          isDisabledSignup
                            ? "cursor-not-allowed opacity-80 text-[#ffffff] bg-[#263238] dark:text-[#ffffff] dark:bg-[#263238]"
                            : "text-[#ffffff] bg-[#263238] dark:bg-[#ffffff] dark:text-[#263238]"
                        } p-2 my-2 rounded text-[600] transition-all duration-500`}
                      >
                        {loadingBtn ? "Processing..." : "Create Account"}
                      </button>
                    </form>
                    <h1 className="text-xs py-1 flex justify-end underline underline-offset-4 dark:text-[#a5a5a5] text-[#333] z-[200]">
                      <p
                        onClick={() => handleSignup()}
                        className="cursor-pointer"
                      >
                        Already have an account?
                      </p>
                    </h1>
                    {/* <button >Notify !</button> */}
                  </div>
                ) : (
                  <div className="flex flex-col w-7/12 max-sm:w-10/12">
                    <div className="flex flex-col">
                      <h1
                        style={{ fontFamily: "YourFontMedium" }}
                        className=" text-3xl font-[600] tracking-[0.4px] max-sm:text-center"
                      >
                        Login
                      </h1>
                      <h1 className="text-sm pt-2 font-[100] text-[#a5a5a5] tracking-[0.5px] pb-1 ">Enter your email below to create your account</h1>
                    </div>
                    <form className="flex flex-col mt-10 z-[200]">
                      <h1 className="text-sm pt-2 font-[100] dark:text-[#a5a5a5] text-[#333] tracking-[0.5px] pb-1 ">
                        Email Address{" "}
                      </h1>
                      <input
                        type="email"
                        placeholder="example@gmail.com"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value), setErrEmail(false);
                        }}
                        className={`${
                          Erremail
                            ? "text-red-400 border-red-700"
                            : "outline-none"
                        } p-3 mb-2 rounded dark:bg-[#1e1c1a] border `}
                      />
                      <h1 className="text-sm pt-2 font-[100] dark:text-[#a5a5a5] text-[#333] tracking-[0.5px] pb-1 ">
                        Password{" "}
                      </h1>
                      <input
                        type="password"
                        placeholder="********"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value), setErrPassword(false);
                        }}
                        className={`${
                          Errpassword
                            ? "text-red-400 border-red-700"
                            : "outline-none"
                        } p-3 mb-2 rounded dark:bg-[#1e1c1a] border `}
                      />
                      <h1
                        className={`${
                          Errpassword ? "" : "hidden"
                        } text-xs py-1 flex justify-end underline underline-offset-4 dark:text-[#a5a5a5] text-[#333] z-[200]`}
                      >
                        <p
                          onClick={() => handleForgetPassword(email)}
                          className="cursor-pointer"
                        >
                          forget password?
                        </p>
                      </h1>

                      <button
                        type="button"
                        onClick={() => {
                          login(email, password,false);
                          setloadingBtn(true);
                          setisDisabledLogin(true);
                        }}
                        disabled={isDisabledLogin}
                        className={`${
                          isDisabledLogin
                            ? "cursor-not-allowed opacity-80 text-[#ffffff] bg-[#263238]"
                            : "text-[#ffffff] bg-[#263238] dark:bg-[#ffffff] dark:text-[#263238]"
                        } p-2 my-2 rounded text-[600] transition-all duration-500`}
                      >
                        {loadingBtn ? "Processing..." : "Login"}
                      </button>
                    </form>
                    <h1 className="text-xs py-1 flex justify-end underline underline-offset-4 dark:text-[#a5a5a5] text-[#333] z-[200]">
                      <p
                        onClick={() => handleSignup()}
                        className="cursor-pointer"
                      >
                        dont have an account?
                      </p>
                    </h1>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPage;

// export default loginPage
