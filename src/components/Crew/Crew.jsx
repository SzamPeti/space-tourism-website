import React from "react";
import { images } from "../../constants";

const Crew = () => {
  return (
    <div
      className="crew"
      style={{
        backgroundImage: `url(${images.background_crew_pc})`,
        height: `100vh`,
      }}
    >
      <div>02 Meet your crew</div>
    </div>
  );
};

export default Crew;
