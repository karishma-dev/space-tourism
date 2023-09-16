/// Destination.js
import Subheading from "./Subheading";
import { useState, useEffect } from "react";
import background from "./background";
import "../style/destination.css";
import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import titan from "../assets/destination/image-titan.png";
import iss from "../assets/destination/image-iss.png";
import earth from "../assets/destination/image-earth.png";
import Image from "./Image";
import { Link } from "react-router-dom";

// Data
const data = require("../data.json");

// Crew Component
export default function Destination() {
  // State
  const [destinationId, setDestinationId] = useState(0);
  const [timePeriod, setTimePeriod] = useState("now"); // for the cost slider

  // Change Background onload
  window.onload = background("destination");

  // Data of Destination from data
  const { name, images, description, travel } =
    data.destinations[destinationId];
  let avgCost = data.destinations[destinationId].cost[timePeriod];

  // Function to change time period cost and destinationId
  const changeTimePeriod = (event) => {
    setTimePeriod(event.target.value);
  };
  const changeDestinationId = (id) => {
    setDestinationId(id);
  };

  useEffect(() => {
    const list = document.querySelectorAll(".destination-names span");
    for (let i = 0; i < list.length; i++) {
      list[i].classList.remove("active");
    }
    list[destinationId].classList.add("active");
  }, [destinationId]);

  const image = () => {
    const arr = [earth, iss, moon, mars, titan];
    return arr[destinationId];
  };

  return (
    // Container
    <div className="container destination-container">
      {/* Subheading */}
      <Subheading number="1" heading="Pick Your destination" />

      {/* Destination */}
      <div className="destination">
        {/* Destination Image */}
        <Image im={image()} name={name} />

        {/* Destination Text */}
        <div className="destination-text">
          {/* Destination Pagination */}
          <div className="destination-names">
            <span onClick={() => changeDestinationId(0)}>Suborbital</span>
            <span onClick={() => changeDestinationId(1)}>ISS</span>
            <span onClick={() => changeDestinationId(2)}>Moon</span>
            <span onClick={() => changeDestinationId(3)}>Mars</span>
            <span onClick={() => changeDestinationId(4)}>Titan</span>
          </div>

          <h4
            style={{ fontSize: "3em", marginBottom: "0.5em", marginTop: "2em" }}
          >
            {name}
          </h4>
          <p>{description}</p>

          {/* Destination Info */}
          <div className="destination-info">
            <div className="avg-cost">
              <h4>Average Cost</h4>
              <span>{avgCost} </span>
              <select onChange={changeTimePeriod}>
                <option value="now">Now</option>
                <option value="in_50_years">In 50 Years</option>
                <option value="in_200_years">In 200 Years</option>
              </select>
            </div>
            <div className="travel-time">
              <h4>est. travel time</h4>
              <span>{travel}</span>
            </div>
            <Link to={`/providers?d=${destinationId}`}>
              <button>See Providers</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
