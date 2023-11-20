import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Men from "./components/men";
import Sale from "./components/Sale";
import Gift from "./components/Gift";
import New from "./components/New";
import Ourstory from "./components/Ourstory";
import Productpage2 from "./components/Productpage2";
// import Acdn from "./components/Acdn";
// import Tokyo from "./components/Tokyo";
// import Step from "./components/Step";

function App() {
  return (
    // <Acdn />
    // <Tokyo />
    // <Step />
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/Sale" element={<Sale />} />
        <Route path="/Gift" element={<Gift />} />
        <Route path="/New" element={<New />} />
        <Route path="/Ourstory" element={<Ourstory />} />
        <Route path="/Productpage2" element={<Productpage2 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;