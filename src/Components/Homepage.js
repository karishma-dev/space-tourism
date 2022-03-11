// Import Statement
import "../style/homepage.css";
import background from "../Components/background";

// Homepage Component
export default function Homepage(){

    // Change Background onload
    window.addEventListener("load", background("homepage"))

    return (
        // Homepage
        <div className="homepage">

            {/* Homepage Text */}
            <div className="home-text">
                <span id="heading">
                    So, You want to travel to
                </span>
                <h1>Space</h1>
                <p>
                    Let's face it: if you want to go to space, 
                    you might as well genuinely go to outer 
                    space and not hover kind of on the edge of it.
                    Well sit back, and relaxe because we'll give you a truly out of this
                    world experience.
                </p>
            </div>

            {/* Homepage Image */}
            <div className="header-img"></div>

            {/* Homepage Button */}
            <button className="explore-btn">
                Explore
            </button>
        
        </div>
    );
}