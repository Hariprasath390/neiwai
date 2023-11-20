import React from "react";
import { SiNike } from "react-icons/si";
import mscard from "../src/images/mc.png";
import cap from "../src/images/cap.png";
import Tshirt from "../src/images/tshirt.png";

export const App = () => {
  return (
    <div className=" flex justify-center items-center  to-[rgb(255,230,209)] bg-gradient-to-r from-[rgb(255,246,219)]">
      <div className=" w-full sm:w-1/2 lg:w-5/12 bg-white h-full shadow-lg p-4 my-4">
        <div className="flex justify-start  m-4  ">
          <SiNike className="w-5 h-5 sm:w-8 sm:h-8" />
        </div>
        <div>
          <div className="">
            <div className="font-bold text-gray-700 mx-4 text-xl ">
              Your Order is Confirmed
            </div>
            <div className=" m-4 ">
              <h2 className="font-bold">Hello Hari,</h2>
              <h2 className="text-gray-800 text-sm my-2">
                your order has been confirmed and will be shipping with in next
                two days.
              </h2>
              <hr className="border-stone-400 w-[99%] mt-1" />
            </div>
          </div>
          <div className="mx-4 my-5 ">
            <div className="flex  justify-between items-center flex-wrap">
              <div className=" ">
                <h2 className="text-sm text-gray-400">Order Date</h2>
                <p className="text-sm text-gray-800 font-semibold my-1">
                  3 NOV 2022
                </p>
              </div>
              <div className="text-gray-400 mx-6 ">
                <h2 className="text-sm">Order no</h2>
                <p className="text-sm text-gray-800 font-semibold my-1">
                  NK12345678
                </p>
              </div>
              <div className="text-gray-400 ">
                <h2 className="text-sm">Payment</h2>
                <p className="text-sm my-1">
                  <img className="w-10 h-6" src={mscard} alt="" />
                </p>
              </div>
              <div className="text-gray-400 ">
                <h2 className="text-sm">Shipping adress</h2>
                <p className="text-sm text-gray-800 font-semibold my-1">
                  DILAH FAZHION 
                </p>
              </div>
            </div>
            <div>
              <hr className="border-stone-400 w-[99%] my-2 " />
            </div>
          </div>

          <div className="m-4 ">
            <div className="flex justify-start">
              <div className="w-28">
                <img className=" w-20 h-20" src={cap} alt="img" />
              </div>
              <div className=" w-[65%]">
                <h2 className="font-medium text-gray-900">Men's sports cap</h2>
                <p className="text-sm text-gray-400">Quantity: 1</p>
                <p className="text-sm text-gray-400">Color: Dark Blue</p>
              </div>
              <div className="w-10 text-gray-400 text-sm">
                <p>$67.99</p>
              </div>
            </div>
            <div>
              <hr className="border-stone-400 w-[99%] my-8 " />
            </div>
          </div>

          <div className="m-4 ">
            <div className="flex justify-start my-2">
              <div className="w-28">
                <img className=" w-20 h-20" src={Tshirt} alt="img" />
              </div>
              <div className=" w-[65%]">
                <h2 className="font-medium text-gray-900">
                  Men's collar less t-shirt
                </h2>
                <p className="text-sm text-gray-400">Quantity: 1</p>
                <p className="text-sm text-gray-400">Color: Dark Blue</p>
              </div>
              <div className="w-10 text-gray-400 text-sm">
                <p>$67.99</p>
              </div>
            </div>

            <hr className="border-stone-400 w-[99%]  " />
          </div>
          <div className="flex sm:justify-end  my-4 ">
            <div className="m-4 w-full sm:w-48  ">
              <div className="flex text-sm justify-between ">
                <p className="text-gray-400">Subtotal</p>
                <p>$188.50</p>
              </div>
              <div className="flex text-sm justify-between">
                <p className="text-gray-400">Shipping fee</p>
                <p>$12.00</p>
              </div>
              <div className="flex text-sm justify-between">
                <p className="text-gray-400"> Tax fee</p>
                <p>$7.55</p>
              </div>
              <div className="flex text-sm justify-between">
                <p className="text-gray-400">Discount</p>
                <p className="text-green-400">$5.00</p>
              </div>
              <hr />
              <div className="flex justify-between ">
                <h1 className=" text-gray-400  text-sm">Total</h1>
                <h1 className="text-sm  ">$203.35</h1>
              </div>
              <hr />
            </div>
          </div>

          <div className="text-sm m-4">
            <p>
              we will be sending an email confirmation email when the items
              shipped successfully
            </p>
          </div>
          <div className="m-4">
            <p className="font-bold ">Thank You for shopping with us!! </p>
            <p className="text-sm">Nike team</p>
          </div>
        </div>
        <div className="m-4">
          <div className="flex justify-between text-sm">
            <div className="sm:flex text-sm">
              <p className="text-sm">Need Help visit our?</p>
              <p className="text-blue-500 text-sm">Help Center</p>
            </div>
            <div> &copy; Nike 2022
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;


import React from "react";
import MiniSearch from "minisearch";
const documents = [
  {
    id: 1,
    title: "Moby Dick",
    text: "Call me Ishmael. Some years ago...",
    category: "fiction",
  },
  {
    id: 2,
    title: "Zen and the Art of Motorcycle Maintenance",
    text: "I can see by my watch...",
    category: "fiction",
  },
  {
    id: 3,
    title: "Neuromancer",
    text: "The sky above the port was...",
    category: "fiction",
  },
  {
    id: 4,
    title: "Zen and the Art of Archery",
    text: "At first sight it must seem...",
    category: "non-fiction",
  },
  // ...and more
];
const searchIndex = new MiniSearch({
    // fields to index for full-text search
    fields: ["title", "description"],
    // fields to return with search results
    storeFields: ["title", "description", "price"],
    searchOptions: {
        boost: {title:2, text:1},
        prefix: true,
        fuzzy:0.25,
  
    },
  });


searchIndex.addAll(documents)

let searchResults = searchIndex.search("Neuromancer");

console.log(searchResults);
