import React from "react";

const Home = () => {
  return (
    <div>
      <div className="navbar">
        <ul>
          <li>00 Home</li>
          <li>01 Destination</li>
          <li>02 Crew</li>
          <li>03 Technology</li>
        </ul>
      </div>

      <h2>So, you want to travel to</h2>
      <h1>Space</h1>
      <p>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>

      <button className="btn_explore">Explore</button>
    </div>
  );
};

export default Home;
