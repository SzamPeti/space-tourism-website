import React from "react";
import Navbar from "../Navbar/Navbar";
import { images } from "../../constants";
import "./Home.css";

const Home = () => {
  return (
    <div
      style={{ backgroundImage: `url(${images.background_home_pc})` }}
      className="homePage"
    >
      <Navbar />
      <div className="textBox">
        <div className="firstLine">So, you want to travel to</div>
        <div className="secondLine">Space</div>
        <div className="thirdLine">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </div>
      </div>

      <button className="btn_explore">Explore</button>
    </div>
  );
};

export default Home;
