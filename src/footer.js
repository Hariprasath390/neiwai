import React from "react";

import { FaPinterest, FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { SiYoutube } from "react-icons/si";
import imaag from "../src/images/forbes.png";
import imag from "../src/images/bqf.png";
import imgge from "../src/images/wwd.png";
import image from "../src/images/glossy.png";
import imagg from "../src/images/cosmopolitan.png";
import immag from "../src/images/jing daily.png";

function App() {
  return (
    <div>
      <div className="flex justify-evenly flex-wrap  mt-28 xl:flex xl:flex-wrap  ">
        <div className="group ">
          <div className="group-hover:block hidden absolute py-48 ">
            <p className="text-md flex items-center justify-center  ">
              “A brand that helps customers feel an inner balance is
              particularly valuable right now, as we navigate the transition
              from a stressful pandemic into a post-pandemic world.”
            </p>
          </div>
          <div>
            <img
              className=" group-hover:border-b-4 border-green-500  "
              src={imaag}
              alt="img"
            />
          </div>
        </div>

        <div className="group">
          <div className="group-hover:block hidden absolute py-48">
            <p className="text-sm ">
              China’s leading lingerie brand NEIWAI recently completed a $100
              million Series D financing round. In the first half of this year,
              its total sales increased by 260 percent year-on-year, with
              monthly sales exceeding 200 million yuan ($30.93 million) and an
              annual repurchase rate of more than 50 percent.”
            </p>
          </div>
          <div className="m-1">
            <img
              className=" group-hover:border-b-4 border-sky-500  "
              src={imag}
              alt="img"
            />
          </div>
        </div>
        <div className="group">
          <div className="group-hover:block hidden absolute py-48">
            <p className="text-sm">
              “NEIWAI Raised $100 Million in Series D Funding. The fresh capital
              injection will be used to develop products and categories, raise
              brand awareness and accelerate global expansion.”
            </p>
          </div>
          <div>
            <img
              className=" group-hover:border-b-4 border-indigo-500"
              src={imgge}
              alt="img"
            />
          </div>
        </div>
        <div className="group">
          <div className="group-hover:block hidden absolute py-48">
            <p className="text-sm">
              There is a whole generation of consumers wanting to write new
              narratives for themselves. The brands which continue to drive
              these types of conversations and create a positive space and
              community around them will continue to resonate with consumers.”
            </p>
          </div>
          <div>
            <img
              className=" group-hover:border-b-4 border-yellow-500"
              src={image}
              alt="img"
            />
          </div>
        </div>
        <div className="group">
          <div className="group-hover:block hidden absolute py-48">
            <p className="text-sm">
              “There is a whole generation of consumers wanting to write new
              narratives for themselves. The brands which continue to drive
              these types of conversations and create a positive space and
              community around them will continue to resonate with consumers.”
            </p>
          </div>
          <div>
            <img
              className=" group-hover:border-b-4 border-pink-500"
              src={imagg}
              alt="img"
            />
          </div>
        </div>
        <div className="group">
          <div className="group-hover:block hidden absolute py-48">
            <p className="text-sm">
              "NEIWAI has developed a positive reputation among consumers in
              China for its inclusive sizing and casting of models of all ages
              and shapes in nationwide marketing campaigns."
            </p>
          </div>
          <div>
            <img
              className="bg-black hover:bg-white group-hover:border-b-4 border-black"
              src={immag}
              alt="img"
            />
          </div>
        </div>
      </div>
      <div className=" text-left bg-[rgb(249,247,240)] mt-72 py-12 grid grid-cols-1 ">
        <div className="lg:flex lg:items-start lg:justify-center lg:m-5 my-12 lg: p-4 w-full xl:justify-evenly  ">
          <div className=" m-3 w-full lg:w-56   p-1">
            <h2 className=" mb-4 font-medium ">Our Promise</h2>

            <p className="mb-4 text-sm ">
              Your satisfaction is our top priority. We are always here to help:
            </p>
            <p className=" text-sm  ">hello@neiwai.life</p>

            <hr className=" lg:hidden w-full mt-6 border-black " />
          </div>

          <div className="flex items-center sm: justify-start md:justify-start m-3 w-full lg:w-52">
            <div className="w-full mb-4 md: flex-wrap p-1 ">
              <h2 className=" mb-4 font-medium w-full ">Popular Searches</h2>
              <ul class="font-normal w-full">
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
              <hr className=" lg:hidden w-full mt-6 border-black" />
            </div>
          </div>

          <div className=" m-3 w-full  lg:w-48 ">
            <h2 className=" mb-4 font-medium ">About Us</h2>
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
            <hr className=" lg:hidden w-full mt-6 border-black" />
          </div>

          <div className=" xl:flex w-full lg:w-48 mb-4 ">
            <div className="m-4  w-full lg:w-48 xl:justify-evenly  ">
              <h2 className=" mb-4 font-medium ">Follow Us</h2>
              <div className="flex space-x-3 justify-start  ">
                <div className="bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center">
                  <FaFacebookF className="text-md  flex lg:text-md cursor-pointer" />
                </div>
                <div className="bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center">
                  <FaPinterest className="text-md lg:text-md cursor-pointer " />
                </div>
                <div className="bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center">
                  <GrInstagram className="text-md lg:text-md cursor-pointer" />
                </div>
                <div className="bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center">
                  <SiYoutube className="text-md lg:text-md cursor-pointer" />
                </div>
              </div>
              <hr className=" lg:hidden w-full mt-8 border-black" />
            </div>
          </div>
          <div className="m-4 mb-4   ">
            <h2 className="mb-4 font-medium  "> Stay in Touch! </h2>
            <input
              type="text"
              className="2xl:w-52 lg:w-64 md:w-96 border-2 border-gray-500 p-7 h-10  outline-none"
              placeholder="Emailadress"
            />
            <button className=" sm:mr-12 mt-2 md:ml-2 text-white  border-2 h-16 space-x-2 bg-black px-7 ">
              Sign Up
            </button>
          </div>
        </div>
        <div className=" px-4  2xl:mx-20  xl:mx-12 lg:mx-10 md:mx-46 mx-4">
          <p className=" text-sm "> Copyright © 2022 NEIWAI </p>
        </div>
      </div>
    </div>
  );
}

// export default App;

// new

import React from "react";

import { FaPinterest, FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { SiYoutube } from "react-icons/si";

function App() {
  return (
    <div className="bottom-0 ">
      <div className=" text-left bg-[rgb(206,152,152)] mt-72 py-12 w-full p-2 ">
        <div className="md:flex lg:items-start  flex-wrap lg:m-5 my-12  w-full  justify-between  ">
          <div className="flex justify-evenly md:w-[80%] flex-wrap">
            <div className="  w-full md:w-52   p-1">
              <h2 className=" mb-4 font-medium ">Our Promise</h2>

              <p className="mb-4 text-sm ">
                Your satisfaction is our top priority.We are always here to
                help:
              </p>
              <p className=" text-sm  ">hello@neiwai.life</p>

              <hr className=" md:hidden w-[96%] mt-6 border-black " />
            </div>

            <div className="flex w-full md:w-52 items-center sm: justify-start md:justify-start  ">
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
                <hr className=" md:hidden w-[96%] mt-6 border-black" />
              </div>
            </div>

            <div className="group w-full md:w-52 ">
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
                    Terms of Service and privacy policy
                  </li>
                </ul>
              </div>
              <hr className=" md:hidden w-[96%] mt-6 border-black" />
            </div>

            <div className=" xl:flex md:w-52 w-full mb-4 ">
              <div className="  w-full lg:w-48 xl:justify-evenly  ">
                <h2 className=" mb-4 font-medium ">Follow Us</h2>
                <div className="flex space-x-3 justify-start  ">
                  <div className="bg-black rounded-full w-8 h-8 flex items-center justify-center text-white">
                    <FaFacebookF className="text-md  flex lg:text-md cursor-pointer" />
                  </div>
                  <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center">
                    <FaPinterest className="text-md lg:text-md cursor-pointer " />
                  </div>
                  <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center">
                    <GrInstagram className="text-md lg:text-md cursor-pointer" />
                  </div>

                  <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center">
                    <SiYoutube className="text-md lg:text-md cursor-pointer" />
                  </div>
                </div>
                <hr className=" md:hidden w-[96%] mt-8 border-black" />
              </div>
            </div>
          </div>
          <div className=" mb-4  md:w-[20%] ">
            <h2 className="mb-4 font-medium  "> Stay in Touch! </h2>
            <input
              type="text"
              className="md:w-40 sm:w-72   border-2 border-gray-500 p-2.5  outline-none "
              placeholder="Emailadress"
            />
            <button className=" sm:mr-12 mt-2 md:ml-2 text-white text-xs  border-2 md:mr-2 bg-black p-3.5 sm:mx-2 ">
              Sign Up
            </button>
          </div>
        </div>
        <div className=" px-4  2xl:mx-20  xl:mx-12 lg:mx-10 md:mx-46 sm:mx-12 mx-20">
          <p className=" text-sm "> Copyright © 2022 NEIWAI </p>
        </div>
      </div>
    </div>
  );
}

export default App;
