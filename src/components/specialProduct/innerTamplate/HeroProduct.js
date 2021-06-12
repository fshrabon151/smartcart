import React from "react";

const HeroProduct = () => {
  return (
    <div className="col-md-3 col-lg-3 col-sm-6 col-6 mb-3">
      <div className="card bg-info h-100">
        <div className="card-body">
          <h6>Save on construction</h6>
          <div className="row">
            <div className="col-6">
              <img
                src="https://www.pngkit.com/png/full/296-2965670_order-now-cement.png"
                alt=""
                className="img-fluid w-100"  height="140"
              />
            </div>
            <div className="col-6 align-self-center d-flex">
              <h1 className="">379</h1>
              <p className="text-right">Start</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroProduct;
