import React from "react";
import One from "../components/images/1stpic.png";
import Two from "../components/images/2ndpic.png";
import Three from "../components/images/3rdpic.png";
import Four from "../components/images/4thpic.png";
import Five from "../components/images/5thpic.png";
import Six from "../components/images/6thpic.png";
import Seven from "../components/images/7thpic.png";
import Eight from "../components/images/8thpic.png";
import Nine from "../components/images/9thpic.png";
import Ten from "../components/images/10thpic.png";
import Eleven from "../components/images/11thpic.png";
import Twelve from "../components/images/12thpic.png";

function Insta() {
  return (
    <div>
      <div>
        <div>
          <h2 className=" border-1 border-gray-100 flex justify-center items-center p-6 text-3xl text-gray-500 w-full">
            A Picture Is Worth A Thousand Words
          </h2>
        </div>
        <div className="">
          <div className="w-full flex flex-wrap h-full justify-center items-center">
            <div className="md:w-64 sm:w-1/3 w-1/2 h-64 overflow-hidden">
              <img
                className="w-full h-full object-cover p-1 "
                src={One}
                alt="img"
              />
            </div>
            <div className="md:w-64 sm:w-1/3   w-1/2 h-64">
              <img
                className="w-full h-full object-cover p-1"
                src={Two}
                alt="img"
              />
            </div>
            <div className="md:w-64 sm:w-1/3  w-1/2 h-64">
              <img
                className="w-full h-full object-cover p-1"
                src={Three}
                alt="img"
              />
            </div>
            <div className="md:w-64 sm:w-1/3  w-1/2 h-64">
              <img
                className="w-full h-full object-cover p-1"
                src={Four}
                alt="img"
              />
            </div>
            <div className="md:w-64 sm:w-1/3  w-1/2 h-64">
              <img
                className="w-full h-full object-cover p-1"
                src={Five}
                alt="img"
              />
            </div>
            <div className="md:w-64 sm:w-1/3  w-1/2  h-64">
              <img
                className="  w-full h-full  object-cover p-1"
                src={Six}
                alt="img"
              />
            </div>
            <div className="md:w-64 sm:w-1/3  w-1/2  h-64">
              <img
                className="  w-full h-full object-cover p-1"
                src={Seven}
                alt="img"
              />
            </div>
            <div className="md:w-64 sm:w-1/3   w-1/2 h-64">
              <img
                className="w-full h-full object-cover p-1"
                src={Eight}
                alt="img"
              />
            </div>
            <div className="md:w-64 sm:w-1/3  w-1/2 h-64">
              <img
                className="  w-full h-full  object-cover p-1"
                src={Nine}
                alt="img"
              />
            </div>
            <div className="md:w-64 sm:w-1/3  w-1/2  h-64">
              <img
                className="w-full h-full    object-cover p-1"
                src={Ten}
                alt="img"
              />
            </div>
            <div className="md:w-64 sm:w-1/3 w-1/2 h-64">
              <img
                className="w-full h-full   object-cover p-1"
                src={Eleven}
                alt="img"
              />
            </div>
            <div className="md:w-64 sm:w-1/3 w-1/2 h-64">
              <img
                className="w-full h-full object-cover p-1"
                src={Twelve}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default Insta;

import React from "react";
import One from "../components/images/1stpic.png";
import Two from "../components/images/2ndpic.png";
import Three from "../components/images/3rdpic.png";
import Four from "../components/images/4thpic.png";
import Five from "../components/images/5thpic.png";
import Six from "../components/images/6thpic.png";
import Seven from "../components/images/7thpic.png";
import Eight from "../components/images/8thpic.png";
import Nine from "../components/images/9thpic.png";
import Ten from "../components/images/10thpic.png";
import Eleven from "../components/images/11thpic.png";
import Twelve from "../components/images/12thpic.png";

import { FaInstagram } from "react-icons/fa";

function Insta() {
  return (
    <div>
      <div>
        <div className="w-full lg:w-[90%] md:w-[80%] flex justify-center items-center lg:mx-20 sm:mx-16 ">
          <h2 className=" border-1 border-gray-100  items-center p-6 text-3xl text-gray-500 ">
            A Picture Is Worth A Thousand Words
          </h2>
        </div>
        <div className="">
          <div className="w-full flex flex-wrap h-full justify-center items-center">
            <div className="md:w-64 sm:w-1/3 w-1/2 h-64 group ">
              <img
                className="w-full h-full object-cover p-1 "
                src={One}
                alt="img"
              />

              <div className=" absolute text-4xl -mt-64 hidden group-hover:block opacity-80 hover:bg-black md:w-64 sm:w-1/3 w-1/2 h-64 bg-cover">
                <h2 className=" text-white  flex items-center justify-center h-full">
                  {" "}
                  <FaInstagram className="w-6 h-6" />
                </h2>
              </div>
            </div>
            <div className="md:w-64 sm:w-1/3   w-1/2 h-64 group  ">
              <img
                className="w-full h-full object-cover p-1  "
                src={Two}
                alt="img"
              />

              <div className=" absolute text-4xl -mt-64 hidden group-hover:block opacity-80 hover:bg-black md:w-64 sm:w-1/3 w-1/2 h-64 bg-cover">
                <h2 className=" text-white  flex items-center justify-center h-full">
                  {" "}
                  <FaInstagram className="w-6 h-6" />
                </h2>
              </div>
            </div>
            <div className="md:w-64 sm:w-1/3  w-1/2 h-64 group">
              <img
                className="w-full h-full object-cover p-1"
                src={Three}
                alt="img"
              />

              <div className=" absolute text-4xl -mt-64 hidden group-hover:block opacity-80 hover:bg-black md:w-64 sm:w-1/3 w-1/2 h-64 bg-cover">
                <h2 className=" text-white  flex items-center justify-center h-full">
                  {" "}
                  <FaInstagram className="w-6 h-6" />
                </h2>
              </div>
            </div>
            <div className="md:w-64 sm:w-1/3  w-1/2 h-64 group">
              <img
                className="w-full h-full object-cover p-1"
                src={Four}
                alt="img"
              />

              <div className=" absolute text-4xl -mt-64 hidden group-hover:block opacity-80 hover:bg-black md:w-64 sm:w-1/3 w-1/2 h-64 bg-cover">
                <h2 className=" text-white  flex items-center justify-center h-full">
                  {" "}
                  <FaInstagram className="w-6 h-6" />
                </h2>
              </div>
            </div>
            <div className="md:w-64 sm:w-1/3  w-1/2 h-64 group">
              <img
                className="w-full h-full object-cover p-1"
                src={Five}
                alt="img"
              />

              <div className=" absolute text-4xl -mt-64 hidden group-hover:block opacity-80 hover:bg-black md:w-64 sm:w-1/3 w-1/2 h-64 bg-cover">
                <h2 className=" text-white  flex items-center justify-center h-full">
                  {" "}
                  <FaInstagram className="w-6 h-6" />
                </h2>
              </div>
            </div>
            <div className="md:w-64 sm:w-1/3  w-1/2  h-64 group ">
              <img
                className="  w-full h-full  object-cover p-1"
                src={Six}
                alt="img"
              />

              <div className=" absolute text-4xl -mt-64 hidden group-hover:block opacity-80 hover:bg-black md:w-64 sm:w-1/3 w-1/2 h-64 bg-cover">
                <h2 className=" text-white  flex items-center justify-center h-full">
                  {" "}
                  <FaInstagram className="w-6 h-6" />
                </h2>
              </div>
            </div>
            <div className="md:w-64 sm:w-1/3  w-1/2  h-64 group">
              <img
                className="  w-full h-full object-cover p-1"
                src={Seven}
                alt="img"
              />

              <div className=" absolute text-4xl -mt-64 hidden group-hover:block opacity-80 hover:bg-black md:w-64 sm:w-1/3 w-1/2 h-64 bg-cover">
                <h2 className=" text-white  flex items-center justify-center h-full">
                  {" "}
                  <FaInstagram className="w-6 h-6" />
                </h2>
              </div>
            </div>
            <div className="md:w-64 sm:w-1/3   w-1/2 h-64 group">
              <img
                className="w-full h-full object-cover p-1 "
                src={Eight}
                alt="img"
              />

              <div className=" absolute text-4xl -mt-64 hidden group-hover:block opacity-80 hover:bg-black md:w-64 sm:w-1/3 w-1/2 h-64 bg-cover">
                <h2 className=" text-white  flex items-center justify-center h-full">
                  {" "}
                  <FaInstagram className="w-6 h-6" />
                </h2>
              </div>
            </div>
            <div className="md:w-64 sm:w-1/3  w-1/2 h-64 group">
              <img
                className="  w-full h-full  object-cover p-1"
                src={Nine}
                alt="img"
              />

              <div className=" absolute text-4xl -mt-64 hidden group-hover:block opacity-80 hover:bg-black md:w-64 sm:w-1/3 w-1/2 h-64 bg-cover">
                <h2 className=" text-white  flex items-center justify-center h-full">
                  {" "}
                  <FaInstagram className="w-6 h-6" />
                </h2>
              </div>
            </div>
            <div className="md:w-64 sm:w-1/3  w-1/2  h-64 group ">
              <img
                className="w-full h-full    object-cover p-1"
                src={Ten}
                alt="img"
              />

              <div className=" absolute text-4xl -mt-64 hidden group-hover:block opacity-80 hover:bg-black md:w-64 sm:w-1/3 w-1/2 h-64 bg-cover">
                <h2 className=" text-white  flex items-center justify-center h-full">
                  {" "}
                  <FaInstagram className="w-6 h-6" />
                </h2>
              </div>
            </div>
            <div className="md:w-64 sm:w-1/3 w-1/2 h-64 group">
              <img
                className="w-full h-full   object-cover p-1"
                src={Eleven}
                alt="img"
              />

              <div className=" absolute text-4xl -mt-64 hidden group-hover:block opacity-80 hover:bg-black md:w-64 sm:w-1/3 w-1/2 h-64 bg-cover">
                <h2 className=" text-white  flex items-center justify-center h-full">
                  {" "}
                  <FaInstagram className="w-6 h-6" />
                </h2>
              </div>
            </div>
            <div className="md:w-64 sm:w-1/3 w-1/2 h-64 group">
              <img
                className="w-full h-full object-cover p-1"
                src={Twelve}
                alt="img"
              />
              <div className=" absolute text-4xl -mt-64 hidden group-hover:block opacity-80 hover:bg-black md:w-64 sm:w-1/3 w-1/2 h-64 bg-cover">
                <h2 className=" text-white  flex items-center justify-center h-full">
                  {" "}
                  <FaInstagram className="w-6 h-6" />
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Insta;
