import Subheading from "./Subheading";
import {useState} from "react";
import "../style/destination.css";

const data = require("../data.json");

export default function Destination(){
    const [destinationId, setDestinationId] = useState(0);

    window.onload = document.documentElement.style.setProperty(
        "--background",
        'url("../assets/destination/background-destination-desktop.jpg")'
    );

    const {name, images, description, distance, travel} = data.destinations[destinationId];
    
    const change = (id) => {
        setDestinationId(id);
    }

    return(
        <div className="container destination-container">

            <Subheading number="1" heading = "Pick Your destination" />

            <div className="destination-names">
                <span onClick={() => change(0)}>Moon</span>
                <span onClick={() => change(1)}>Mars</span>
                <span onClick={() => change(2)}>Europa</span>
                <span onClick={() => change(3)}>Titan</span>
            </div>


            <div className="destination">

                <img src={images.png} alt={name}/>

                <div className="destination-text">

                    <h3>
                        {name}
                    </h3>
                    <p>
                        {description}
                    </p>

                    <div className="destination-info">
                        <div className="avg-distance">
                            <h4>
                                Average distance
                            </h4>
                            <span>
                                {distance}
                            </span>
                        </div>
                        <div className="travel-time">
                            <h4>
                                est. travel time
                            </h4>
                            <span>
                                {travel}
                            </span>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}