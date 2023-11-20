import React, { useState } from "react";

import red from "../components/images/red.png";
import white from "../components/images/white.png";
import violet from "../components/images/violet.png";
import gray2 from "../components/images/gray2.png";
import yelloww from "../components/images/yelloww.png";

import { BsFillStarFill, BsCircle } from "react-icons/bs";

const Product = [
  {
    id: 1,
    productName: "Western frog",
    productPrice: "$89",
    productImage : [white, yelloww, red, , violet, gray2],

  },
  {
    id: 2,
    productName: "lavanga",
    productPrice: "$300",
    productImage: [red, yelloww, white, violet, gray2],
    
  },
  {
    id: 3,
    productName: "Full frog ",
    productPrice: "$500",
    productImage: [white, yelloww, red,  violet, gray2],
   
  },
  {
    id: 4,
    productName: "fashion dress",
    productPrice: "$250",
    productImage: [violet, yelloww, red, white,  gray2],
   
  },
];

function Mainpage() {

 
  const [pic, setPic] = useState(red);


  const setImageFunc = (value, id)=>{
    console.log(value, id)
    const filterProduct = [...Product];
    const hello = (filterProduct.filter(o => o.id === Number(value)))[0]
    console.log(hello)
   
  }

  return (
    <div className=" bg-white">
      <div className=" w-full  bg-[rgb(242,236,227)] ">
        <h2 className=" w-full inline-flex justify-center items-center my-12 sm:text-4xl text-3xl ">
          BEST SELLERS
        </h2>

        <div className=" flex  sm:justify-evenly  flex-wrap w-full ">
          {Product.map((pro) => {
            return (
              <div className="p-2 group   w-1/2 lg:w-1/5 md:w-1/3 sm:1/2 ">
                <div>
                  <img className="  cursor-pointer" src={pro.productImage[0]} alt="img" />
                </div>

                <div className="   p-2 bg-white  duration-500  group-hover:translate-y-32 hidden sm:block ">
                  <h2 className="flex text-xl my-2 ">
                    
                    <BsCircle
                      className=" ml-2 bg-white rounded-full text-gray-300 "
                      value={pro.id}
                      id={"white"}
                      onClick={(e) => setImageFunc(e.target.getAttribute("value"), e.target.getAttribute("id"))}
                    />

                    <BsCircle
                      className="ml-2 bg-gray-700 rounded-full text-orange-700 "
                      id={"gray2"}
                      onClick={(e) => setImageFunc(e)}
                    />
                    <BsCircle
                      className="ml-2 bg-yellow-600 rounded-full text-red-600"
                      id={"yelloww"}
                      onClick={(e) => setImageFunc(e)}
                    />
                    <BsCircle
                      className="ml-2 bg-red-500 rounded-full text-slate-500"
                      id={"red"}
                      onClick={(e) => setImageFunc()}
                    />
                    <BsCircle
                      className="ml-2 bg-sky-500 rounded-full text-sky-500"
                      id={"violet"}
                      onClick={(e) => setImageFunc()}
                    />
                  </h2>
                  <button className=" rounded mb-5 b-3 p-2  text-white bg-stone-600  duration-300">
                    Quick shop
                  </button>
                </div>
                <div className="sm:-translate-y-32  bg-white p-2 ">
                  <h2 className="mt-4"> {pro.productName}</h2>
                  <p className="flex mt-3 text-blue-500 w-24 ">
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <h2 className="m-1 -my-1 text-sm w-28  text-black">
                      1 review
                    </h2>
                  </p>
                  <h2 className="mt-3">{pro.productPrice}</h2>
                  <h2 className="mt-1 text-sm text-gray-400">
                    6 colors available
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center  m-1  ">
          <button className="b-1 border-black w-44 bg-black text-white p-3 my-4 ">
            SHOP BEST SELLERS
          </button>
        </div>
      </div>
    </div>
  );
}
export default Mainpage;
