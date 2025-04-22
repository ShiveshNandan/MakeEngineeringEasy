"use client";
import Footer from "@/components/footer";
import { useGlobalState } from "@/components/GlobalVariableProvider";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/Sidebar";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CGPA = () => {
  const [SubNumber, setSubNumber] = useState(8);
  const [calculation, setcalculation] = useState(false);
  const [iscal, setiscal] = useState(true);
  const [subjects, setSubjects] = useState<any>(
    Array.from({ length: 8 }, () => ({ number: "", credit: "" }))
  );
  const [gradesubjects, setgradeSubjects] = useState<any>(
    Array.from({ length: 8 }, () => ({ number: "", credit: "" }))
  );

  const { theme } = useTheme();

  const handleCheck = () => {
    {
      !iscal
        ? ""
        : toast.error(`Please fill all the fields!`, {
            theme: "dark",
            position: "top-center",
          });
    }
  };

  const GradeCalculate = (numbers: any) => {
    if (numbers >= 90) {
      return 10;
    } else if (numbers >= 75) {
      return 9;
    } else if (numbers >= 65) {
      return 8;
    } else if (numbers >= 55) {
      return 7;
    } else if (numbers >= 50) {
      return 6;
    } else if (numbers >= 45) {
      return 5;
    } else if (numbers >= 40) {
      return 4;
    } else {
      return 0;
    }
  };

  useEffect(() => {
    const allFieldsFilled = subjects.every(
      (subject: { number: string; credit: string }) =>
        subject.number !== "" && subject.credit !== ""
    );
    setiscal(!allFieldsFilled);
  }, [subjects]);

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(parseInt(e.target.value), 14);
    setSubNumber(value);
    if (value > subjects.length) {
      setSubjects([
        ...subjects,
        ...Array.from({ length: value - subjects.length }, () => ({
          number: "",
          credit: "",
        })),
      ]);
    } else {
      setSubjects(subjects.slice(0, value));
    }
    if (value > gradesubjects.length) {
      setgradeSubjects([
        ...gradesubjects,
        ...Array.from({ length: value - gradesubjects.length }, () => ({
          number: "",
          credit: "",
        })),
      ]);
    } else {
      setgradeSubjects(gradesubjects.slice(0, value));
    }
  };

  const handleInputChangeNumber = (index: any, field: "number", value: any) => {
    const newSubjects = [...subjects];
    const newgradeSubjects = [...gradesubjects];
    const numbers = Math.min(value, 100);
    const grade = GradeCalculate(numbers);
    newSubjects[index][field] = numbers;
    newgradeSubjects[index][field] = grade;
    setSubjects(newSubjects);
  };

  const handleInputChangeCredit = (index: any, field: "credit", value: any) => {
    const newSubjects = [...subjects];
    const newgradeSubjects = [...gradesubjects];
    newSubjects[index][field] = Math.min(value, 10);
    newgradeSubjects[index][field] = Math.min(value, 10);
    setSubjects(newSubjects);
    setgradeSubjects(newgradeSubjects);
  };

  const totalProduct = subjects.reduce(
    (acc: any, { number, credit }: any) => acc + number * credit,
    0
  );
  const totalMarksgain = subjects.reduce(
    (acc: any, { number }: any) => acc + number,
    0
  );
  const totalMarks = SubNumber * 100;

  const totalGrade = gradesubjects.reduce(
    (acc: any, { number, credit }: any) => acc + number * credit,
    0
  );
  const totalCredits = subjects.reduce(
    (acc: any, { credit }: any) => acc + credit,
    0
  );

  const Percentage = ((totalMarksgain / totalMarks) * 100).toFixed(3);
  const CreditPercentage = (totalProduct / totalCredits).toFixed(3);
  const GradePercentage = (totalGrade / totalCredits).toFixed(3);

  return (
    <>
      <ToastContainer />
      <div className='bg-[url("../../public/Background.png")] dark:bg-[url("../../public/Background_dark.png")] shadow-xl dark:shadow-2xl pb-10'>
        <Navbar params="CGPA" />

        <div className="max-sm:hidden">
          <Sidebar />
        </div>
        <div
          style={{ fontFamily: "YourFont" }}
          className="flex flex-col py-40 max-sm:pb-20"
        >
          {/* <h1 className="text-3xl m-auto">CGPA calculator</h1> */}

          <Image
            src={'/Plane 1.png'}
            height={1}
            width={100000}
            alt=""
            className="w-[20vw] max-lg:w-[30vw] absolute mt-[-4rem] dark:invert max-sm:hidden"
          />


          <div className="flex flex-col justify-center mt-[2rem] sm:mt-[8rem] mx-auto max-sm:flex-col w-8/12 max-xl:w-10/12 max-lg:w-11/12 max-sm:mx-auto  rounded-3xl dark:bg-[#333333] bg-[#FFF3E8] shadow-lg">

            <div>
              {theme === "light" ? (
                <Image
                  src={"/Cal.png"}
                  height={1}
                  width={100000}
                  alt=""
                  className="w-[auto] h-[10vw] mt-[-6vw] ml-[-1.2vw] max-lg:mt-[-8.3vw] max-lg:h-[14vw] max-sm:h-[5rem] max-sm:mt-[-3rem]"
                />
              ) : (
                <Image
                  src={"/Cal_dark.png"}
                  height={1}
                  width={100000}
                  alt=""
                  className="w-[auto] h-[10vw] mt-[-6vw]  ml-[-1.2vw] max-lg:mt-[-8.3vw] max-lg:h-[14vw] max-sm:h-[5rem] max-sm:mt-[-3rem]"
                />
              )}
            </div>
            <div className="flex justify-center max-sm:flex-col w-full max-sm:mx-auto">
              <div className="flex flex-col">
                <div className="flex max-sm:justify-center max-sm:px-2 max-sm:m-auto max-sm:flex-col max-sm:w-11/12">
                  <div className="sm:mt-12 mt-2">
                    <h1 className="capitalize text-sm text-[#706d69] dark:text-white my-2">
                      select your college
                    </h1>
                    <select className="p-2 w-[250px]  rounded-md text-center mx-2 text-sm max-sm:w-11/12 max-sm:m-auto max-sm:flex dark:bg-[#1e1c1a] bg-[#ffe4ca]">
                      <option value="someOption">IPU</option>
                    </select>
                  </div>
                  <div className="sm:mt-12">
                    <h1 className="capitalize text-sm text-[#706d69] dark:text-white my-2 px-3 max-sm:px-0">
                      number of subjects
                    </h1>
                    <input
                      value={SubNumber}
                      onChange={handleNumberChange}
                      type="number"
                      className="p-1 border w-[50px] m-auto  rounded-md text-center flex dark:bg-[#1e1c1a] bg-[#ffe4ca]"
                    />
                  </div>
                </div>
                <div className="flex flex-col mx-auto my-5">
                  <div className="flex mt-2">
                    <p className="p-1 text-[#706d69] dark:text-white mx-2 w-[90px] text-center">
                      Subject no.
                    </p>
                    <p className="p-1 text-[#706d69] dark:text-white mx-2 w-[70px] text-center">
                      Number
                    </p>
                    <p className="p-1 text-[#706d69] dark:text-white mx-2 w-[70px] text-center">
                      Credit
                    </p>
                  </div>
                  {Array.from({ length: SubNumber }, (_, index) => (
                    <div className="flex mt-2" key={index}>
                      <p className="p-1 mx-2 w-[90px] text-center">
                        {index + 1}.
                      </p>
                      <input
                        value={subjects[index].number}
                        onChange={(e) =>
                          handleInputChangeNumber(
                            index,
                            "number",
                            parseInt(e.target.value)
                          )
                        }
                        type="number"
                        className="p-1 border mx-2 w-[70px] text-center dark:bg-[#1e1c1a] bg-[#ffe4ca] rounded-md"
                      />
                      <input
                        value={subjects[index].credit}
                        onChange={(e) =>
                          handleInputChangeCredit(
                            index,
                            "credit",
                            parseInt(e.target.value)
                          )
                        }
                        type="number"
                        className="p-1 border mx-2 w-[70px] text-center dark:bg-[#1e1c1a] bg-[#ffe4ca] rounded-md"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col w-3/12 pt-10 max-sm:justify-center max-sm:w-11/12 max-sm:m-auto max-lg:w-4/12">
                <div className="flex flex-col my-auto">
                  <button
                    onClick={() => {
                      {
                        !iscal ? setcalculation(true) : "";
                      }
                      handleCheck();
                    }}
                    className={`${
                      iscal
                        ? "bg-blue-300 cursor-not-allowed "
                        : "bg-[#0177cc] cursor-pointer"
                    } flex  rounded-full h-40 w-40 justify-center items-center uppercase m-auto tracking-wider transition-all duration-700 mb-5 text-white`}
                  >
                    {!calculation ? "calculate" : `SGPA : ${GradePercentage}`}
                  </button>

                  <div
                    className={` ${
                      calculation ? "flex" : "hidden"
                    } min-h-[12.5rem] mb-10 text-[#706d69] dark:text-white`}
                  >
                    <div
                      className={`${
                        calculation ? "flex" : "hidden"
                      } flex-wrap text-center mt-8 transition-all duration-700`}
                    >
                      <div className="flex flex-col w-1/2 py-1 px-2">
                        <h1>Marks : </h1>
                        <h1 className="text-blue-500 px-1">
                          {totalMarksgain} / {totalMarks}
                        </h1>
                      </div>
                      <div className="flex w-1/2 flex-col py-1 px-2 ">
                        <h1>Percentage : </h1>
                        <h1 className="text-blue-500 px-1">{Percentage} %</h1>
                      </div>
                      <div className="flex w-1/2 flex-col py-1 px-2 ">
                        <h1>Credit marks : </h1>
                        <h1 className="text-blue-500 px-1">
                          {totalProduct} / {totalCredits * 100}
                        </h1>
                      </div>
                      <div className="flex w-1/2 flex-col py-1 px-2 ">
                        <h1>Credit Percentage : </h1>
                        <h1 className="text-blue-500 px-1">
                          {/* {totalMarksgain}/{totalMarks} */}
                          {CreditPercentage} %
                        </h1>
                      </div>
                      {/* <div className="flex flex-col py-1 px-2 ">
                <h1>SGPA : </h1>
                <h1 className="text-blue-500 px-1">{totalMarksgain}/{totalMarks}</h1>
            </div> */}
                      <div className="flex flex-col py-1 px-2 max-sm:w-full">
                        <h1>Equivalent Percentage : </h1>
                        <h1 className="text-blue-500 px-1">
                          {((totalGrade / totalCredits) * 10).toFixed(3)} %
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Image
            src={'/Plane 2.png'}
            height={1}
            width={100000}
            alt=""
            className="w-[20vw] absolute right-0 mt-[-8rem] dark:invert max-lg:w-[30vw] max-sm:hidden"
          />
        <div
          style={{ fontFamily: "yourfont" }}
          className="flex flex-col w-7/12 m-auto  rounded-xl max-sm:w-11/12 "
        >
          <div className="max-sm:w-11/12 max-sm:m-auto py-5">
            <h1 className="text-3xl text-[#706d69] dark:text-white">
              How to calculate CGPA for IPUniversity?
            </h1>
            <p className="text-gray-600 dark:text-gray-400 py-5">
              The formula for calculation of CGPA is given below:
            </p>
            <Image
              src={"/CGPAalgo.png"}
              height={10}
              width={1000}
              alt=""
              className="w-60 opacity-75"
            ></Image>
            <p className="text-gray-600 dark:text-gray-400 py-5 ">
              <p>Where ,</p>
              <p>
                Cni - number of credits of the ith course of the nth semester.
              </p>
              <p>Gni - grade points of the ith course of the nth semester</p>
            </p>
            <h1 className="text-3xl text-[#706d69] dark:text-white">
              In easier words
            </h1>
            <p className="text-gray-600 dark:text-gray-400 pt-5">
              1. It calculates the product of 'credits and grade point' for each
              subject and add them
            </p>
            <p className="text-gray-600 dark:text-gray-400 ">
              2. Then divides the result obtained above by the total number of
              credits
            </p>
            <p className="text-gray-600 dark:text-gray-400 pb-5">
              3. Lastly the final result is  rounded off to 2 decimal places
            </p>

            <h1 className="text-3xl text-[#706d69] dark:text-white">
              Grading System
            </h1>
            <p className="text-gray-600 dark:text-gray-400 pt-5">
              The marks that a student secures from the maximum 100 are to be
              converted into a grade as a letter.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              The grade points are the numerical equivalent of the letter grade
              assigned to a student based on the total marks obtained by the
              student. These grade points and letter grades are based on the
              points scale as given below:
            </p>
            <div>
              <h1 className="capitalize m-auto text-[#706d69] dark:text-white mt-3 text-2xl text-center">
                grade point table
              </h1>
              <Image
                src={"/gradeTable.jpeg"}
                height={10}
                width={1000}
                alt=""
                className="w-1/3 m-auto mb-10 opacity-75 max-sm:w-4/5"
              ></Image>
            </div>
            <p className="text-gray-600 dark:text-gray-400 pt-5">
              Grade P, that is the grade point 4 is the course passing grade
              unless specified otherwise by the Syllabi and Scheme of Teaching
              and Examination for the respective programme.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              For grades below the passing grade (P) as defined in the Syllabi
              and Scheme of Teaching and Examination, the associated grade
              points are to be taken equal to zero.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-5">
              Both the acquired marks and grades are to be reflected on the term
              end marksheets.
            </p>

            <h1 className="text-3xl text-[#706d69] dark:text-white">
              CGPA division
            </h1>
            <p className="text-gray-600 dark:text-gray-400 pt-5">
              The successful candidates having an overall CGPA higher than or
              equal to the minimum CGPA that is specified in the Syllabi and
              Scheme of Teaching and Examination for the award of the degree,
              are to be awarded the degree and be placed in Divisions as below:
            </p>
            <div>
              <ul className="text-gray-600 dark:text-gray-400">
                <li>
                  CGPA of 4.00 – 4.99 are to be placed in the Third Division.
                </li>
                <li>
                  CGPA of 5.00 – 6.49 are to be placed in the Second Division.
                </li>
                <li>
                  CGPA of 6.50 or above are to be placed in the First Division.
                </li>
                <li>
                  CGPA of 10 are to be placed in the Exemplary Performance.
                  Exemplary Performance shall be awarded, if and only if, every
                  course of the programme offered to the student is passed in
                  the first chance of appearing in the paper that is offered to
                  the student. A student with an academic break shall not be
                  awarded the exemplary performance.
                </li>
                <li>
                  The CGPA x 10 shall be deemed equivalent to percentage of
                  marks obtained by the student for the purpose of equivalence
                  to percentage of marks.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </>
  );
};

export default CGPA;
