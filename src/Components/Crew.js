// Import Statements
import Subheading from "./Subheading";
import {useState,useEffect} from "react";
import background from "./background";
import "../style/crew.css";
import Image from "./Image";
import douglas from "../assets/crew/image-douglas-hurley.png";
import mark from "../assets/crew/image-mark-shuttleworth.png";
import victor from "../assets/crew/image-victor-glover.png";
import ansari from "../assets/crew/image-anousheh-ansari.png";

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
    
    const image = () => {
        if(name === "Douglas Hurley") {
            return douglas;
        }else if(name === "Mark Shuttleworth"){
            return mark;
        }else if(name === "Victor Glover"){
            return victor;
        }else{
            return ansari;
        }
    }
    
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
                <Image im={image()} name ={name} />

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