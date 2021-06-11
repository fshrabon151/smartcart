import React from "react";
import HeroFeatureCard from "./innerTemplate/HeroFeatureCard";
import NestedFeatureCard from "./innerTemplate/NestedFeatureCard";

const FeaturedProducts = () => {
  return (
    <div className="container-fluid">
      <div className="row grad p-5">
        <HeroFeatureCard />
        <NestedFeatureCard />
        <NestedFeatureCard />
        <NestedFeatureCard />
      </div>
    </div>
  );
};

export default FeaturedProducts;
