import React, { Component } from "react";
// import OwlCarousel from 'react-owl-carousel';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../components/styles.css";
import pic1 from "../components/images/pic1.png";
import pic2 from "../components/images/pic2.png";
import pic3 from "../components/images/pic3.png";
import pic0 from "../components/images/pic0.png";
import black from "../components/images/black.png";

import "./Animationn.css";

// var Carousel = require('react-responsive-carousel').Carousel;
class Carousels extends Component {
  state = {
    activeSilde: 0,
  };

  handleSlideSelect = () => {};

  render() {
    const responsive = {
      desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
      mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
      tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    };

    const CustomDot = ({ onMove, index, onClick, active }) => {
      // onMove means if dragging or swiping in progress.
      // active is provided by this lib for checking if the item is active or not.
      return (
        <li
          className={active ? "active" : "inactive"}
          onClick={() => onClick()}
        >
          {index + 1}
        </li>
      );
    };

    // const CustomRight = ({ onClick }) => (
    //   <button className="arrow right" onClick={onClick}>
    //     Right
    //   </button>
    // );
    // const CustomLeft = ({ onClick }) => (
    //   <button className="arrow left" onClick={onClick}>
    //     Left
    //   </button>
    // );
    //Also please improve the dot problem
    // Here we used number to just know click event buthelp us with ui too

    return (
      // <!-- Main Carousel Section Start -->
      <div id="main-slide" className="carousel slide " data-ride="carousel">
        {/* <ol className="carousel-indicators">
          <li data-target="#main-slide" data-slide-to="0" className="active"></li>
          <li data-target="#main-slide" data-slide-to="1"></li>
          <li data-target="#main-slide" data-slide-to="2"></li>
        </ol> */}
        <div className="carousel-inner">
          <Carousel
            responsive={responsive}
            additionalTransfrom={0}
            removeArrowOnDeviceType={["mobile", "tablet"]}
            autoPlay={true}
            autoPlaySpeed={5000}
            centerMode={false}
            className=""
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            showDots={true}
            sliderClass=""
            slidesToSlide={1}
            swipeable
            customDot={<CustomDot />}
            // customRightArrow={<CustomRight />}
            // customLeftArrow={<CustomLeft />}
          >
            <div>
              <div className="w-full ">
                <img
                  className="w-full   object-cover  "
                  src={pic1}
                  alt="Second slide"
                />
              </div>
              <div className="hidden lg:block ">
                <p className=" absolute   -my-[32%] text-5xl ml-[42%] method ">
                  Fαll For Coмғorт
                  <span></span>
                </p>
                <button className="method   absolute animate-pulse  inline-flex items-center justify-center  -my-[27%] ml-[48%] b-3 p-2.5 w-44 h-10  border-black  text-white ">
                  ѕнор беѕт ѕеʟʟегѕ
                  <span> </span>
                </button>
              </div>
            </div>

            <div>
              <div className="w-full ">
                <img
                  className="w-full object-cover "
                  src={pic2}
                  alt="Third slide"
                />
              </div>
              <div className="hidden lg:block ">
                <p className=" absolute animate-pulse -my-[32%] text-5xl hover:text-rose-400 text-black  ml-[42%] ">
                  αωαяєηєѕѕ is ρσωєя
                </p>
                <p className="absolute   text-lg  -my-[27%] ml-[20%] text-white">
                  This Breast Cancer Awareness Month,join us in empowering
                  woman's wellness as ws share stories of
                  support,strength,andpersevrance
                </p>
                <button className="absolute hover:bg-red-400  inline-flex items-center justify-center  -my-[23%] ml-[48%] b-3 p-2.5 w-44 h-10 border-black bg-black text-white ">
                  leαrɴ мore
                </button>
              </div>
            </div>

            <div>
              <div className="w-full  ">
                <img
                  className="w-full  object-cover "
                  src={pic3}
                  alt="Second slide"
                />
              </div>

              <div className="hidden lg:block ">
                <p className=" absolute -my-[33%] text-5xl hover:text-rose-400 text-black  ml-[40%]  ">
                  мєєт вαяєℓу zєя0
                </p>
                <p className="absolute text-xl -my-[28%] ml-[44%] hover:text-emerald-500">
                  Oυя Bєѕт-Sєℓℓιηg Cσℓℓє¢тιση
                </p>
                <button className=" absolute hover:bg-red-400 inline-flex items-center justify-center  -my-[24%] ml-[44%] b-3 p-2.5 w-64 h-10 border-black bg-black text-white ">
                  ѕнσρ вαяєℓу zєяσ
                </button>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
      /* <!-- Main Carousel Section End --> */
    );
  }
}

export default Carousels;
