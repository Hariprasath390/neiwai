import React from "react";
import Os from "../components/images/Os.png";
import Of from "../components/images/Office.png";
import Op from "../components/images/Op.png";
import lb from "../components/images/lb.png";
import lb2 from "../components/images/lb2.png";
import imaag from "../components/images/forbes.png";
import imag from "../components/images/bqf.png";
import imgge from "../components/images/wwd.png";
import image from "../components/images/glossy.png";
import imagg from "../components/images/cosmopolitan.png";
import immag from "../components/images/jing daily.png";
// import Hover from "../Hover";
function Pic() {
  return (
    <div className="">
      <div>
        <div className="lg:flex w-full  mt-2   ">
          <p className="flex  lg:w-[30%]  lg:p-0  p-6  bg-[rgb(178,166,162)]  items-center justify-center text-white font-serif  text-3xl text-justify">
            BOUTIQUES
          </p>

          <div className="lg:w-[70%]">
            <img
              src={Os}
              alt="img "
              className="md:w-full md:h-full h-96 object-cover object-center   "
            />
          </div>
        </div>
      </div>

      <div className="lg:flex w-full md:mt-10 mt-2">
        <div className="lg:w-[70%]">
          <img
            src={Of}
            alt="img "
            className="md:w-full md:h-full h-96 lg:object-cover object-center  "
          />
        </div>
        <p className="flex lg:w-[30%] bg-[rgb(238,235,230)] lg:p-0  p-6  items-center justify-center text-gray-800  font-serif text-3xl  text-justify">
          OFFICE
        </p>
      </div>

      <div className="w-full md:mt-10  ">
        <div className="lg:flex mt-1 ">
          <p className="flex lg:w-[38%] w-full lg:p-0  p-6  mt-0.5  bg-[rgb(238,235,230)]  items-center justify-center text-stone-700  font-serif text-3xl text-justify">
            SUSTAINABILITY
          </p>
          <div className="lg:w-[40%] w-full  lg:m-0.5 ">
            <img
              src={Op}
              alt="img"
              className="w-full  lg:h-full h-96   lg:object-cover object-cover object-center   "
            />
          </div>
          <p className="flex lg:w-[30%] w-full mt-0.5    bg-[rgb(238,235,230)]  items-center justify-center text-gray-800  font-serif text-center  ">
            We strive to be conscientious when sourcing our fabrics, choosing
            high quality, eco-friendly materials from suppliers like PrimaLoft®,
            VITA, Carbon Zero by TENCEL™ and other brands that share our
            commitment to a cleaner planet. <br /> On average, our packaging
            uses 40% fewer materials than packaging used by traditional fashion
            brands. This lightweight design cuts 450+ tons of waste every year –
            saving more than 600 trees as a result.
          </p>
        </div>
      </div>
      <div className="lg:flex w-full  ">
        <div className="mt-0.5 lg:w-[50%] w-full   mr-1 ">
          <p className="text-center p-5 font-serif bg-[rgb(178,166,162)]  text-3xl ">
            LOOKBOOK
          </p>
          <div className="h-96">
            <img
              src={lb}
              alt="img"
              className="w-full h-full object-cover object-top   "
            />
          </div>
        </div>
        <div className="mt-0.5 lg:w-[50%] w-full    ">
          <p className="text-center  p-5 font-serif bg-[rgb(178,166,162)]  text-3xl ">
            #INHALEEXHALE
          </p>
          <div className="w-full h-96   ">
            <img
              src={lb2}
              alt="img"
              className=" w-full h-full object-cover object-top   "
            />
          </div>
        </div>
      </div>

      {/* <-- hover Section --> */}
      <div className=" mb-20 mt-24 ">
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
              <p className="group-hover:border-b-4 border-orange-900 w-10 mx-12  hidden lg:block mb-10   "></p>
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
      </div>
      {/* <Hover /> */}
    </div>
  );
}

export default Pic;
