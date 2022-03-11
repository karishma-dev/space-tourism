// Import Statements
import Subheading from "./Subheading";
import {useState,useEffect} from "react";
import background from "./background";
import "../style/crew.css";

// Data
const data = require("../data.json");

// Crew Component
export default function Crew(){

    // State
    const [crewId, setCrewId] = useState(0);

    // Change Background onload
    window.onload = background("crew");

    // Data of crew from data
    const {name, images, role, bio} = data.crew[crewId];

    // Function to change crewId onClick crew 
    const change = (id) => {
        setCrewId(id);
    }
    useEffect(() => {
        const list = document.querySelectorAll('.pagination-crew span');
		for (let i = 0; i < list.length; i++) {
			list[i].classList.remove('active-dot');
		}
        list[crewId].classList.add("active-dot");
    }, [crewId]);
    
    return(

        // Container
        <div className="container">

            {/* SubHeading */}
            <Subheading number="2" heading = "Meet your crew" />

            {/* Crew */}
            <div className="crew">

                {/* Crew Text */}
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

                {/* Crew Image */}
                <img src={images.png} alt={name} />

            </div>

            {/* Pagination */}
            <div className="pagination-crew">
                <span onClick={() => change(0)}>.</span>
                <span onClick={() => change(1)}>.</span>
                <span onClick={() => change(2)}>.</span>
                <span onClick={() => change(3)}>.</span>
            </div>

        </div>

    );
    
}