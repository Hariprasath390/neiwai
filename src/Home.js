import React from "react";
import Carousels from "./components/Carousel";
import Footer from "./components/Footer";
import Mainpage from "./components/Mainpage";
import Hover from "./Hover";
import Insta from "./components/Insta";
import Navbar from "./components/Navbar";

function Home() {
  return (
    <div>
     
      <Carousels />
      <Mainpage />
      <Insta />
      <Hover />
     
    </div>
  );
}

export default Home;
