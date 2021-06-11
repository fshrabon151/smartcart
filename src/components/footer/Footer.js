import "../../stylesheets/Footer.css";
import React from "react";
import FooterElements from "./innerTemplates/FooterElements";
import { FOOTER } from "../../Data/data";
import { FaShoppingBag } from "react-icons/fa";
import { FaCentos } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container-fluid bg-footer">
      <div className="footer_main border-bottom">
        <div className="footer_main_content">
          <div className="row">
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-3 col-sm-6 col-6">
                  <FooterElements title="About" data={FOOTER.about} />
                </div>
                <div className="col-md-3 col-sm-6 col-6">
                  <FooterElements title="Help" data={FOOTER.help} />
                </div>
                <div className="col-md-3 col-sm-6 col-6">
                  <FooterElements title="Policy" data={FOOTER.policy} />
                </div>
                <div className="col-md-3 col-sm-6 col-6">
                  <FooterElements title="Social" data={FOOTER.social} />
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="row">
                <div className="col-md-6  col-sm-6 col-6">
                  <FooterElements title="Mail Us" data={FOOTER.mail_us} />
                </div>
                <div className="col-md-6 col-sm-6 col-6">
                  <FooterElements
                    title="Registered Office Adress"
                    data={FOOTER.mail_us}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_buttom text-white pb-3">
        <div className="row">
          <div className="col-md-5 offset-md-1">
            <div className="row">
              <div className="col-md-3 col-sm-6 col-6">
                <p>
                  <FaShoppingBag className="text-warning" /> Sell on Smartcart
                </p>
              </div>
              <div className="col-md-3 col-sm-6 col-6">
                <p>
                  <FaCentos className="text-warning" /> Advertise
                </p>
              </div>
              <div className="col-md-3 col-sm-6 col-6">
                <p>
                  <FaGift className="text-warning" /> Gift Card
                </p>
              </div>
              <div className="col-md-3 col-sm-6 col-6">
                <p>
                  <FaQuestionCircle className="text-warning" /> Help Center
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <p>&copy; 2007-2021 smartcart.com.bd</p>
          </div>
          <div className="col-md-4">
            <img
              src="https://instructory.net//assets/images/ssl-logoss.png"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
