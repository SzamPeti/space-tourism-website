import React from "react";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h2 className="first_line">So, you want to travel to</h2>
        <h1 className="second_line">Space</h1>
        <p className="third_line">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <button className="btn_explore">Explore</button>
    </div>
  );
};

export default Home;
