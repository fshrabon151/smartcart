import React from "react";
import BigStotes from "./bigStores/BigStotes";
import FeaturedProducts from "./featuredProducts/FeaturedProducts";
import Footer from "./footer/Footer";
import HeroSlider from "./slider/HeroSlider";
import Wholesales from "./Wholesales/Wholesales";
import SpecialProduct from './specialProduct/SpecialProduct';
import Header1 from './Header/Header1';

const MainComponent = () => {
  return (
    <div>
      <Header1/>
      <HeroSlider/>
      <Wholesales/>
      <BigStotes/>
      <FeaturedProducts />
      <SpecialProduct/>
      <Footer/>
    </div>
  );
};

export default MainComponent;
