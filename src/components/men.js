import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
// import { IoMdArrowDropup } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { BsFillStarFill } from "react-icons/bs";
import Ben1 from "../components/images/Men1.png";
import Ben2 from "../components/images/Men2.png";
import Ben3 from "../components/images/Men3.png";
import Ben4 from "../components/images/Men4.png";
import Ben5 from "../components/images/Men5.png";
import Ben6 from "../components/images/Men6.png";
import Ben7 from "../components/images/Men7.png";
import Ben8 from "../components/images/Men8.png";
import Ben9 from "../components/images/Men9.png";
import Ben10 from "../components/images/Men10.png";
import Ben11 from "../components/images/Men11.png";
import Ben12 from "../components/images/Men12.png";
import One2 from "../components/images/one2.png";
import One3 from "../components/images/twoOne.png";
import One4 from "../components/images/threeone.png";
import One5 from "../components/images/fourone.png";
import One6 from "../components/images/fiveone.png";
import One7 from "../components/images/sixx.png";
import One8 from "../components/images/sevenone.png";
import One9 from "../components/images/eightOne.png";
import One10 from "../components/images/nineone.png";
import One11 from "../components/images/tenone.png";
import One12 from "../components/images/elevenone.png";
import One13 from "../components/images/twelveone.png";
import Gred from "../components/images/twothree.png";
import Rred from "../components/images/twotwo.png";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Product = [
  {
    id: 1,
    productName: "Men's Basic Short Sleeved T-Shirt",
    productPrice: "$49.00",
    productImage: Ben1,
    productImage1: One2,
    productColorImg: Rred,
    productColorImg1: Gred,
    productReview: " 1 Review ",
    productColor: "6 colors available",
    href: "#",
  },
  {
    id: 2,
    productName: "Men's Modal Brief 2.0",
    productPrice: "$19.00",
    productImage: Ben2,
    productImage1: One3,
    productReview: " 2 Review ",
    productColor: "6 colors available",
    href: "#",
  },
  {
    id: 3,
    productName: "Men's Cotton Modal Brief",
    productPrice: "$25.00",
    productImage: Ben3,
    productImage1: One4,
    productReview: " 3 Review ",
    productColor: "6 colors available",
    href: "#",
  },

  {
    id: 4,
    productName: "Men's Basic Short Sleeved T-Shirt",
    productPrice: "$89.00",
    productImage: Ben4,
    productImage1: One5,
    productReview: " 4 Review ",
    productColor: "6 colors available",
    href: "#",
  },
  {
    id: 5,
    productName: "Men's Basic Short Sleeved T-Shirt",
    productPrice: "$89.00",
    productImage: Ben5,
    productImage1: One6,
    productReview: " 4 Review ",
    productColor: "6 colors available",
    href: "#",
  },
  {
    id: 6,
    productName: "Men's Basic Short Sleeved T-Shirt",
    productPrice: "$89.00",
    productImage: Ben6,
    productImage1: One7,
    productReview: " 4 Review ",
    productColor: "6 colors available",
    href: "#",
  },
  {
    id: 7,
    productName: "Men's Basic Short Sleeved T-Shirt",
    productPrice: "$89.00",
    productImage: Ben7,
    productImage1: One8,
    productReview: " 4 Review ",
    productColor: "6 colors available",
    href: "#",
  },
  {
    id: 8,
    productName: "Men's Basic Short Sleeved T-Shirt",
    productPrice: "$89.00",
    productImage: Ben8,
    productImage1: One9,
    productReview: " 4 Review ",
    productColor: "6 colors available",
    href: "#",
  },
  {
    id: 9,
    productName: "Men's Basic Short Sleeved T-Shirt",
    productPrice: "$89.00",
    productImage: Ben9,
    productImage1: One10,
    productReview: " 4 Review ",
    productColor: "6 colors available",
    href: "#",
  },
  {
    id: 10,
    productName: "Men's Basic Short Sleeved T-Shirt",
    productPrice: "$89.00",
    productImage: Ben10,
    productImage1: One11,
    productReview: " 4 Review ",
    productColor: "6 colors available",
    href: "#",
  },
  {
    id: 11,
    productName: "Men's Basic Short Sleeved T-Shirt",
    productPrice: "$89.00",
    productImage: Ben11,
    productImage1: One12,
    productReview: " 4 Review ",
    productColor: "6 colors available",
    href: "#",
  },
  {
    id: 12,
    productName: "Men's Basic Short Sleeved T-Shirt",
    productPrice: "$89.00",
    productImage: Ben12,
    productImage1: One13,
    productReview: " 4 Review ",
    productColor: "6 colors available",
    href: "#"
    
  },
];

