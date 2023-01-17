import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Buynow from "../Buynow/Buynow";
import Footer from "../Footer/Footer";
import Reviews from "../Reviews/Reviews";

import Topbar from "../Topbar/Topbar";
import Tutorial from "../Tutorial/Tutorial";
import Workshop from "../Workshop/Workshop";

const Home = () => {
  return (
    <div>
      <Topbar></Topbar>
      <Banner></Banner>
      <About></About>
      <Buynow></Buynow>
      <Workshop></Workshop>
      <Tutorial></Tutorial>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
