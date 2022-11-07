import React from "react";
import Categories from "./Categories";
import Newsletter from "./Newsletter";
import Products from "./Products";
import Slider from "./Slider";
import Announcement from "./Announcement";
import Footer from "./Footer";

import Navbar from "./Navbar";


const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products/>
      <Newsletter/>
      <Footer /> 
     
    </div>
  );
};  

export default Home;
