import React from "react";

import { FaPinterest, FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { SiYoutube } from "react-icons/si";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className=" bg-[rgb(249,247,240)] mt-40 py-10 w-full ">
        <div className="md:flex lg:items-start  flex-wrap lg:m-5 my-12  md:mr-2  justify-between ml-0 px-6">
          <div className="flex justify-between w-full  xl:w-[70%] flex-wrap ">
            <div className="  w-full md:w-52 mx-1 p-1">
              <h2 className=" mb-4 font-medium left-right">Our Promise</h2>

              <p className="mb-4 text-sm">
                Your satisfaction is our top priority.We are always here to
                help:
              </p>
              <p className="text-sm">hello@neiwai.life</p>

              <hr className=" md:hidden w-[96%] mt-6 border-gray-300" />
            </div>

            <div className="flex w-full md:w-60 items-center justify-start md:justify-start mx-1 ">
              <div className=" group w-full mb-4 flex-wrap p-1 md:mt-0 sm:mt-2 mt-2 ">
                <h2 className=" mb-4 font-medium left-right ">
                  Popular Searches
                </h2>

                <div className="hidden group-hover:block md:block ">
                  <ul className="font-normal w-full ">
                    <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                      <a href="#" className="left-right ">
                        Barely Zero{" "}
                      </a>
                    </li>
                    <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                      <a href="#" className="underline-hover-effect">
                        {" "}
                        Pure Comfort
                      </a>
                    </li>
                    <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                      <a href="#" className="underline-hover-effect">
                        {" "}
                        NEIWAI x ANDREA JIAPEI LI{" "}
                      </a>
                    </li>
                    <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                      <a href="#" className="underline-hover-effect">
                        {" "}
                        NEIWAI X Wolford{" "}
                      </a>
                    </li>
                    <li className="hover:text-gray-600 cursor-pointer mb-1 text-sm">
                      <a href="#" className="underline-hover-effect">
                        {" "}
                        NEIWAI x SAVISLOOK{" "}
                      </a>
                    </li>
                    <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                      <a href="#" className="underline-hover-effect">
                        {" "}
                        Gift Card
                      </a>
                    </li>
                    <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                      <a href="#" className="underline-hover-effect">
                        Referral and Rewards Program{" "}
                      </a>
                    </li>
                    <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                      <a href="#" className="underline-hover-effect">
                        Sale
                      </a>
                    </li>
                  </ul>
                </div>
                <hr className="md:hidden w-[96%] mt-6 -my-2 border-gray-300" />
              </div>
            </div>

            <div className="group w-full md:w-44 mx-2">
              <h2 className="mb-4 font-medium my-1 left-right">About Us</h2>

              <div className="hidden group-hover:block md:block">
                <ul className="font-normal w-full">
                  <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                    <a href="#" className="underline-hover-effect">
                      Our Story
                    </a>
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                    <a href="#" className="underline-hover-effect">
                      Our Reviews
                    </a>
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                    <a href="#" className="underline-hover-effect">
                      Track Your Order
                    </a>
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                    <a href="#" className="underline-hover-effect">
                      Shipping & Returns
                    </a>
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                    <a href="#" className="underline-hover-effect">
                      FAQs
                    </a>
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                    <a href="#" className="underline-hover-effect">
                      Contact Us
                    </a>
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                    <a href="#" className="underline-hover-effect">
                      Lookbook
                    </a>
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                    <a href="#" className="underline-hover-effect">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
              <hr className="md:hidden w-[96%] mt-6 border-gray-300" />
            </div>
            <div className=" xl:flex md:w-52 w-full mb-4 mx-2 sm:mt-6 md:mt-0 mt-3 justify-start">
              <div className="  w-full lg:w-48 xl:justify-evenly md:mt-1  ">
                <h2 className=" mb-4 font-medium left-right ">Follow Us</h2>
                <div className="flex space-x-3 justify-start">
                  <div className="bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center text-black ">
                    <FaFacebookF className="text-md  flex lg:text-md cursor-pointer" />
                  </div>
                  <div
                    className="bg-gray-300 text-black rounded-full w-8 h-8 flex items-center justify-center "
                    id="social twitter"
                  >
                    <FaPinterest className="text-md lg:text-md cursor-pointer" />
                  </div>
                  <div className="bg-gray-300 text-black rounded-full w-8 h-8 flex items-center justify-center  ">
                    <GrInstagram className="text-md lg:text-md cursor-pointer " />
                  </div>
                  <div className="bg-gray-300 text-black rounded-full w-8 h-8 flex items-center justify-center  ">
                    <SiYoutube className="text-md lg:text-md cursor-pointer" />
                  </div>
                </div>
                <hr className=" md:hidden w-[96%] mt-8 border-gray-300" />
              </div>
            </div>
          </div>
          <div className="mb-4 mx-2 sm:mx-2 md:mx-0 lg:mr-6 lg:mt-0 md:mt-12">
            <div className="">
              <h2 className="mb-4 font-medium flex left-right">
                Stay in Touch !
              </h2>
              <div className="flex flex-wrap items-center ">
                <div className="relative">
                  <input
                    type="text"
                    id="floating_outlined"
                    className="block md:w-96 sm:w-72 xl:w-56 lg:w-96 w-44 px-2.5 pb-2.5 pt-4  text-sm border text-gray-900 bg-transparent rounded-lg  border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_outlined"
                    className="absolute text-sm text-gray-600 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[rgb(249,247,240)] dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-gray-600 peer-focus:dark:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  >
                    Email adress
                  </label>
                </div>

                <button className=" md:mx-2  text-white rounded-md h-12 border capitalize bg-gray-800 w-20 sm:mx-2  hover:bg-gray-600 ">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" p-4 bg-[rgb(249,247,240)]">
        <p className=" text-sm text-zinc-300 "> Copyright © 2022 NEIWAI </p>
      </div>
    </div>
  );
}

export default Footer;
