import React from "react";
import dri1 from "../src/images/dri1.png";
import dri2 from "../src/images/dri2.png";
import dri3 from "../src/images/dri3.png";
import { TiTick } from "react-icons/ti";

export const App5 = () => {
  return (
    <div className="bg-gray-400 p-5">
      <div className="bg-[rgb(249,247,240)]  rounded-2xl p-2 w-[94%]   mb-2 flex flex-wrap">
        <div className="flex w-full flex-wrap ">
          <div className="w-full lg:w-1/2 ">
            <div></div>
            <div className=" mt-12">
              <div>
                <p className="w-8 h-8 m-3  rounded-full border-black bg-orange-300 text-white flex justify-center items-center">
                  H
                </p>
              </div>
            </div>

            <div className="m-8 mt-16">
              <div className="">
                <div className="flex justify-evenly  items-center w-full  ">
                  <div className="h-28 w-24">
                    <img
                      className="h-28 w-24 object-cover "
                      src={dri1}
                      alt="img"
                    />
                  </div>
                  <div className="flex flex-wrap justify-evenly w-full">
                    <div className="ml-4">
                      <p className="  text-black text-xl ">FuLL deop swaeter</p>
                      <p className="text-sm text-stone-400 ">size: L</p>
                    </div>

                    <div className="flex flex-wrap text-lg items-center ">
                      <div className="flex bg-gray-200 ml-6">
                        <button className=" mr-3 text-md  ">-</button>
                        <p className="bg-[rgb(249,247,240)]">0</p>
                        <button className=" ml-3 ">+</button>
                      </div>
                      <p className=" ml-9 text-black"> $180.89</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16">
                <div className="flex justify-evenly  items-center w-full  ">
                  <div className="h-28 w-24">
                    <img
                      className="h-28 w-24 object-cover "
                      src={dri2}
                      alt="img"
                    />
                  </div>
                  <div className="flex flex-wrap justify-evenly w-full">
                    <div className="ml-4">
                      <p className="  text-black text-xl ">Crew neck swaeter</p>
                      <p className="text-sm text-stone-400 ">size: L</p>
                    </div>

                    <div className="flex flex-wrap text-lg items-center ">
                      <div className="flex bg-gray-200 ml-6">
                        <button className=" mr-3 text-md  ">-</button>
                        <p className="bg-[rgb(249,247,240)] ">0</p>
                        <button className=" ml-3 ">+</button>
                      </div>
                      <p className=" ml-9 text-black"> $180.89</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16">
                <div className="flex justify-evenly  items-center w-full  ">
                  <div className="h-28 w-24">
                    <img
                      className="h-28 w-24 object-cover "
                      src={dri3}
                      alt="img"
                    />
                  </div>
                  <div className="flex flex-wrap justify-evenly w-full">
                    <div className="ml-4">
                      <p className="  text-black text-xl ">FULL ZIP SWEATER</p>
                      <p className="text-sm text-stone-400 ">size: L</p>
                    </div>

                    <div className="flex flex-wrap text-lg items-center ">
                      <div className="flex bg-gray-200 ml-6">
                        <button className=" mr-3 text-md  ">-</button>
                        <p className=" bg-[rgb(249,247,240)]">0</p>
                        <button className=" ml-3 ">+</button>
                      </div>
                      <p className=" ml-9 text-black"> $180.89</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="md:ml-8 sm:ml-6  ">
              <div className="flex ml-2 mt-40   ">
                <TiTick className=" h-6 w-6 rounded-full bg-black text-white " />
                <div className="text-black md:ml-6">
                  <h2 className="ml-2 ">ACCOUNT INFORMATION</h2>
                </div>
              </div>
              <div className="mt-2 ml-12 text-gray-700 md:ml-24">
                <p className=" ">jane cooper</p>
                <p className="">janecoopr@gmail.com</p>
                <div className="lg:w-80 md:w-[86%] ">
                  <hr className="mt-4 border-stone-200   " />
                </div>
              </div>
            </div>
            <div className="md:ml-8 sm:ml-6">
              <div className="flex ml-2 mt-12 ">
                <TiTick className=" h-6 w-6 rounded-full bg-black text-white " />
                <h2 className="ml-2 text-black md:ml-6 ">SHIPPING ADRESS</h2>
              </div>
              <div className="mt-2 ml-12 text-gray-700 md:ml-24">
                <p className=" ">
                  2218 thornridge Cir, syracuse ,connecticut
                  <br /> 34526
                </p>

                <div className="lg:w-80 md:w-[86%] ">
                  <hr className="mt-4 border-stone-200 " />
                </div>
              </div>
            </div>
            <div className="md:ml-8 sm:ml-6 ">
              <div className="flex ml-2 mt-12 ">
                <TiTick className=" h-6 w-6 rounded-full bg-black text-white " />
                <div className="flex text-black md:ml-6">
                  <h2 className="ml-2  ">PAYMENT</h2>
                  <h2 className="ml-2 text-gray-700">master card</h2>
                </div>
              </div>
              <div className="mt-2 ml-12 text-gray-700 md:ml-24">
                <p className=" ">1234 5678 9021 3346</p>
                <p className="">01/11/22</p>
                <div className="lg:w-80 md:w-[86%] ">
                  <hr className="mt-4  border-stone-200 " />
                </div>
              </div>
            </div>
            <div className="md:ml-40 lg:ml-28  sm:ml-40  ml-4  ">
              <button className="p-3 b-1 sm:w-72  text-gray-900  border-orange-700 bg-orange-400 lg:w-64 md:w-96  ml-12 mt-8 hover:bg-orange-200">
                Place Order and pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App5;
