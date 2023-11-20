import React from "react";
import One from "../components/images/insta10.png";
import Two from "../components/images/insta2.png";
import Three from "../components/images/insta3.png";
import Four from "../components/images/insta4.png";
import Five from "../components/images/insta5.png";
import Six from "../components/images/insta6.png";
import Seven from "../components/images/insta7.png";
import Eight from "../components/images/insta8.png";
import Nine from "../components/images/insta9.png";
import Ten from "../components/images/insta1.png";
import Eleven from "../components/images/insta11.png";
import Twelve from "../components/images/insta12.png";

import { FaInstagram } from "react-icons/fa";

function Insta() {
  return (
    <div className=" flex justify-evenly mt-14">
      <div>
        <div className="w-full  ">
          <h2 className=" border-1 border-gray-100 flex justify-center items-center text-center p-6 text-3xl text-gray-500 ">
            A Picture Is Worth A Thousand Words
          </h2>
        </div>
        <div className="">
          <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4  ">
            <div className=" relative group ">
              <div className=" absolute text-4xl  hidden group-hover:block  hover:bg-black/70  w-full h-full">
                <a
                  href="https://www.instagram.com/p/Ck3KgGohTcY/?utm_source=ig_web_copy_link"
                  target="blank"
                >
                  <h2 className="  text-white  flex items-center justify-center h-full ">
                    <FaInstagram className="w-6 h-6" />
                  </h2>
                </a>
              </div>{" "}
              <img className="w-full h-full " src={One} alt="img" />
            </div>

            <div className="relative group  ">
              <div className=" absolute text-4xl  hidden group-hover:block hover:bg-black/70 w-full h-full">
                <a
                  href="https://www.instagram.com/p/Cj5Z6OoBt1T/?utm_source=ig_web_copy_link"
                  target="blank"
                >
                  <h2 className=" text-white  flex items-center justify-center h-full">
                    <FaInstagram className="w-6 h-6" />
                  </h2>
                </a>
              </div>
              <img className="w-full h-full   " src={Two} alt="img" />
            </div>

            <div className="relative   group">
              <div className=" absolute text-4xl  hidden group-hover:block  hover:bg-black/70 w-full h-full ">
                <a
                  href="https://www.instagram.com/p/CkAK_xchDJD/?utm_source=ig_web_copy_link"
                  target="blank "
                >
                  <h2 className=" text-white  flex items-center justify-center h-full">
                    <FaInstagram className="w-6 h-6" />
                  </h2>
                </a>
              </div>
              <img className="w-full h-full " src={Three} alt="img" />
            </div>

            <div className="  relative group">
              <div className=" absolute text-4xl hidden group-hover:block  hover:bg-black/70 w-full h-full">
                <a
                  href="https://www.instagram.com/p/CkXUB2fhLk0/?utm_source=ig_web_copy_link"
                  target="blank "
                >
                  <h2 className=" text-white  flex items-center justify-center h-full">
                    <FaInstagram className="w-6 h-6" />
                  </h2>{" "}
                </a>
              </div>
              <img className="w-full h-full " src={Four} alt="img" />
            </div>

            <div className=" relative  group">
              <div className=" absolute text-4xl  hidden group-hover:block  hover:bg-black/70 w-full h-full ">
                <a
                  href="https://www.instagram.com/p/ClaO7AQhNoc/?utm_source=ig_web_copy_link"
                  target="blank"
                >
                  <h2 className=" text-white  flex items-center justify-center h-full">
                    <FaInstagram className="w-6 h-6" />
                  </h2>
                </a>
              </div>
              <img className="w-full h-full  " src={Five} alt="img" />
            </div>

            <div className=" relative  group ">
              <div className=" absolute text-4xl hidden group-hover:block  hover:bg-black/70 w-full h-full  ">
                <a
                  href="https://www.instagram.com/p/ClVFd5Ih7Pg/?utm_source=ig_web_copy_link"
                  target="blank "
                >
                  <h2 className=" text-white  flex items-center justify-center h-full">
                    <FaInstagram className="w-6 h-6" />
                  </h2>{" "}
                </a>
              </div>
              <img
                className="  w-full h-full  object-cover p-0.5"
                src={Six}
                alt="img"
              />
            </div>

            <div className=" relative group">
              <div className=" absolute text-4xl  hidden group-hover:block  hover:bg-black/70 w-full h-full ">
                <a
                  href="https://www.instagram.com/p/Ck-3bZFBS2D/?utm_source=ig_web_copy_link"
                  target="blank "
                >
                  <h2 className=" text-white  flex items-center justify-center h-full">
                    <FaInstagram className="w-6 h-6" />
                  </h2>
                </a>
              </div>
              <img className="  w-full h-full  " src={Seven} alt="img" />
            </div>
            <div className=" relative group">
              <div className=" absolute text-4xl  hidden group-hover:block  hover:bg-black/70 w-full h-full  ">
                <a
                  href="https://www.instagram.com/p/Ck96vFtBA5c/?utm_source=ig_web_copy_link"
                  target="blank"
                >
                  <h2 className=" text-white  flex items-center justify-center h-full">
                    <FaInstagram className="w-6 h-6" />
                  </h2>
                </a>
              </div>
              <img className="w-full h-full  " src={Eight} alt="img" />
            </div>
            <div className=" relative group">
              <div className=" absolute text-4xl hidden group-hover:block  hover:bg-black/70 w-full h-full">
                <a
                  href="https://www.instagram.com/p/Ck7deYwBwp0/?utm_source=ig_web_copy_link"
                  target="blank"
                >
                  <h2 className=" text-white flex items-center justify-center h-full">
                    <FaInstagram className="w-6 h-6" />
                  </h2>{" "}
                </a>
              </div>
              <img className="  w-full h-full  " src={Nine} alt="img" />
            </div>
            <div className=" relative group ">
              <div className=" absolute text-4xl hidden group-hover:block hover:bg-black/50 w-full h-full  ">
                <a
                  href="https://www.instagram.com/p/Cjua-gxhh0B/?utm_source=ig_web_copy_link"
                  target="blank"
                >
                  <h2 className=" text-white  flex items-center justify-center h-full">
                    <FaInstagram className="w-6 h-6" />
                  </h2>{" "}
                </a>
              </div>
              <img className="w-full h-full " src={Ten} alt="img" />
            </div>
            <div className=" relative   group">
              <div className=" absolute text-4xl  hidden group-hover:block  hover:bg-black/70 w-full h-full ">
                <a
                  href="https://www.instagram.com/p/Ck2QJwGhzqa/?utm_source=ig_web_copy_link"
                  target="blank "
                >
                  <h2 className=" text-white  flex items-center justify-center h-full">
                    <FaInstagram className="w-6 h-6" />
                  </h2>
                </a>
              </div>
              <img className="w-full h-full " src={Eleven} alt="img" />
            </div>
            <div className="  relative group">
              <div className=" absolute text-4xl hidden group-hover:block  hover:bg-black/70 w-full h-full ">
                <a
                  href="https://www.instagram.com/p/CkxEB3jBv2R/?utm_source=ig_web_copy_link"
                  target="blank"
                >
                  <h2 className=" text-white  flex items-center justify-center h-full">
                    <FaInstagram className="w-6 h-6" />
                  </h2>
                </a>
              </div>
              <img className="w-full h-full " src={Twelve} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Insta;
