"use client";
import { useEffect, useState } from "react";
import { account, ID } from "@/components/appwrite";
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
import { OAuthProvider } from "appwrite";

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
  const { theme } = useTheme();

  // const [errors, errors = ] = useState("")
  let errors: string | null = null;
  const router = useRouter();

  // const notify = () => toast("Wow so easy !");

  const handleGoogle =()=> {
    account.createOAuth2Session(
      OAuthProvider.Google,
      "https://make-engineering-easy.vercel.app/Login",
      "https://make-engineering-easy.vercel.app/Login"
  
    )
  }
  const handleGithub =()=> {
    account.createOAuth2Session(
      OAuthProvider.Github,
      "https://make-engineering-easy.vercel.app/Login",
      "https://make-engineering-easy.vercel.app/Login"
  
    )
  }

  useEffect(() => {
    async function getUser() {
      try {
        setGlobalState(await account.get());
      } catch (error) {
        // console.log(error);
        setloading(false);
        setloadingBtn(false);
      }
    }
    getUser();
  }, []);

  const login = async (email: any, password: any) => {
    try {
      const session = await account.createEmailPasswordSession(email, password);
      setGlobalState(await account.get());
      // console.log("session :", session);
    } catch (error: any) {
      if (error.message.includes("Invalid `email` param")) {
        errors = "Enter a valid email address";
        setErrEmail(true);
      } else if (error.message.includes("Invalid `password` param")) {
        errors = "Password is wrong";
        setErrPassword(true);
      } else if (error.message.includes("Invalid credentials.")) {
        errors = "Invalid credentials";
        setErrEmail(true);
        setErrPassword(true);
      } else {
        errors = "Enter Credentials";
        setErrEmail(true);
        setErrPassword(true);
      }
      toast.error(`${errors}`, { theme: "colored", position: "top-center" });
      setPassword("");
      setloadingBtn(false);
    }
  };

  const register = async () => {
    try {
      await account.create(ID.unique(), email, password, name);
      login(email, password);
    } catch (error: any) {
      if (error.message.includes("Invalid `email` param")) {
        errors = "Enter a valid email address";
        setErrEmail(true);
      } else if (error.message.includes("Invalid `password` param")) {
        errors = "Enter a Password";
        setErrPassword(true);
      } else if (error.message.includes("Invalid `name` param")) {
        errors = "Enter Username";
        setErrName(true);
      } else if (
        error.message.includes(
          "A user with the same id, email, or phone already exists in this project."
        )
      ) {
        errors = "Email Already used";
      } else {
        errors = "Unexpected Error Occured. Please try after Sometime";
      }
      toast.error(`${errors}`, { theme: "colored", position: "top-center" });
      setPassword("");
      setloadingBtn(false);
    }
  };

  const handleSignup = () => {
    {
      !Signup ? setSignup(true) : setSignup(false);
    }
  };

  const handleForgetPassword = () => {
    const promise = account.createRecovery(
      email,
      // "http://localhost:3000/ForgetPassword"
      "https://make-engineering-easy.vercel.app/ForgetPassword"
    );
    promise.then(()=>{
      toast.success(`Mail send successfully!`, { theme: "colored", position: "top-center" });
    })
    .catch((error)=>{
      toast.error(`This email is not registered`, { theme: "colored", position: "top-center" });
    })
  };

  useEffect(() => {
    const allFieldsFilled = email !== "" && password !== "";

    setisDisabledLogin(!allFieldsFilled);
  }, [password, email]);

  useEffect(() => {
    const allFieldsFilled = name !== "" && password !== "" && name !== "";

    setisDisabledSignup(!allFieldsFilled);
  }, [password, email, name]);

  if (globalState) {
    const handlePush = () => {
      if (globalState) {
        setloadingBtn(false);
        setPassword("");
        router.push("/Login");
      }
      handlePush();
    };
    return (
      <div>
        <ProfilePage />
      </div>
    );
  }

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

          {/* <div className="flex justify-between px-7 py-14 fixed w-full">
          <h1
            onClick={() => {
              router.push("/");
            }}
            style={{ fontFamily: "YourFontMedium" }}
            className={`mx-5 hover:cursor-pointer transition-all duration-300 capitalize font-bold text-[1.4rem] tracking-[0.5px]`}
          >
            make engineering{" "}
            <span className="block-inline text-[#ffaa2b] "> easy</span>
          </h1>
          <ChangeTheme />
        </div> */}

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
                {!Signup ? (
                  <div className="flex flex-col w-7/12 max-sm:w-10/12">
                    <div className="flex flex-col">
                      <h1
                        style={{ fontFamily: "YourFontMedium" }}
                        className=" text-3xl font-[600] tracking-[0.4px] max-sm:text-center"
                      >
                        Create an account
                      </h1>
                      {/* <h1 className="text-sm pt-2 font-[100] text-[#a5a5a5] tracking-[0.5px] pb-1 ">Enter your email below to create your account</h1> */}
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
                          register();
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
                      {/* <h1 className="text-sm pt-2 font-[100] text-[#a5a5a5] tracking-[0.5px] pb-1 ">Enter your email below to create your account</h1> */}
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
                          onClick={() => handleForgetPassword()}
                          className="cursor-pointer"
                        >
                          forget password?
                        </p>
                      </h1>

                      <button
                        type="button"
                        onClick={() => {
                          login(email, password);
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

                <div className="flex flex-col w-7/12 mb-10 max-sm:w-10/12">
                  <h1 className="text-center dark:text-[#a5a5a5] text-[#333] p-4">
                    or continue with
                  </h1>
                  <div className="flex flex-col">
                    <button
                      type="button"
                      onClick={handleGoogle}
                      className="p-2 my-2 rounded bg-[#ffffff] dark:bg-[#191817] text-[600] flex justify-center border backdrop-blur-[10px] "
                    >
                      <Image
                        src={"/google.png"}
                        height={10}
                        width={1000}
                        alt=""
                        className="h-6 w-6 mx-2"
                      />{" "}
                      Google
                    </button>
                    <button
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
                    </button>
                  </div>
                </div>
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
