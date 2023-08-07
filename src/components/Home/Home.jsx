import React from "react";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div
      style={{ backgroundImage: `url(${images.background_home_pc})` }}
      className="homePage"
    >
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

      <Link to="/destination" className="btn_explore">
        <div className="explore"></div>Explore
      </Link>
    </div>
  );
};

export default Home;
