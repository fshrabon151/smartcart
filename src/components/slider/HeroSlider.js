import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const HeroSlider = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src="https://icms-image.slatic.net/images/ims-web/c92a236e-f191-4d97-a575-d331a46b13fa.jpg_1200x1200.jpg" />
        </div>
        <div>
          <img src="https://icms-image.slatic.net/images/ims-web/ed056638-c8b0-426b-bed8-888a059fe053.jpg" />
        </div>
        <div>
          <img src="https://icms-image.slatic.net/images/ims-web/33e8e95e-dd18-42ea-9908-ad26eb7479c2.jpg" />
        </div>
      </Carousel>
    </div>
  );
};

export default HeroSlider;
