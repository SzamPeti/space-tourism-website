import React from "react";
import { images } from "../../constants";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <img src={images.logo} alt="logo" className="logo" />
        <ul className="navbar_elements">
          <div className="navbar_li">
            <li>
              <b>00</b> Home
            </li>
          </div>
          <li>
            <b>01</b> Destination
          </li>
          <li>
            <b>02</b> Crew
          </li>
          <li>
            <b>03</b> Technology
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
