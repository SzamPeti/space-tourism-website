import React from "react";
// import { ReactComponent as ReactLogo } from "./assets/shared/logo";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        {/* <ReactLogo className="logo" alt="Logo" /> */}
        <h3 className="logo">Logo</h3>
        <ul className="navbar_elements">
          <li>
            <b>00</b> Home
          </li>
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
