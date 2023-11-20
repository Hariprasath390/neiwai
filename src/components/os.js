import React from "react";
import My2 from "../components/images/my23.png";
import my12 from "../components/images/my12.png";
import Os from "../components/images/Os.png";
import Pic from "./Pic";
// import Of from "../components/images/Office.png";

function Ourstory() {
  return (
    <div>
      <div>
      
        <div className="flex flex-wrap  w-full  justify-center py-12 p shadow-lg bg-[rgb(249,247,240)] ">
          <div className=" sm:w-96 w-80 ml-5 bg-[rgb(178,166,162)]    ">
            <h2 className="sm:font-bold font-semibold text-3xl text-zinc-700 sm:w-96 w-72  md:text-start text-center ">
              Minimalist Modern Dinner Set Sollution
            </h2>
            <p className="sm:w-80 text-stone-700 mt-6 md:text-start  text-normal text-center w-72   ">
              With Affordable Price With High Quality Standard We provide you
              with the best dress collection in india
            </p>
            <button className="border border-gray-500 bg-gray-500 text-white mt-6  w-64 sm:ml-0  hidden md:block  ">
              Learn More
            </button>
          </div>
          <div className=" md:ml-10  m-4 sm:m-1    ">
            <img src={My2} alt="img" className=" sm:mt-3 mt-5 mb-10  " />
          </div>
        </div>
        <div className="flex flex-wrap  w-full  justify-center py-12  shawdow-lg bg-[rgb(249,247,240)] ">
          <div className=" md:ml-10  m-4 sm:m-1  ">
            <img src={my12} alt="img" className=" sm:mt-3 mt-5 mb-10" />
          </div>
          <div className=" sm:w-96 w-80  ml-5  mt-1 bg-[rgb(178,166,162)]   ">
            <h2 className="sm:font-bold font-semibold text-3xl text-zinc-700 sm:w-96 w-72  md:text-start text-center ">
              Minimalist Modern Dinner Set Sollution
            </h2>
            <p className="sm:w-80 text-stone-700 mt-6 md:text-start  text-normal text-center w-72 mb-10 ">
              With Affordable Price With High Quality Standard We provide you
              with the best dress collection in india
            </p>
            <button className="border border-gray-500 bg-gray-500 text-white mt-6  w-64 sm:ml-0  hidden md:block  ">
              Learn More
            </button>
          </div>
        </div>

        <Pic />
      </div>
    </div>
  );
}

export default Ourstory;
