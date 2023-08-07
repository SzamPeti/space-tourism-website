import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { images } from "../../constants";
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
          <div className="txtPosition">
            <CustomLink className="active" to="/">
              <div className="navbar_padding">
                <b>00</b> Home
              </div>
            </CustomLink>
            <CustomLink to="/destination">
              <div className="navbar_padding">
                <b>01</b> Destination
              </div>
            </CustomLink>
            <CustomLink to="/crew">
              <div className="navbar_padding">
                <b>02</b> Crew
              </div>
            </CustomLink>
            <CustomLink to="/technology">
              <div className="navbar_padding">
                <b>03</b> Technology
              </div>
            </CustomLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
