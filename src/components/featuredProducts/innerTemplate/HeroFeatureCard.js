import React from "react";

const HeroFeatureCard = () => {
  return (
    <div className="col-md-4 col-lg-3 col-sm-6 mb-4 col-6">
      <div className="card p-4 h-100">
        <h6>Up to 70% off | Electronics clearance</h6>
        <img
          src="https://static-01.daraz.com.bd/p/7bbb852dcf5ebdbf0ce040d81d51ecbd.jpg_200x200q80-product.jpg_.webp"
          className="img-fluid  mt-2"
          alt=""
        />
        <a className="mt-2 font-weight-bold" href="">See More</a>
      </div>
    </div>
  );
};

export default HeroFeatureCard;
