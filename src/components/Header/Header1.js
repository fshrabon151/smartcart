import React, { useState } from "react";
import "../../stylesheets/Header.css";
import { FaSignInAlt } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,

} from "reactstrap";

const Header1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="container-fluid bg-header">
      <div className="row">
        <div className="col-md-2 align-self-center nav-left">
          <h1 className="text-white logo">SmartCart</h1>
        </div>
        <div className="col-md-7 align-self-center nav-center search">
          <form action="" className="form-data">
            <input type="text" className="form-control search-data" placeholder="What are you looking for..." />
            <FaSearch className="search-icon"/>
          </form>
        </div>
        <div className="col-md-3 align-self-center nav-right pr-4">
          <ul className="d-flex justify-content-between align-self-center mt-3">
            <li>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg"
                width="30"
                alt=""
              />{" "}
              <br /> <span style={{ fontSize: ".80rem" }}>বাংলা</span>{" "}
            </li>
            <li>
              <FaSignInAlt /> Sign in
            </li>
            <li>
              <FaAppStoreIos /> Apps
            </li>
            <li>
              <FaCartArrowDown /> Cart
            </li>
          </ul>
        </div>
      </div>

      <Navbar light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto d-flex justify-content-around bottom-nav" navbar>
            <NavItem>All</NavItem>
            <NavItem>Weekly Add</NavItem>
            <NavItem>Sell on Smartcart</NavItem>
            <NavItem>Investor</NavItem>
            <NavItem>Factory Direct</NavItem>
            <NavItem>Farmers Direct</NavItem>
            <NavItem>Export</NavItem>
            <NavItem className="bg-danger px-3">Treasure HUNTS</NavItem>
            <NavItem>Shop Super Deals</NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header1;
