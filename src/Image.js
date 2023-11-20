import React, { useState } from "react";

// import { AiOutlineDown } from "react-icons/ai";
import { BiSearch, BiShoppingBag } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";

import neiwai from "../src/images/neiwai.png";
import "../src/infinite.css";
import "../src/Animation.css";
import "../src/Beauty.css";
import Caart from "./components/Caart";

function Image() {
  const [open, setOpen] = useState(false);
  console.log(open);

  const ShowCart = () => {
    setOpen(!open);
  };

  return (
    <div className="">
      <div className="">
        <div className="border-2 border-black bg-black sm:w-full  col-md-12 text-center">
          <div class="animate-contain">
            <div class="animated-text">
              <span className="animate-charcter flex justify-center ">
                Free US Shipping On Order $50+!
              </span>
              <span className="animate-charcter flex justify-center -my-1 ">
                lets go
              </span>
              <span className="animate-charcter flex justify-center -my-1 ">
                lets get it
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-1 p-4 border-gray-300 bg-white">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="flex justify-between ">
          <img className="md:ml-10" src={neiwai} alt="img" />

          <div className="flex sm:w-[50%] -my-2 ">
            <ul className=" sm:flex  justify-evenly  w-full flex-wrap mt-2   mr-5  text-gray-800 hidden  ">
              <li className="cursor-pointer">NEW</li>
              <li className="cursor-pointer">SALE</li>
              <li className="cursor-pointer">GIFTS</li>
              <li className="cursor-pointer">BEST SELLERS</li>
              <li className="cursor-pointer">UNDERWEAR</li>
              <li className="cursor-pointer">LOUNGE</li>
              <li className="cursor-pointer">ACTIVE</li>
              <li className="cursor-pointer">FOR HIM</li>
              <li className="cursor-pointer">OUR STORY</li>
            </ul>
          </div>

          <div className="flex  justify-between sm:w-36   w-28">
            <div className="group ">
              <div>
                <BiSearch className="text-2xl cursor-pointer mt-2 " />
              </div>
              <div className="sm:-mx-[65%] -my-9 absolute  w-[72%] -mx-24 group-hover:block hidden bg-white ">
                <input
                  className="border -mr-96 sm:w-[72%] w-52  mb-2 p-2 border-black outline-none "
                  placeholder="Search"
                />
                <BiSearch className="-my-10 text-2xl sm:ml-[68%] ml-44 cursor-pointer" />
              </div>
            </div>
            <div>
              <VscAccount className=" text-2xl cursor-pointer mt-2" />
            </div>

            <div onClick={() => ShowCart()}>
              <BiShoppingBag className="text-2xl cursor-pointer mt-2 " />
            </div>
            <Caart ShowCart={ShowCart} open={open} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Image;
