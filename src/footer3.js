import React from "react";

import { FaPinterest, FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { SiYoutube } from "react-icons/si";

function App() {
  return (
    <div>
      <div className="  bg-[rgb(249,247,240)] mt-80 py-12 w-full  ">
        <div className="md:flex lg:items-start  flex-wrap lg:m-5 my-12  md:mr-2  justify-between  ">
          <div className="flex justify-evenly md:w-[60%] lg:w-[79%] flex-wrap">
            <div className="  w-full md:w-52 mx-1   p-1">
              <h2 className=" mb-4 font-medium ">Our Promise</h2>

              <p className="mb-4 text-sm ">
                Your satisfaction is our top priority.,We are always
                <br /> here to help:
              </p>
              <p className="text-sm">hello@neiwai.life</p>

              <hr className=" md:hidden w-[96%] mt-6 border-gray-300 " />
            </div>

            <div className="flex w-full md:w-60 items-center justify-start md:justify-start mx-1 ">
              <div className=" group w-full mb-4  md: flex-wrap p-1 ">
                <h2 className=" mb-4 font-medium ">Popular Searches</h2>

                <div className="hidden group-hover:block md:block ">
                  <ul className="font-normal w-full ">
                    <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                      Barely Zero
                    </li>
                    <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                      Pure Comfort
                    </li>
                    <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                      NEIWAI x ANDREA JIAPEI LI
                    </li>
                    <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                      NEIWAI X Wolford
                    </li>
                    <li className="hover:text-gray-600 cursor-pointer mb-1 text-sm">
                      NEIWAI x SAVISLOOK
                    </li>
                    <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                      Gift Card
                    </li>
                    <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                      Referral and Rewards Program
                    </li>
                    <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                      Sale
                    </li>
                  </ul>
                </div>
                <hr className=" md:hidden w-[96%] mt-6 border-gray-300" />
              </div>
            </div>

            <div className="group w-full md:w-44 mx-2 ">
              <h2 className=" mb-4 font-medium my-1 ">About Us</h2>

              <div className="hidden group-hover:block md:block">
                <ul className="font-normal w-full">
                  <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                    Our Story
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                    Our Reviews
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                    Track Your Order
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                    Shipping & Returns
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                    FAQs
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                    Contact Us
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                    Lookbook
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                    Terms of Service 
                  </li>
                </ul>
              </div>
              <hr className=" md:hidden w-[96%] mt-6 border-gray-300" />
            </div>

            <div className=" xl:flex md:w-52 w-full mb-4 mx-2 justify-start">
              <div className="  w-full lg:w-48 xl:justify-evenly md:mt-0  ">
                <h2 className=" mb-4 font-medium ">Follow Us</h2>
                <div className="flex space-x-3 justify-start  ">
                  <div className="bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center text-black ">
                    <FaFacebookF className="text-md  flex lg:text-md cursor-pointer" />
                  </div>
                  <div className="bg-gray-300 text-black rounded-full w-8 h-8 flex items-center justify-center ">
                    <FaPinterest className="text-md lg:text-md cursor-pointer " />
                  </div>
                  <div className="bg-gray-300 text-black rounded-full w-8 h-8 flex items-center justify-center  ">
                    <GrInstagram className="text-md lg:text-md cursor-pointer " />
                  </div>
                  <div className="bg-gray-300 text-black rounded-full w-8 h-8 flex items-center justify-center ">
                    <SiYoutube className="text-md lg:text-md cursor-pointer" />
                  </div>
                </div>
                <hr className=" md:hidden w-[96%] mt-8 border-gray-300" />
              </div>
            </div>
          </div>
          <div className=" mb-4  md:w-[40%] lg:w-[21%]  mx-2 sm:mx-2 md:mx-0">
            <div className="">
              <h2 className="mb-4 font-medium flex   ">
          
                Stay in Touch!
              </h2>
              <div className="flex items-center lg:w-22 ">
                <input
                  type="text"
                  className="md:w-52 sm:w-72 lg:w-48 w-44 h-12 border-2 border-gray-500 p-2.5  outline-none "
                  placeholder="Emailadress"
                />
                <button className=" md:mx-2  text-white  h-12 border-2 capitalize bg-gray-800 w-20 sm:mx-2 mx-3 hover:bg-gray-600 ">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className=" p-4     bg-[rgb(249,247,240)]  ">
          <p className=" text-sm text-zinc-300 "> Copyright © 2022 NEIWAI </p>
        </div>
    </div>
  );
}

// export default App;

// import React from "react";

// import { FaPinterest, FaFacebookf } from "react-icons/fa";
// import { GrInstagram } from "react-icons/gr";
// import { SiYoutube } from "react-icons/si";

function App2() {
  return (
    <div>
      <div className="  bg-[rgb(249,247,240)] mt-80 py-12 w-full  ">
        <div className="md:flex lg:items-start  flex-wrap lg:m-5 my-12  md:mr-2  justify-between ml-0 px-6">
          <div className="flex justify-between w-full  xl:w-[70%] flex-wrap ">
            <div className="  w-full md:w-52 mx-1   p-1">
              <h2 className=" mb-4 font-medium ">Our Promise</h2>

              <p className="mb-4 text-sm ">
                Your satisfaction is our top priority.We are always
                 here to help:
              </p>
              <p className="text-sm">hello@neiwai.life</p>

              <hr className=" md:hidden w-[96%] mt-6 border-gray-300 " />
            </div>

            <div className="flex w-full md:w-60 items-center justify-start md:justify-start mx-1 ">
              <div className=" group w-full mb-4 flex-wrap p-1 md:mt-0 sm:mt-2 mt-2 ">
                <h2 className=" mb-4 font-medium ">Popular Searches</h2>

                <div className="hidden group-hover:block md:block ">
                  <ul className="font-normal w-full ">
                    <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                      Barely Zero
                    </li>
                    <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                      Pure Comfort
                    </li>
                    <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                      NEIWAI x ANDREA JIAPEI LI
                    </li>
                    <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                      NEIWAI X Wolford
                    </li>
                    <li className="hover:text-gray-600 cursor-pointer mb-1 text-sm">
                      NEIWAI x SAVISLOOK
                    </li>
                    <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                      Gift Card
                    </li>
                    <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                      Referral and Rewards Program
                    </li>
                    <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                      Sale
                    </li>
                  </ul>
                </div>
                <hr className=" md:hidden w-[96%] mt-6 -my-2 border-gray-300" />
              </div>
            </div>

            <div className="group w-full md:w-44 mx-2 ">
              <h2 className=" mb-4 font-medium my-1 ">About Us</h2>

              <div className="hidden group-hover:block md:block">
                <ul className="font-normal w-full">
                  <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                    Our Story
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                    Our Reviews
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                    Track Your Order
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                    Shipping & Returns
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                    FAQs
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                    Contact Us
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                    Lookbook
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer mb-2 text-sm">
                    Terms of Service 
                  </li>
                </ul>
              </div>
              <hr className=" md:hidden w-[96%] mt-6 border-gray-300" />
            </div>

            <div className=" xl:flex md:w-52 w-full mb-4 mx-2 sm:mt-6 md:mt-0 mt-3 justify-start">
              <div className="  w-full lg:w-48 xl:justify-evenly md:mt-1  ">
                <h2 className=" mb-4 font-medium ">Follow Us</h2>
                <div className="flex space-x-3 justify-start  ">
                  <div className="bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center text-black ">
                    <FaFacebookF className="text-md  flex lg:text-md cursor-pointer" />
                  </div>
                  <div className="bg-gray-300 text-black rounded-full w-8 h-8 flex items-center justify-center ">
                    <FaPinterest className="text-md lg:text-md cursor-pointer " />
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
          <div className=" mb-4    mx-2 sm:mx-2 md:mx-0 lg:mr-6 lg:mt-0 md:mt-12 ">
            <div className="">
              <h2 className="mb-4 font-medium flex   ">
          
                Stay in Touch!
              </h2>
              <div className="flex items-center ">
                <input
                  type="text"
                  className="md:w-96 sm:w-72 lg:w-56 w-44 h-12 border border-gray-500 p-2.5  outline-none rounded-md"
                  placeholder="Emailadress"
                />
                <button className=" md:mx-2  text-white rounded-md h-12 border capitalize bg-gray-800 w-20 sm:mx-2 mx-3 hover:bg-gray-600 ">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className=" p-4     bg-[rgb(249,247,240)]  ">
          <p className=" text-sm text-zinc-300 "> Copyright © 2022 NEIWAI </p>
        </div>
    </div>
  );
}

// export default App;

