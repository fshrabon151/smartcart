import React from "react";

const BigStoreCard = () => {
  return (
    <div className="col-md-2 col-sm-4 col-6 mb-4">
      <div className="card " style={{height:"200px",border: "5px solid #a09696"}}>
        <div className="card-body align-self-center d-flex">
          <img
            src="https://martjackstorage.blob.core.windows.net/in-resources/8845e144-8902-4204-b80f-9dc7dc2f4bcb/Images/userimages/shwapno-logo.jpg"
            className="img-fluid "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BigStoreCard;
