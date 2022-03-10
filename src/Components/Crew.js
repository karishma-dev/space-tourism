import Subheading from "./Subheading";
import {useState} from "react";
import "../style/crew.css";

const data = require("../data.json");

export default function Crew(){
    const [crewId, setCrewId] = useState(0);
    window.onload = document.documentElement.style.setProperty(
        "--background",
        'url("../assets/crew/background-crew-desktop.jpg")'
    );

    const {name, images, role, bio} = data.crew[crewId];

    const change = (id) => {
        setCrewId(id);
    }

    return(
        <div className="container">
            <Subheading number="2" heading = "Meet your crew" />

            <div className="crew">
                <div className="crew-text">
                    <span>
                        {role}
                    </span>
                    <h3 className="name">
                        {name}
                    </h3>
                    <p>
                        {bio}
                    </p>
                </div>

                <img src={images.png} alt={name} />
            </div>

            <div className="pagination-crew">
                <span onClick={() => change(0)} className="active-dot">.</span>
                <span onClick={() => change(1)}>.</span>
                <span onClick={() => change(2)}>.</span>
                <span onClick={() => change(3)}>.</span>
            </div>

        </div>
    );
}