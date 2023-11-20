import React, { useState } from "react";
import dress1 from "../components/images/dress1.png";
import dress2 from "../components/images/dress2.png";
import dress3 from "../components/images/dress3.png";
import dress4 from "../components/images/dress4.png";

import { BsFillStarFill, BsCircle } from "react-icons/bs";

const Product = [
  {
    id: 1,
    productName: "Western frog",
    productPrice: "$89",
    productImage: dress1,
    productImage2: dress3,
    productImage3: dress4,
    productImage4: dress2,
  },
  {
    id: 2,
    productName: "lavanga",
    productPrice: "$300",
    productImage: dress2,
    productImage2: dress4,
    productImage3: dress1,
    productImage4: dress3,
  },
  {
    id: 3,
    productName: "Full frog ",
    productPrice: "$500",
    productImage: dress3,
    productImage2: dress1,
    productImage3: dress2,
    productImage4: dress4,
  },
  {
    id: 4,
    productName: "fashion dress",
    productPrice: "$250",
    productImage: dress4,
    productImage2: dress3,
    productImage3: dress2,
    productImage4: dress1,
  },
];

function Mainpage() {
  const [state, setState] = useState(dress1);
  function setNewImage(id) {
    console.log(id);
    const product = Product.filter((o) => o.id === id);
    console.log(product);
    setState(dress2);
    console.log(dress2);
  }


  

  return (
    <div className=" bg-white">
      <div className=" w-full sm:p-16 bg-[rgb(242,236,227)]   ">
        <h2 className=" w-full inline-flex justify-center items-center sm:my-0  sm:text-4xl text-3xl">
          BEST SELLERS
        </h2>

        <div className="  py-12 sm:justify-evenly  flex md:flex-wrap overflow-x-scroll sm:overflow-x-hidden">
          {Product.map((pro) => {
            return (
              <div className="p-2 group bg-[rgb(242,236,227)]  my-5  relative">
                
                  <div className=" bg-[rgb(242,236,227)] sm:w-full w-64 ">
                    <div>
                      <img
                        className=" w-64 cursor-pointer "
                        src={state}
                        alt="img"
                      />
                    </div>
                    <div>
                      <div className="  w-64 p-2 bg-white  duration-500  group-hover:translate-y-32 hidden sm:block ">
                        <h2 className="flex text-xl my-2 ">
                          <BsCircle className="bg-black rounded-full text-black" />
                          <BsCircle className=" ml-2 bg-white rounded-full text-gray-300 " />

                          <BsCircle
                            className="ml-2 bg-orange-700 rounded-full text-orange-700 "
                            value={pro.id}
                            onClick={(e) =>
                              setNewImage(e.target.getAttribute("value"))
                            }
                          />
                          <BsCircle className="ml-2 bg-red-600 rounded-full text-red-600" />
                          <BsCircle className="ml-2 bg-slate-500 rounded-full text-slate-500" />
                          <BsCircle className="ml-2 bg-sky-500 rounded-full text-sky-500" />
                        </h2>
                        <button className=" rounded mb-5 b-3 p-2 w-56 text-white bg-stone-600  duration-300">
                          Quick shop
                        </button>
                      </div>
                      <div className="sm:-translate-y-32  bg-white p-2">
                        <h2 className="mt-4"> {pro.productName}</h2>
                        <p className="flex mt-3 text-blue-500 ">
                          <BsFillStarFill />
                          <BsFillStarFill />
                          <BsFillStarFill />
                          <BsFillStarFill />
                          <BsFillStarFill />
                          <h2 className="ml-2 text-black">1 review</h2>
                        </p>
                        <h2 className="mt-3">{pro.productPrice}</h2>
                        <h2 className="mt-1 text-sm text-gray-400">
                          6 colors available
                        </h2>
                      </div>
                    </div>
                  </div>
            
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
// export default Mainpage;


import React, { useState } from "react";
import dress1 from "../components/images/dress1.png";
import dress2 from "../components/images/dress2.png";
import dress3 from "../components/images/dress3.png";
import dress4 from "../components/images/dress4.png";

import { BsFillStarFill, BsCircle } from "react-icons/bs";

const Producte = [
  {
    id: 1,
    productName: "Western frog",
    productPrice: "$89",
    productImage: dress1,
    productImage2: dress3,
    productImage3: dress4,
    productImage4: dress2,
  },
  {
    id: 2,
    productName: "lavanga",
    productPrice: "$300",
    productImage: dress2,
    productImage2: dress4,
    productImage3: dress1,
    productImage4: dress3,
  },
  {
    id: 3,
    productName: "Full frog ",
    productPrice: "$500",
    productImage: dress3,
    productImage2: dress1,
    productImage3: dress2,
    productImage4: dress4,
  },
  {
    id: 4,
    productName: "fashion dress",
    productPrice: "$250",
    productImage: dress4,
    productImage2: dress3,
    productImage3: dress2,
    productImage4: dress1,
  },
];

function Mainpage() {
  const [state, setState] = useState(dress1);
  function setNewImage(id) {
    console.log(id);
    const product = Product.filter((o) => o.id === id);
    console.log(product);
    setState(dress2);
    console.log(dress2);
  }

  return (
    <div className=" bg-white">
      <div className=" w-full  bg-[rgb(242,236,227)]  ">
        <h2 className=" w-full inline-flex justify-center items-center my-12 sm:text-4xl text-3xl ">
          BEST SELLERS
        </h2>

        <div className=" flex  sm:justify-evenly  flex-wrap w-full ">
          {Product.map((pro) => {
            return (
              <div className="p-2 group   w-1/2 lg:w-1/5 md:w-1/3 sm:w-80 ">
                
                
                    <div>
                      <img
                        className="  cursor-pointer "
                        src={state}
                        alt="img"  
                      />
                    </div>
                   
                      <div className="   p-2 bg-white  duration-500  group-hover:translate-y-32 hidden sm:block ">
                        <h2 className="flex text-xl my-2 ">
                          <BsCircle className="bg-black rounded-full text-black" />
                          <BsCircle className=" ml-2 bg-white rounded-full text-gray-300 " />

                          <BsCircle
                            className="ml-2 bg-orange-700 rounded-full text-orange-700 "
                            value={pro.id}
                            onClick={(e) =>
                              setNewImage(e.target.getAttribute("value"))
                            }
                          />
                          <BsCircle className="ml-2 bg-red-600 rounded-full text-red-600" />
                          <BsCircle className="ml-2 bg-slate-500 rounded-full text-slate-500" />
                          <BsCircle className="ml-2 bg-sky-500 rounded-full text-sky-500" />
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
                          <h2 className="m-1 -my-1 text-sm w-28  text-black">1 review</h2>
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
      </div>
    </div>
  );
}
export default Mainpage;




import React from "react";
import imaag from "../src/images/forbes.png";
import imag from "../src/images/bqf.png";
import imgge from "../src/images/wwd.png";
import image from "../src/images/glossy.png";
import imagg from "../src/images/cosmopolitan.png";
import immag from "../src/images/jing daily.png";
// import neiwai from "../src/images/neiwai.png";

function Hover() {
  return (
   <div className="mb-28"> <div className=" mb-20 mt-24 ">
    <div className="flex justify-evenly flex-wrap  xl:flex xl:flex-wrap  lg:w-full  ">
      <div className="group ">
        <div className="group-hover:block hidden absolute   ">
          <p className="text-md hidden lg:block w-[65%]  text-xl  text-gray-800 p-3 m-1 mx-48 font-semibold  text-center ">
            “A brand that helps customers feel an inner balance is
            particularly valuable right now, as we navigate the transition
            from a stressful pandemic into a post-pandemic world .”
          </p>
        </div>

        <div className="">
          <div className="group xl:mt-28 ">
            <img
              className="lg:w-36 lg:h-36 w-32 h-32  "
              src={imaag}
              alt="img"
            />
          </div>
          <p className="group-hover:border-b-4 border-orange-900 w-10 mx-12 hidden lg:block  mb-10 "></p>
        </div>
      </div>

      <div className="group">
        <div className="group-hover:block hidden absolute   ">
          <p className="text-md  w-[78%] hidden lg:block text-lg text-gray-800 p-3 m-1 -mx-4 font-semibold  text-center ">
            China's leading lingerie brand NEIWAI recently completed a $100
            million Series D financing round. In the first half of this
            year, its total sales increased by 260 percent year-on-year,
            with monthly sales exceeding200 million yuan ($30.93 million)
            and an annual repurchase rate of more than 50 percent.”
          </p>
        </div>
        <div className="xl:mt-28   ">
          <img
            className=" lg:w-36 lg:h-36 w-32 h-32    "
            src={imag}
            alt="img"
          />
          <p className="group-hover:border-b-4 border-orange-900 w-10 mx-12 hidden lg:block  mb-10   "></p>
        </div>
      </div>
      <div className="group">
        <div className="group-hover:block hidden absolute ">
          <p className="text-md  w-[95%] hidden lg:block text-lg text-gray-800 p-3 m-1 -mx-56 font-semibold  text-center">
            “NEIWAI Raised $100 Million in Series D Funding. The fresh
            capital injection will be used to develop products and
            categories, raise brand awareness and accelerate global
            expansion.”
          </p>
        </div>
        <div className="xl:mt-28  ">
          <img
            className="lg:w-36 lg:h-36 w-32 h-32 "
            src={imgge}
            alt="img"
          />
          <p className="group-hover:border-b-4 border-orange-900 w-10 mx-12 hidden lg:block mb-10  "></p>
        </div>
      </div>
      <div className="group">
        <div className="group-hover:block hidden absolute w-full">
          <p className="text-md  w-[62%] hidden lg:block text-lg text-gray-800 p-3 m-1 xl:-mx-[35%] font-semibold  text-center">
            “There is a whole generation of consumers wanting to write new
            narratives for themselves. The brands which continue to drive
            these types of conversations and create a continue to drive
            these types of conversations and create a continue to resonate
            with consumers.”
          </p>
        </div>
        <div className="xl:mt-28 ">
          <img
            className="lg:w-36 lg:h-36 w-32 h-32 "
            src={image}
            alt="img"
          />
          <p className="group-hover:border-b-4 border-orange-900 w-10 mx-12 hidden lg:block mb-10   "></p>
        </div>
      </div>
      <div className="group">
        <div className="group-hover:block hidden absolute w-full">
          <p className="  w-[60%] text-lg text-gray-800 p-3 m-1  xl:-mx-[48%] font-semibold  hidden lg:block text-center">
            “There is a whole generation of consumers wanting to write new
            narratives for themselves. The brands which continue to drive
            these types of conversations and create a positive space and
            community around them will continue to resonate with consumers.”
          </p>
        </div>
        <div className="xl:mt-28 ">
          <img
            className="lg:w-36 lg:h-36 w-32 h-32"
            src={imagg}
            alt="img"
          />
          <p className="group-hover:border-b-4 border-orange-900 w-10 mx-12  hidden lg:block mb-10"></p>
        </div>
      </div>
      <div className="group">
        <div className="group-hover:block hidden absolute  w-[59%]">
          <p className="text-md w-[80%] text-lg text-gray-800 xl:-mx-[95%] hidden lg:block font-semibold   text-center">
            "NEIWAI has developed a positive reputation among consumers in
            China for its inclusive sizing and casting of models of all ages
            and shapes in nationwide marketing campaigns."
          </p>
        </div>
        <div className="xl:mt-28 ">
          <img
            className="lg:w-36 lg:h-36 w-32 h-32 bg-black hover:bg-white "
            src={immag}
            alt="img"
          />
          <p className="group-hover:border-b-4 border-orange-900 w-10 mx-12  hidden lg:block  mb-6"></p>
        </div>
      </div>
    </div>
  </div></div>
  );
}

// export default Hover;

