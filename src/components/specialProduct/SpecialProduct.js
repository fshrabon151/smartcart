import React from "react";
import HeroProduct from "./innerTamplate/HeroProduct";
import HeroProduct2 from "./innerTamplate/HeroProduct2";

const SpecialProduct = () => {
  return (
    <div className="container-fluid py-4 mb-5">
      <div className="px-3">
        <h2 className="text-uppercase">Construction & realstate</h2>
        <div className="row mt-3">
          <HeroProduct />
          <HeroProduct2 />
          <HeroProduct2 />
          <HeroProduct2 />
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
