import React from "react";
import ReactImageMagnify from "react-image-magnify";
import Ben1 from "../components/images/Men1.png";
import Ben2 from "../components/images/Men2.png";
import "./Animationn.css";
function Acdn() {
  return (
    <div>
       <div className="perimeter">
      <div style={{ width: "342px", height: "513px" }} className="image">
        ...
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "Wristwatch by Ted Baker London",
              isFluidWidth: true,
              src: Ben1,
              width: 1200,
              height: 1800,
            },
            largeImage: {
              src: Ben1,
              width: 1200,
              height: 1800,
            },
          }}
        />
      </div>
    </div></div>
  );
}

export default Acdn;
