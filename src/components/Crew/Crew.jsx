import React from "react";
import { images } from "../../constants";

const crew = [
  {
    name: "Douglas Hurley",
    imgUrl: "images.img_douglas",
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",
    imgUrl: "images.img_mark",
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",
    imgUrl: "images.img_victor",
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    name: "Anousheh Ansari",
    imgUrl: "images.img_ansari",
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

const Crew = () => {
  return (
    <div
      className="crew"
      style={{
        backgroundImage: `url(${images.background_crew_pc})`,
        height: `100vh`,
      }}
    >
      <div className="meetCrew">
        <b className="nmb2">02</b> Meet your crew
      </div>

      <div className="job"></div>

      <div className="name"></div>

      <div className="descript"></div>

      <div className="crewPic"></div>

      <div className="slide"></div>
    </div>
  );
};

export default Crew;
