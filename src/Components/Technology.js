// Import Statements
import Subheading from "./Subheading";
import {useState, useEffect} from "react";
import "../style/technology.css";
import background from "./background";

// Data
const data = require("../data.json");

export default function Technology(){

    // State
    const [technologyId, setTechnologyId] = useState(0);

    // Change Background onload
    window.onload = background("technology");

    // Data of Technology from data
    const {name, images, description} = data.technology[technologyId];
    
    // Function to change technologyId onClick crew
    const change = (id) => {
        setTechnologyId(id);
    }

    useEffect(() => {
        const list = document.querySelectorAll('.pagination-tech span');
		for (let i = 0; i < list.length; i++) {
			list[i].classList.remove('active-dot');
		}
        list[technologyId].classList.add("active-dot");
    }, [technologyId]);
    

    return(
        // Technology
        <div className="container">

            {/* Subheading */}
            <Subheading number="3" heading = "Space launch 101" />

            {/* Technology */}
            <div className="technology">

                {/* Technology Pagination */}
                <div className="pagination-tech">
                    <span onClick={() => change(0)}>1</span>
                    <span onClick={() => change(1)}>2</span>
                    <span onClick={() => change(2)}>3</span>
                </div>

                {/* Technology Text */}
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

                {/* Technology Image */}
                <picture>
                    <source media="(max-width: 1200px)" srcSet={images.landscape} className="tech-img" />
                    <source media="(min-width: 1201px)" srcSet={images.portrait} className="tech-img" />
                    <img src={images.portrait} alt={name} className="tech-img" />
                </picture>

            </div>

        </div>
    );
}