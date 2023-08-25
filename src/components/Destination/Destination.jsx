import React, { useState } from "react";
import { images } from "../../constants";

import "./Destination.css";

const destinations = [
  {
    name: "Moon",
    imgUrl: "images.img__moon",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    imgUrl: "images.img__mars",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    imgUrl: "images.img__europa",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    imgUrl: "images.img__titan",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];

const Destination = () => {
  const arrayPlanet = destinations.map((destination) => destination.name);
  const arrayDescription = destinations.map(
    (destination) => destination.description
  );
  const arrayDistance = destinations.map((destination) => destination.distance);
  const arrayTime = destinations.map((destination) => destination.travel);

  // Setting up the sub navigation bar's functionality
  const [selectedDestination, setSelectedDestination] = useState("");

  const handleButtonClick = (destinations) => {
    setSelectedDestination(destinations);
  };

  return (
    <div
      className="destination"
      style={{
        backgroundImage: `url(${images.background_destination_pc})`,
      }}
    >
      <div className="destination_pick">
        <b className="nmb">01</b> Pick your destination
      </div>
      {/* <div className="container"> */}
      <div className="miniNavbar">
        <button onClick={() => handleButtonClick("Moon")}>Moon</button>
        <button onClick={() => handleButtonClick("Mars")}>Mars</button>
        <button onClick={() => handleButtonClick("Europa")}>Europa</button>
        <button onClick={() => handleButtonClick("Titan")}>Titan</button>
      </div>
      {selectedDestination === "Moon" && (
        <div>
          <div className="planetName">{arrayPlanet[0]}</div>
          <div className="planetDescr">{arrayDescription[0]}</div>
          <div className="distanceLine">
            Avg. Distance
            <div className="planetDistance">{arrayDistance[0]}</div>
          </div>
          <div className="timeLine">
            EST. Travel Time
            <div className="planetTime">{arrayTime[0]}</div>
          </div>
          <div className="planetImg">
            <img src={images.img_moon} alt="Moon" title="Moon" />
          </div>
        </div>
      )}

      {selectedDestination === "Mars" && (
        <div>
          <div className="planetName">{arrayPlanet[1]}</div>
          <div className="planetDescr">{arrayDescription[1]}</div>
          <div className="distanceLine">
            Avg. Distance
            <div className="planetDistance">{arrayDistance[1]}</div>
          </div>
          <div className="timeLine">
            EST. Travel Time
            <div className="planetTime">{arrayTime[1]}</div>
          </div>
          <div className="planetImg">
            <img src={images.img_mars} alt="Mars" title="Mars" />
          </div>
        </div>
      )}

      {selectedDestination === "Europa" && (
        <div>
          <div className="planetName">{arrayPlanet[2]}</div>
          <div className="planetDescr">{arrayDescription[2]}</div>
          <div className="distanceLine">
            Avg. Distance
            <div className="planetDistance">{arrayDistance[2]}</div>
          </div>
          <div className="timeLine">
            EST. Travel Time
            <div className="planetTime">{arrayTime[2]}</div>
          </div>
          <div className="planetImg">
            <img src={images.img_europa} alt="Europa" title="Europa" />
          </div>
        </div>
      )}

      {selectedDestination === "Titan" && (
        <div>
          <div className="planetName">{arrayPlanet[3]}</div>
          <div className="planetDescr">{arrayDescription[3]}</div>
          <div className="distanceLine">
            Avg. Distance
            <div className="planetDistance">{arrayDistance[3]}</div>
          </div>
          <div className="timeLine">
            EST. Travel Time
            <div className="planetTime">{arrayTime[3]}</div>
          </div>
          <div className="planetImg">
            <img src={images.img_titan} alt="Titan" title="Titan" />
          </div>
        </div>
      )}
    </div>
    /*</div>*/
  );
};

// Setting up that the active subpage (the miniNavbar) will change on click
const activeSubPage = document.querySelector(".active_destination");

const activeSubPageChange = () => {
  if (activeSubPage) {
    activeSubPage.classList.remove("active_destination");
  } else {
    activeSubPage.classList.add("active_destination");
  }
};

export default Destination;
