"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/Sidebar";
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

  const Percentage = (totalMarksgain / totalMarks) * 100;
  const CreditPercentage = totalProduct / totalCredits;
  const GradePercentage = totalGrade / totalCredits;


  return (
    <>
    <div className='bg-[url("../../public/Background.png")] dark:bg-[url("../../public/Background_dark.png")] drop'>
      <ToastContainer />
      <Navbar params = "CGPA"/>

      <div className="max-sm:hidden">
      <Sidebar />
      </div>
      <div style={{ fontFamily: "YourFont" }} className='flex flex-col py-40 max-sm:pb-20'>
        <h1 className="text-3xl m-auto">CGPA calculator</h1>
        <div className="flex justify-center mt-10 max-sm:flex-col ">
          <div className="flex flex-col">
            <div className="flex max-sm:justify-center max-sm:px-2 max-sm:m-auto">
              <div className="">
                <h1 className="capitalize text-sm dark:text-gray-300 text-gray-700 text-l my-2">
                  select your college
                </h1>
                <select className="p-2 w-[250px] rounded text-center mx-2 text-sm max-sm:w-[210px]">
                  <option value="someOption">IPU</option>
                </select>
              </div>
              <div>
                <h1 className="capitalize text-sm dark:text-gray-300 text-gray-700 text-l my-2 px-3 max-sm:px-0">
                  number of subjects
                </h1>
                <input
                  value={SubNumber}
                  onChange={handleNumberChange}
                  type="number"
                  className="p-1 border w-[50px] m-auto rounded text-center flex"
                />
              </div>
            </div>
            <div className="flex flex-col mx-auto mt-3">
              <div className="flex mt-2">
                <p className="p-1 text-gray-700 dark:text-gray-300 mx-2 w-[90px] text-center">
                  Subject no.
                </p>
                <p className="p-1 text-gray-700 dark:text-gray-300 mx-2 w-[70px] text-center">
                  Number
                </p>
                <p className="p-1 text-gray-700 dark:text-gray-300 mx-2 w-[70px] text-center">
                  Credit
                </p>
              </div>
              {Array.from({ length: SubNumber }, (_, index) => (
                <div className="flex mt-2" key={index}>
                  <p className="p-1 mx-2 w-[90px] text-center">{index + 1}.</p>
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
                    className="p-1 border mx-2 w-[70px] text-center"
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
                    className="p-1 border mx-2 w-[70px] text-center"
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
                  : "bg-blue-600 cursor-pointer"
              } flex rounded-full h-40 w-40 justify-center items-center uppercase m-auto tracking-wider transition-all duration-700`}
            >
              {!calculation ? "calculate" : `SGPA : ${GradePercentage}`}
            </button>

            <div className={` ${
                  calculation ? "flex" : "hidden"
                } min-h-[12.5rem] `}>
              <div
                className={`${
                  calculation ? "flex" : "hidden"
                } flex-wrap text-center mt-8 transition-all duration-700`}
              >
                <div className="flex flex-col w-1/2 py-1 px-2 ">
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
                    {(totalGrade / totalCredits) * 10} %
                  </h1>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{fontFamily : "yourfont"}} className="flex flex-col w-8/12 m-auto max-sm:w-11/12">
        <h1 className="text-3xl dark:text-gray-300 text-gray-700">
          How to calculate CGPA for IPUniversity?
        </h1>
        <p className="text-gray-500 py-5">
          The formula for calculation of CGPA is given below:
        </p>
        <Image
          src={"/CGPAalgo.png"}
          height={10}
          width={1000}
          alt=""
          className="w-60 opacity-75"
        ></Image>
        <p className="text-gray-500 py-5 ">
          <p>Where ,</p>
          <p>Cni - number of credits of the ith course of the nth semester.</p>
          <p>Gni - grade points of the ith course of the nth semester</p>
        </p>
        <h1 className="text-3xl dark:text-gray-300 text-gray-700">In easier words</h1>
        <p className="text-gray-500 pt-5">
          1. It calculates the product of 'credits and grade point' for each
          subject and add them
        </p>
        <p className="text-gray-500 ">
          2. Then divides the result obtained above by the total number of credits
        </p>
        <p className="text-gray-500 pb-5">
          3. Lastly the final result is rounded off to 2 decimal places
        </p>

        <h1 className="text-3xl dark:text-gray-300 text-gray-700">Grading System</h1>
        <p className="text-gray-500 pt-5">
          The marks that a student secures from the maximum 100 are to be
          converted into a grade as a letter.
        </p>
        <p className="text-gray-500">
          The grade points are the numerical equivalent of the letter grade
          assigned to a student based on the total marks obtained by the
          student. These grade points and letter grades are based on the points
          scale as given below:
        </p>
        <div>
          <h1 className="capitalize m-auto dark:text-gray-400 mt-3 text-2xl text-center">grade point table</h1>
        <Image
          src={"/gradeTable.jpeg"}
          height={10}
          width={1000}
          alt=""
          className="w-1/3 m-auto mb-10 opacity-75 max-sm:w-4/5"
        ></Image>
        </div>
        <p className="text-gray-500 pt-5">
          Grade P, that is the grade point 4 is the course passing grade unless
          specified otherwise by the Syllabi and Scheme of Teaching and
          Examination for the respective programme.
        </p>
        <p className="text-gray-500">
          For grades below the passing grade (P) as defined in the Syllabi and
          Scheme of Teaching and Examination, the associated grade points are to
          be taken equal to zero.
        </p>
        <p className="text-gray-500 mb-5">
          Both the acquired marks and grades are to be reflected on the term end
          marksheets.
        </p>

        <h1 className="text-3xl dark:text-gray-300 text-gray-700">CGPA division</h1>
        <p className="text-gray-500 pt-5">
          The successful candidates having an overall CGPA higher than or equal
          to the minimum CGPA that is specified in the Syllabi and Scheme of
          Teaching and Examination for the award of the degree, are to be
          awarded the degree and be placed in Divisions as below:
        </p>
        <div >
        <ul className="text-gray-500 mb-20">
          <li>CGPA of 4.00 – 4.99 are to be placed in the Third Division.</li>
          <li>CGPA of 5.00 – 6.49 are to be placed in the Second Division.</li>
          <li>CGPA of 6.50 or above are to be placed in the First Division.</li>
          <li>
            CGPA of 10 are to be placed in the Exemplary Performance. Exemplary
            Performance shall be awarded, if and only if, every course of the
            programme offered to the student is passed in the first chance of
            appearing in the paper that is offered to the student. A student
            with an academic break shall not be awarded the exemplary
            performance.
          </li>
          <li>
            The CGPA x 10 shall be deemed equivalent to percentage of marks
            obtained by the student for the purpose of equivalence to percentage
            of marks.
          </li>
        </ul>
        </div>
      </div>
    </div>
      <Footer/>
    </>
  );
};

export default CGPA;
