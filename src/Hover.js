import React, { useState } from "react";
import imaag from "../src/images/forbes.png";
import imag from "../src/images/bqf.png";
import imgge from "../src/images/wwd.png";
import image from "../src/images/glossy.png";
import imagg from "../src/images/cosmopolitan.png";
import immag from "../src/images/jing daily.png";
import { SiOpenmined } from "react-icons/si";

// import neiwai from "../src/images/neiwai.png";

function Hover() {
  const [open, setOpen] = useState({
    p1: false,
    p2: false,
    p3: false,
    p4: false,
    p5: false,
    p6: false,
  });
  return (
    <div className="">
      <div className="  ">
        <div className="flex justify-evenly flex-wrap  xl:flex xl:flex-wrap  lg:w-full  ">
          <div className="w-full mt-28 h-24 hidden md:block">
            {open.p1 && (
              <div className="flex justify-center">
                <div className="w-[70%]">
                  <p className="font-serif text-xl text-stone-700 text-center ">
                    “A brand that helps customers feel an inner balance is
                    particularly valuable right now, as we navigate the
                    transition from a stressful pandemic into a post-pandemic
                    world .”
                  </p>
                </div>
              </div>
            )}
            {open.p2 && (
              <div className="flex justify-center">
                <div className=" w-[70%] ">
                  <p className="font-serif text-xl text-stone-700 text-center ">
                    China's leading lingerie brand NEIWAI recently completed a
                    $100 million Series D financing round. In the first half of
                    this year, its total sales increased by 260 percent
                    year-on-year, with monthly sales exceeding200 million yuan
                    ($30.93 million) and an annual repurchase rate of more than
                    50 percent.”
                  </p>
                </div>
              </div>
            )}
            {open.p3 && (
              <div className="flex justify-center">
                <div className=" w-[70%]">
                  <p className="font-serif text-xl text-stone-700 text-center ">
                    “NEIWAI Raised $100 Million in Series D Funding. The fresh
                    capital injection will be used to develop products and
                    categories, raise brand awareness and accelerate global
                    expansion.”
                  </p>
                </div>
              </div>
            )}
            {open.p4 && (
              <div className="flex justify-center">
                <div className="w-[70%]">
                  <p className="font-serif text-xl text-stone-700 text-center ">
                    “There is a whole generation of consumers wanting to write
                    new narratives for themselves. The brands which continue to
                    drive these types of conversations and create a continue to
                    drive these types of conversations and create a continue to
                    resonate with consumers.”
                  </p>
                </div>
              </div>
            )}
            {open.p5 && (
              <div className="flex justify-center">
                <div className="w-[70%]">
                  <p className="font-serif text-xl text-stone-700 text-center ">
                    “There is a whole generation of consumers wanting to write
                    new narratives for themselves. The brands which continue to
                    drive these types of conversations and create a positive
                    space and community around them will continue to resonate
                    with consumers.”
                  </p>
                </div>
              </div>
            )}
            {open.p6 && (
              <div className="flex justify-center">
                {" "}
                <div className="w-[70%] ">
                  <p className="font-serif text-xl text-stone-700 text-center ">
                    "NEIWAI has developed a positive reputation among consumers
                    in China for its inclusive sizing and casting of models of
                    all ages and shapes in nationwide marketing campaigns."
                  </p>
                </div>
              </div>
            )}
          </div>

          <div
            className="mt-8  "
            onMouseOver={() =>
              setOpen({
                ...open,
                p1: true,
                p2: false,
                p3: false,
                p4: false,
                p5: false,
                p6: false,
              })
            }
            onMouseLeave={() =>
              setOpen({
                ...open,
                p1: false,
                p2: false,
                p3: false,
                p4: false,
                p5: false,
                p6: false,
              })
            }
          >
            <img
              className="lg:w-36 lg:h-36 w-32 h-32  "
              src={imaag}
              alt="img"
            />
          </div>

          <div
            className="mt-8 "
            onMouseOver={() =>
              setOpen({
                ...open,
                p1: false,
                p2: true,
                p3: false,
                p4: false,
                p5: false,
                p6: false,
              })
            }
            onMouseLeave={() =>
              setOpen({
                ...open,
                p1: false,
                p2: false,
                p3: false,
                p4: false,
                p5: false,
                p6: false,
              })
            }
          >
            <img
              className=" lg:w-36 lg:h-36 w-32 h-32    "
              src={imag}
              alt="img"
            />
          </div>

          <div
            className="mt-8 "
            onMouseOver={() =>
              setOpen({
                ...open,
                p1: false,
                p2: false,
                p3: true,
                p4: false,
                p5: false,
                p6: false,
              })
            }
            onMouseLeave={() =>
              setOpen({
                ...open,
                p1: false,
                p2: false,
                p3: false,
                p4: false,
                p5: false,
                p6: false,
              })
            }
          >
            <img className="lg:w-36 lg:h-36 w-32 h-32 " src={imgge} alt="img" />
          </div>

          <div
            className="mt-8 "
            onMouseOver={() =>
              setOpen({
                ...open,
                p1: false,
                p2: false,
                p3: false,
                p4: true,
                p5: false,
                p6: false,
              })
            }
            onMouseLeave={() =>
              setOpen({
                ...open,
                p1: false,
                p2: false,
                p3: false,
                p4: false,
                p5: false,
                p6: false,
              })
            }
          >
            <img className="lg:w-36 lg:h-36 w-32 h-32 " src={image} alt="img" />
          </div>

          <div
            className="mt-8 "
            onMouseOver={() =>
              setOpen({
                ...open,
                p1: false,
                p2: false,
                p3: false,
                p4: false,
                p5: true,
                p6: false,
              })
            }
            onMouseLeave={() =>
              setOpen({
                ...open,
                p1: false,
                p2: false,
                p3: false,
                p4: false,
                p5: false,
                p6: false,
              })
            }
          >
            <img className="lg:w-36 lg:h-36 w-32 h-32" src={imagg} alt="img" />
          </div>

          <div
            className="mt-8 "
            onMouseOver={() =>
              setOpen({
                ...open,
                p1: false,
                p2: false,
                p3: false,
                p4: false,
                p5: false,
                p6: true,
              })
            }
            onMouseLeave={() =>
              setOpen({
                ...open,
                p1: false,
                p2: false,
                p3: false,
                p4: false,
                p5: false,
                p6: false,
              })
            }
          >
            <img
              className="lg:w-36 lg:h-36 w-32 h-32 bg-black hover:bg-white "
              src={immag}
              alt="img"
            />
            {/* <p className="group-hover:border-b-4 border-orange-900 w-10 mx-12  hidden lg:block  mb-6"></p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hover;
