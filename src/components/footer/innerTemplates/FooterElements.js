import React from "react";

const FooterElements = ({ data, title }) => {
  return (
    <div >
      <div className="footer_data">
        <h6 className="text-uppercase">{title}</h6>
        <ul>
          {data.map((data, i) => (
            <li>{data}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterElements;
