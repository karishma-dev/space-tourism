import Subheading from "./Subheading";
import {useState} from "react";
import "../style/technology.css";

const data = require("../data.json");

export default function Technology(){
    const [technologyId, setTechnologyId] = useState(0);

    window.onload = document.documentElement.style.setProperty(
        "--background",
        'url("../assets/technology/background-technology-desktop.jpg")'
    );

    const {name, images, description} = data.technology[technologyId];
    
    const change = (id) => {
        setTechnologyId(id);
    }

    return(
        <div className="container">
            <Subheading number="3" heading = "Space launch 101" />

            <div className="technology">
                <div className="pagination-tech">
                    <span onClick={() => change(0)} className="active-dot">1</span>
                    <span onClick={() => change(1)}>2</span>
                    <span onClick={() => change(2)}>3</span>
                </div>

                <div className="technology-text">
                    <span>
                        The terminology of
                    </span>
                    <h3>
                        {name}
                    </h3>
                    <p>
                        {description}
                    </p>
                </div>

                <img src={images.portrait} alt={name} className="tech-img"/>

            </div>

        </div>
    );
}