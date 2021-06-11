import React from "react";

const WholesaleCard = () => {
  return (
    <div className="col-lg-2 col-md-3 mb-4 col-sm-4 col-6">
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between flex-wrap">
            <button className="wholesale-btn-1 flex-wrap mb-2">
              Vegetables
            </button>
            <button className="wholesale-btn-2 flex-wrap mb-2">View All</button>
          </div>
          <img
            src="https://storage.sg.content-cdn.io/cdn-cgi/image/%7Bwidth%7D,%7Bheight%7D,quality=75,format=auto/in-resources/8845e144-8902-4204-b80f-9dc7dc2f4bcb/Images/ProductImages/Source/2400078.jpg"
            className="img-fluid mx-auto"
            alt=""
          />

          <div className="d-flex justify-content-between flex-wrap">
            <h5 className="text-danger flex-wrap mb-2 font-weight-bolder">
              $10
            </h5>
            <h6 className="flex-wrap mb-2 font-weight-bold">
              Tomato round (Local)/kg
            </h6>
          </div>
          <div className="d-flex justify-content-center mt-2">
            <button
              className="btn btn-primary text-capitalize btn-sm "
              style={{ borderRadius: "50px", padding: "5px 30px" }}
            >
              Add to cart
            </button>
          </div>
        </div>
        <div className="card-footer p-0">
          <ul className="wholesale-card-list mt-2 text-center text-capitalize">
            <li>In-Store</li>
            <li>Pickup</li>
            <li>Delivary</li>
            <li>ship</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WholesaleCard;
