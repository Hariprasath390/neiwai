import React from "react";
import My2 from "../components/images/my23.png";
import my12 from "../components/images/my12.png";
import Os from "../components/images/Os.png";
import Pic from "./Pic";
import pic0 from "../components/images/am.png";
import Ben5 from "../components/images/Men5.png";
import Ben6 from "../components/images/Men6.png";
import Ben7 from "../components/images/Men7.png";
import Ben8 from "../components/images/Men8.png";
import One6 from "../components/images/fiveone.png";
import One7 from "../components/images/sixx.png";
import One8 from "../components/images/sevenone.png";
import One9 from "../components/images/eightOne.png";
import One10 from "../components/images/nineone.png";
import l27 from "../components/Look/lb27.png";

// import Of from "../components/images/Office.png";

function Ourstory() {
  return (
    <div>
      <div>
        <div className="bg-[rgb(238,235,230)]">
          <div>
            <img src={pic0} alt="img" className="w-full" />
          </div>
          <p className="bg-[rgb(238,235,230)] text-center md:m-1   flex justify-center items-center font-semibold text-md  text-gray-700  md:w-[80%] w-full  lg:ml-36 md:ml-20 py-10   ">
            Founded in 2012, NEIWAI’s mission is to make solutionwear for modern
            men. We specialize in making comfortable underwear, loungewear, and
            athleisure with an emphasis on technology and innovation. Our unique
            fabric blends provide proper fit and support both physically and
            emotionally throughout your day and throughout your life. More than
            just stylish and comfortable, our clothing is Made To Live In.
          </p>
        </div>
        {/* <div className="">
          <p className="font-semibold text-stone-800 text-center text-4xl p-5 ">
            About us
          </p>
          <p className="text-center font-serif text-3xl">
            Your Ultimate Intimate Wear Destination
          </p>
          <p className="text-center font-serif text-gray-600  py-6 lg:w-[85%] w-full lg:ml-28">
            With decades of experience, myunde is dedicated to creating intimate
            wear which perfectly blends comfort, fashion, fit and thoughtful
            design.
          </p>
          <p className="text-center font-serif text-gray-600  lg:w-[85%] w-full lg:ml-28  ">
            myunde understands the need of a modern Indian men and thoughtfully
            designs intimate wear tailored to her unique silhouette, style and
            shape; offering a wide range of fashionable lingerie, nightwear,
            swimwear and activewear to complement her fashion-forward lifestyle.
          </p>
          <p className="text-center font-serif text-gray-600 py-8 lg:w-[85%]  lg:ml-28">
            Whether you are looking for a bra for everyday comfort or styling an
            outfit for a special occasion or even a new swimsuit that’s perfect
            for your upcoming vacation, myunde is your complete one-stop
            intimate wear destination.
          </p>
          <div>
            {/* <div className="flex justify-">
              <div className="grid xl:grid-cols-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2  ">
                <div className="w-52 ">
                  <div className="h-80 w-52  ">
                    <img
                      src={One6}
                      alt="img"
                      className="h-80 w-64 object-cover object-top   "
                    />
                  </div>

                  <div className="bg-cover bg-black opacity-70  w-52   ">
                    <p className="text-center -mt-8  text-white font-medium p-1">
                      T-Shirt
                    </p>
                  </div>
                </div>
                <div className="w-52 ">
                  <div className="h-80 w-52 ">
                    <img
                      src={One7}
                      alt="img"
                      className="h-80 w-52  object-cover object-top "
                    />
                  </div>
                  <div className="bg-cover bg-black opacity-70 w-52   ">
                    <p className="text-center -mt-8  text-white font-medium p-1">
                      Shorts{" "}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="h-80 w-52 ">
                    <img
                      src={One8}
                      alt="img"
                      className="h-80 w-52  object-cover object-top "
                    />
                  </div>
                  <div className="bg-cover bg-black opacity-70  w-52   ">
                    <p className="text-center -mt-8 w-52 text-white font-medium p-1 ">
                      Tank-top{" "}
                    </p>
                  </div>
                </div>
                <div className=" ">
                  <div className="h-80 w-52 ">
                    <img
                      src={One9}
                      alt="img"
                      className="h-80 w-52  object-cover object-top "
                    />
                  </div>
                  <div className="bg-cover bg-black opacity-70  w-52   ">
                    {" "}
                    <p className="text-center -mt-8  text-white font-medium p-1 w-52 ">
                      Joggers{" "}
                    </p>
                  </div>
                </div>
                <div className=" ">
                  <div className="w-52 h-80">
                    <img
                      src={One10}
                      alt="img"
                      className="h-80 w-52  object-cover object-top "
                    />
                  </div>
                  <div className="bg-cover bg-black opacity-70 w-52   ">
                    <p className="text-center -mt-8  text-white font-medium p-1 w-52 ">
                      Vest
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* // <div className="w-full  mt-36 ">
        //   <p className="text-center font-semibold   text-4xl text-black/90  ">
        //     Myunde, Feels Like Air
        //   </p>
        //   <p className="text-center  font-semibold  text-lg  text-gray-500  mt-2  ">
        //     Myunde dresses are so comfortable that they feel like nothing, they
        //     feel like air.
        //   </p>
        //   <div className="lg:flex justify-around   items-center mt-6  ">
        //     <div className="">
        //       <img src={My2} alt="img" className=" px-6  mb-2  " />
        //     </div>
        //     <div className="m-2 ">
        //       <p className=" text-gray-600 text-center font-serif  ">
        //         As soft as a feather.
        //       </p>
        //       <p className=" text-gray-600 text-center font-serif ">
        //         As comforting as that corner of your house.
        //       </p>
        //       <p className=" text-gray-600 text-center font-serif ">
        //         As delicate as the morning light.
        //       </p>
        //       <p className=" text-gray-600 text-center font-serif ">
        //         As tender as hope of a new tomorrow.
        //       </p>
        //       <p className=" text-gray-600 text-center font-serif">
        //         As light as laughter.
        //       </p>
        //       <p className=" text-gray-600 text-center font-serif ">
        //         As silky as a dream.
        //       </p>
        //       <p className=" text-gray-600 text-center font-serif ">
        //         As silky as a dream. As lovely as a walk in the moonlight.
        //       </p>
        //       <p className=" text-gray-600 text-center font-serif ">
        //         As subtle as an autumn breeze.
        //       </p>
        //       <p className=" text-gray-600 text-center font-serif ">
        //         Myunde is all that. And so much more.
        //       </p>
        //     </div>
        //   </div>
        // </div> */}
        <Pic />
      </div>
    </div>
  );
}

export default Ourstory;
