import React from "react";
import { images } from "../../constants";
import Destination from "../Destination/Destination";
import Crew from "../Crew/Crew";
import Technology from "../Technology/Technology";
import "./Navbar.css";

//Changeing the active className to the page where we are.
// const activePage = () {
//   const pathName = window.location.pathname //TODO
// };

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <img src={images.logo} alt="logo" className="logo" />
        <div className="navbar_elements">
          <div className="navbar_padding">
            <a className="active" href="/">
              <b>00</b> Home
            </a>
          </div>

          <div className="navbar_padding">
            <a href={<Destination />}>
              <b>01</b> Destination
            </a>
          </div>

          <div className="navbar_padding">
            <a href={<Crew />}>
              <b>02</b> Crew
            </a>
          </div>

          <div className="navbar_padding">
            <a href={<Technology />}>
              <b>03</b> Technology
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
