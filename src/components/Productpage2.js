import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Ben1 from "../components/images/Men1.png";
import { BsFillStarFill } from "react-icons/bs";
import Sc from "../components/images/sc.svg";
// import ReactImageMagnify from "react-image-magnify";
import { useState } from "react";
import { useParams } from "react-router-dom";
import FadeIn from "react-fade-in";
import { FaPinterest, FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { SiYoutube } from "react-icons/si";
import "./Animationn.css";
import brown3 from "../components/images/b6.png";
import c1 from "../components/images/g2.png";
import c2 from "../components/images/g3.png";
import c3 from "../components/images/g4.png";
import b2 from "../components/images/b3.png";
import ben1 from "../components/images/Men1.png";
import One5 from "../components/images/fourone.png";
import One6 from "../components/images/fiveone.png";
import One7 from "../components/images/sixx.png";
import One10 from "../components/images/Men9.png";
import One11 from "../components/images/tenone.png";
import One12 from "../components/images/elevenone.png";
import One13 from "../components/images/twelveone.png";
import bg from "../components/images/bg.png";
import scrollbarHide from "tailwind-scrollbar-hide";

function Productpage2(handleClick) {
  const params = useParams();
  let { productCode, vendor, value } = params;
  let item = { productCode, vendor, value };

  const [pic, setPic] = useState(ben1);

  const [open, setOpen] = useState({
    detail: true,
    care: false,
    return: false,
  });
  console.log(open);
  return (
    <div>
      <div className="flex items-center text-sm w-full p-4  ">
        <p className="text-[rgb(175,157,130)]">Home</p>
        <IoIosArrowForward className="text-[rgb(175,157,130)] ml-2 text-xs " />
        <p className="text-[rgb(175,157,130)] ml-2 ">Men's Collection </p>
        <IoIosArrowForward className="text-[rgb(175,157,130)] ml-2 text-xs" />
        <p className="text-[rgb(175,157,130)] ml-2 ">
          Men's Basic Short Sleeved T-Shirt
        </p>
      </div>
      <div className="  md:grid grid-cols-2  w-full justify-center mt-2 ">
        <div className="">
          <div className=" flex justify-center">
            <div className="xl:w-[56%] md:w-[60%] w-[70%] ">
              <img
                src={pic}
                alt="img "
                className="flex justify-center w-full h-full  "
              />
            </div>
          </div>

          <div className="flex  gap-2 overflow-x-scroll md:overflow-x-hidden mt-6  ">
            <img
              src={brown3}
              alt="img"
              className="w-24 h-24"
              onClick={() => setPic(brown3)}
            />
            <img
              src={One10}
              alt="img"
              className="w-24 h-24   "
              onClick={() => setPic(One10)}
            />
            <img
              src={c1}
              alt="img"
              className="w-24 h-24   "
              onClick={() => setPic(One10)}
            />
            <img
              src={One11}
              alt="img"
              className="w-24 h-24  "
              onClick={() => setPic(One11)}
            />
            <img
              src={c2}
              alt="img"
              className="w-24 h-24  "
              onClick={() => setPic(c2)}
            />{" "}
            <img
              src={b2}
              alt="img"
              className="w-24 h-24  "
              onClick={() => setPic(b2)}
            />
            <img
              src={c3}
              alt="img"
              className="w-24 h-24   "
              onClick={() => setPic(c3)}
            />
            <img
              src={One12}
              alt="img"
              className="w-24 h-24   "
              onClick={() => setPic(One12)}
            />
            <img
              src={One13}
              alt="img"
              className="w-24 h-24  "
              onClick={() => setPic(One13)}
            />
          </div>
        </div>
        <div className=" text-base  ">
          <div>
            <h2 className="font-serif   md:text-3xl text-2xl m-2  ">
              Men's Basic Short Sleeved T-Shirt
            </h2>
            <div className="flex items-center  m-2    ">
              <p className="flex text-[rgb(158,128,87)] text-sm ">
                <BsFillStarFill />
                <BsFillStarFill className="ml-1" />
                <BsFillStarFill className="ml-1 " />
                <BsFillStarFill className="ml-1 " />
                <BsFillStarFill className="ml-1 " />
              </p>
              <p className="ml-2 text-sm text-zinc-800 m-2 ">1 Review</p>
            </div>
            <div>
              <p className="text-xl font-serif  m-2  ">$49.00 </p>
            </div>
            <div className="xl:flex mt-1 font-serif m-1  ">
              <p className="text-md m-1 ">
                Pay in 4 interest-free installments for orders over $50.00 with
                <span className=" lg:ml-2 sm:ml-1 ml-1    text-blue-600">
                  Shop Pay
                </span>
                <span className=" lg:ml-2 sm:ml-1   text-orange-900">
                  Learn more
                </span>
              </p>
            </div>
            <div className="flex items-center mt-2 m-2   ">
              <p className="">Size</p>

              <p className="ml-3 ">
                <img src={Sc} alt="svg" className="w-8 h-8 " />
              </p>

              <p className="ml-3 ">Find Your Size</p>
            </div>
            <div className="mt-2 font-mono m-2  ">
              <button className="text-gray-600 border-black  border w-8 h-8  hover:border-stone-700 hover:text-white hover:bg-black">
                XS
              </button>
              <button className="text-gray-900 border-black  border w-7 h-8 ml-2  hover:border-stone-700 hover:text-white hover:bg-black">
                S
              </button>
              <button className="text-gray-900 border-black  border w-7 h-8 ml-3 hover:border-stone-700 hover:text-white hover:bg-black">
                M
              </button>

              <button className="text-gray-900 border-black  border w-7 h-8 ml-3 hover:border-stone-700 hover:text-white hover:bg-black">
                L
              </button>
              <button className="text-gray-600 border-black  border w-8  h-8 ml-3 hover:border-stone-700 hover:text-white hover:bg-black">
                XL
              </button>
              {/* <button className="text-gray-400 border-black  border w-10 h-9 ml-3 hover:border-stone-700 hover:text-white hover:bg-black">
                XXL
              </button> */}
            </div>
            <div>
              <p className="mt-8 m-2 ">color:Russet Brown </p>
            </div>
            <div className="flex justify-start mt-1 m-2 ">
              <p
                className="border rounded-full w-6 h-6 mt-2 border-black  
               bg-[rgb(169,166,160)]"
                onClick={() => setPic(Ben1)}
              ></p>
              <p
                className="border rounded-full w-6 h-6 ml-2 mt-2 border-black  bg-[rgb(160,82,45)]"
                onClick={() => setPic(b2)}
              ></p>
              <p
                className="border rounded-full w-6 h-6 ml-2 mt-2 border-black  bg-[rgb(74,54,47)]"
                onClick={() => setPic(One13)}
              ></p>
            </div>
            <div>
              <p className="mt-6 m-2 "> Availability: </p>
            </div>
            <div className="m-2 ">
              <div className="grid grid-cols-6    mt-3 ">
                <select className=" h-10 col-span-1  block  font-normal  border-black  text-gray-700  border border-solid bg-white bg-clip-padding bg-no-repeat text-sm focus:bg-white focus:outline-none">
                  <option value="1" className="hover:bg-blue-500  ">
                    1
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </select>

                <button className="border border-black bg-black text-white  h-10 mx-2   col-span-5 xl:w-[80%]  w-[90%] ">
                  ADD TO CART
                </button>
              </div>
            </div>
            <div>
              <p className="mt-6  m-2   ">Share this:</p>
            </div>
            <div className="flex space-x-3 m-2   mt-3  justify-start">
              <div className="bg-black  rounded-full w-6 h-6 flex items-center justify-center text-white  text-xs ">
                <FaFacebookF className="text-md  flex lg:text-md cursor-pointer" />
              </div>
              <div className="bg-black  text-white  rounded-full w-6 h-6 flex items-center justify-center text-xs">
                <FaPinterest className="text-md lg:text-md cursor-pointer" />
              </div>
              <div className="bg-black  text-white  rounded-full w-6 h-6 flex items-center justify-center text-xs  ">
                <GrInstagram className="text-md lg:text-md cursor-pointer " />
              </div>
              <div className="bg-black  text-white  rounded-full w-6 h-6 flex items-center justify-center  text-xs ">
                <SiYoutube className="text-md lg:text-md cursor-pointer" />
              </div>
              <div> </div>
            </div>
          </div>
          <div>
            <FadeIn className="delay-1000 duration-700">
              <p className="mt-7 m-2  text-gray-600 font-serif text-md">
                <span>
                  Lounge around or hit the town with our simple yet versatile
                  Basic Short Sleeved T-Shirt, our take on a timeless classic
                  with the perfect balance of polish and ease to pair
                  effortlessly with your favorite pants or shorts!
                </span>
                {/* <span>
                  Lounge around or hit the town with our simple yet versatile
                  basic short sleeved t-shirt, our take on a timeless classic
                  with the perfect balancde of polish and ease to pair
                  effortlessly with your favorite pants or shorts!
                  lounge around or hit the town with our simple yet versatile
                  basic short sleeved t-shirt ,ourc takes on a timeless classic 
                  with the perfect balance of polish and ease to pair effortlesy 
                  with with your favorite pants or shorts!
        
                </span> */}
              </p>
            </FadeIn>
          </div>
          <div className="mt-5 ">
            <div className="m-2 ">
              <div className="grid grid-cols-3 ">
                <button
                  className="text-start font-serif text-gray-400 "
                  onClick={() =>
                    setOpen({
                      ...open,
                      detail: true,
                      care: false,
                      return: false,
                    })
                  }
                >
                  Details
                </button>

                <button
                  className=" text-center  font-serif text-gray-400 "
                  onClick={() =>
                    setOpen({
                      ...open,
                      detail: false,
                      care: true,
                      return: false,
                    })
                  }
                >
                  Materials & Care
                </button>
                <button
                  className=" text-end font-serif text-gray-400 "
                  onClick={() =>
                    setOpen({
                      ...open,
                      detail: false,
                      care: false,
                      return: true,
                    })
                  }
                >
                  Shipping & Returns
                </button>
              </div>
              <div className="mt-2 text-gray-700">
                {open.detail && (
                  <div className="font-serif  ">
                    <p>
                      • Short sleeved, crewneck, finely woven for a smooth
                      texture and form durability.
                    </p>
                    <p>
                      • A wardrobe staple equally perfect on its own or worn as
                      an undershirt.
                    </p>
                    <p>
                      • Made from 100% top-quality cotton: lightweight, soft,
                      and breathable.
                    </p>
                  </div>
                )}
                {open.care && (
                  <div className="font-serif  ">
                    <p>• Material: 100% cotton.</p>
                    <p>
                      • Care instructions: Hand or machine wash and dry
                      according to instructions on the care label using a mild
                      laundry detergent.
                    </p>
                  </div>
                )}

                {open.return && (
                  <div className="font-serif  ">
                    <p>• Free Shipping on US orders of $50+</p>
                    <p>• Free returns within 30 days!</p>
                    <p className="mx-2">
                      You can review our shipping and returns policy here.
                    </p>
                  </div>
                )}
              </div>
              <p className="font-serif mt-6 text-stone-600  ">
                Questions? <span>Email us </span>
              </p>
            </div>
            <div className="mt-10 ">
              <p className="text-center font-serif text-xl text-zinc-600 py-10 ">
                Complete the look
              </p>
              <div className="2xl:flex grid lg:grid-cols-3 gap-2 md:justify-evenly justify-center w-full ">
                <div className="w-44   ">
                  <img src={One5} alt="fiug" />
                  <p className="text-center   mt-2 mb-20 ">
                    Men's Basic Long Sleeved T-shirt
                  </p>
                </div>

                <div className="w-44  ">
                  <img src={One6} alt="fiug" />
                  <p className="text-center mt-2 mb-20  ">
                    Men's Modal Brief 2.0
                  </p>
                </div>

                <div className="w-44  ">
                  <img src={One7} alt="img" />
                  <p className="text-center  mt-2 ">Men's Lounge Pants </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productpage2;