function Men() {
    

  const[filter, setFilter] =useState()
  



  const [expanded2, setExpanded2] = React.useState("panel1");

  const handleChange2 = (pane1) => (event, newExpanded) => {
    setExpanded2(newExpanded ? pane1 : false);
  };

  const [expanded, setExpanded] = React.useState("panel2");

  const handleChange = (pane2) => (event, newExpanded) => {
    setExpanded(newExpanded ? pane2 : false);
  };

  const [product, setProduct] = useState(Product);

  const onMouse = (id) => {
    const newState = product.map((obj) => {
      // 👇️ if id equals 2, update country property
      if (obj.id === Number(id)) {
        const temp = obj.productImage1;
        const temp2 = obj.productImage;
        return { ...obj, productImage: temp, productImage1: temp2 };
      }

      // 👇️ otherwise return object as is
      return obj;
    });
    setProduct(newState);
  };

  const onMouseOut = (id) => {
    const newState = product.map((obj) => {
      // 👇️ if id equals 2, update country property
      if (obj.id === Number(id)) {
        const temp = obj.productImage1;
        const temp2 = obj.productImage;
        return { ...obj, productImage: temp, productImage1: temp2 };
      }

      // 👇️ otherwise return object as is
      return obj;
    });
    setProduct(newState);
  };

  return (
    <div className="bg-[rgb(255,255,255)]">
      <div className="flex ml-4  ">
        <div className="mt-20">
          <div>
            <Accordion
              expanded={expanded2 === "panel1"}
              onChange={handleChange2("panel1")}
              className="bg-white hidden md:block "
              style={{ boxShadow: "none" }}
            >
              <AccordionSummary
                expandIcon={
                  <IoMdArrowDropdown className="text-xl text-gray-900 " />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="bg-white"
              >
                <h2 className="ml-2 font-medium "> COLOR </h2>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div className="  w-48 h-20">
                    <div className="flex justify-evenly items-center ">
                      <p className="border rounded-full w-7 h-7 hover:border-gray-400 bg-white hover:border-2"></p>
                      <p className="border rounded-full w-7 h-7 border-black bg-black hover:border-gray-500 hover:border-2"></p>
                      <p className="border rounded-full w-7 h-7 border-[rgb(105,15,15)] bg-[rgb(105,15,15)] hover:border-gray-400 hover:border-2"></p>
                      <p className="border rounded-full w-7 h-7 border-[rgb(230,39,39)] bg-[rgb(230,39,39)] hover:border-gray-400 hover:border-2"></p>
                      <p className="border rounded-full w-7 h-7 border-[rgb(128,128,128)] bg-[rgb(128,128,128)] hover:border-gray-400 hover:border-2"></p>
                    </div>
                    <div className="flex mt-3">
                      <p className="border ml-2  rounded-full w-7 h-7 border-[rgb(117,171,117)] bg-[rgb(117,171,117)] hover:border-gray-400 hover:border-2"></p>
                      <p className="border ml-2 rounded-full w-7 h-7 border-[rgb(52,101,193)] bg-[rgb(52,101,193)] hover:border-gray-400 hover:border-2"></p>
                      <p className="border ml-2.5 rounded-full w-7 h-7 border-[rgb(255,0,0)] bg-[rgb(255,0,0)] hover:border-gray-400 hover:border-2"></p>
                    </div>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              style={{ boxShadow: "none" }}
              className="bg-white hidden md:block"
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={
                  <IoMdArrowDropdown className="text-xl  text-gray-900  " />
                }
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <h2 className="ml-2 font-medium"> SIZE </h2>
              </AccordionSummary>
              <AccordionDetails>
                <div className="">
                  <button className="text-gray-400 border-gray-400  border w-12 h-9 ml-2 hover:border-stone-700 hover:text-white hover:bg-black">
                    XS
                  </button>
                  <button className="text-gray-400 border-gray-400  border w-12 h-9 ml-4 hover:border-stone-700 hover:text-white hover:bg-black">
                    S
                  </button>
                  <button className="text-gray-400 border-gray-400  border w-12 h-9 ml-4 hover:border-stone-700 hover:text-white hover:bg-black">
                    M
                  </button>
                </div>
                <div className="mt-6 ">
                  <button className="text-gray-400 border-gray-400  border w-12 h-9 ml-2 hover:border-stone-700 hover:text-white hover:bg-black">
                    L
                  </button>
                  <button className="text-gray-400 border-gray-400  border w-12 h-9 ml-4 hover:border-stone-700 hover:text-white hover:bg-black">
                    XL
                  </button>
                  <button className="text-gray-400 border-gray-400  border w-12 h-9 ml-4 hover:border-stone-700 hover:text-white hover:bg-black">
                    XXL
                  </button>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div className="w-full md:ml-7 mt-6 mr-4">
          <div className="flex w-full text-sm">
            <h2 className="text-sm text-[rgb(175,157,130)]">Home</h2>
            <h2 className="text-xs mt-1 ml-2 text-[rgb(149,146,142)]">
              <IoIosArrowForward />
            </h2>
            <h2 className="ml-2 text-[rgb(149,146,142)]">Men's Collection</h2>
          </div>
          <div className="mt-9">
            <h2 className=" font-normal text-4xl text-black flex  md:justify-start  justify-center">
              Men's Collection
            </h2>
          </div>

          <div className=" text-sm items-center md:w-[96%] mt-12 bg-[rgb(250,250,250)] h-12 hidden md:block">
            <div className="flex ">
              <h2 className="ml-2 text-stone-600 mt-3">Sort by</h2>
              <h2 className="ml-6 mt-3 text-stone-600">Featured</h2>
              <h2 className="ml-16 text-md mt-4 text-stone-700">
                <MdKeyboardArrowDown />
              </h2>
            </div>
          </div>

          <div className="md:w-[96%] mt-8 grid grid-cols-2 sm:grid-cols-3  xl:grid-cols-4 gap-4 ">
            {product.map((pro) => {
              return (
                <div className="group  ">
                  <Link  to="/productpage2" >
                    <img
                      value={pro.id}
                      onMouseOut={(e) =>
                        onMouseOut(e.target.getAttribute("value"))
                      }
                      onMouseOver={(e) =>
                        onMouse(e.target.getAttribute("value"))
                      }
                      src={pro.productImage}
                      alt="img"
                    />
                  </Link>

                  <div className=" relative">
                    <div className=" group ">
                      <div className="">
                        <div className="mt-3">
                          <h2 className="text-gray-700 ">{pro.productName}</h2>
                        </div>
                        <div className="flex mt-2 text-sm">
                          <div className="flex">
                            <h2 className="flex text-[rgb(158,128,87)]">
                              <BsFillStarFill />
                              <BsFillStarFill />
                              <BsFillStarFill />
                              <BsFillStarFill />
                              <BsFillStarFill />
                            </h2>
                          </div>
                          <div className="ml-2">
                            <h2 className="text-stone-700 -my-0.5 ">
                              {pro.productReview}
                            </h2>
                          </div>
                        </div>
                        <div className="mt-2">
                          <h2 className="text-gray-600 text-sm">
                            {pro.productPrice}
                          </h2>
                        </div>
                        <div className="mt-2">
                          <h2 className="text-sm text-gray-600 ">
                            {pro.productColor}
                          </h2>
                        </div>
                      </div>
                    </div>

                    <div className=" hidden lg:group-hover:block   bg-white absolute w-full  ">
                      <div className="flex justify-start mt-1">
                        <p className="border rounded-full w-5 h-5 mt-3 border-[rgb(169,166,160)] bg-[rgb(169,166,160)]"></p>
                        <p className="border rounded-full w-5 h-5 ml-2 mt-3 border-[rgb(160,82,45)] bg-[rgb(160,82,45)]"></p>
                        <p className="border rounded-full w-5 h-5 ml-2 mt-3 border-[rgb(74,54,47)] bg-[rgb(74,54,47)]"></p>
                      </div>
                      <div className="mt-5 flex justify-center ">
                        <button className="border border-gray-500  text-white bg-[rgb(158,128,87)]  w-full  rounded p-1.5 mb-2">
                          Quick shop
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Men;
