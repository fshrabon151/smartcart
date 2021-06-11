import React from "react";
import BigStoreCard from "./innerTemplates/BigStoreCard";
import { FcShipped } from "react-icons/fc";
import { FaArrowRight } from "react-icons/fa";

const BigStotes = () => {
  return (
    <div className="container-fluid my-2">
      <div className="mx-3 my-4">
        <div className="d-flex justify-content-between">
          <h2>
            <FcShipped /> Big Selection Stores
          </h2>
          <h2>
            Next <FaArrowRight />
          </h2>
        </div>
        <div className="row m-3">
          <BigStoreCard />
          <BigStoreCard />
          <BigStoreCard />
          <BigStoreCard />
          <BigStoreCard />
          <BigStoreCard />
        </div>
      </div>
    </div>
  );
};

export default BigStotes;
