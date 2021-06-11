import React from "react";
import { FcShipped } from "react-icons/fc";
import { FaArrowRight } from "react-icons/fa";
import WholesaleCard from "./innerTemplates/WholesaleCard";

import "../../stylesheets/Wholesale.css"

const Wholesales = () => {
  return (
    <div className="container-fluid my-2">
      <div className="d-flex justify-content-between mx-3 my-4">
        <h2 className="text-capitalize">
          <FcShipped /> Start your wholesale shopping
        </h2>
        <h2>
          Next <FaArrowRight />
        </h2>
      </div>
      <div className="row m-3">
       <WholesaleCard/>
       <WholesaleCard/>
       <WholesaleCard/>
       <WholesaleCard/>
       <WholesaleCard/>
       <WholesaleCard/>
      </div>
    </div>
  );
};

export default Wholesales;
