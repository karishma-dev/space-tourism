import "../style/homepage.css";

// Homepage Component
export default function Homepage(){
    window.onload = document.documentElement.style.setProperty(
        "--background",
        'url("../assets/home/background-home-desktop.jpg")'
    );

    return (
        <div className="homepage">
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
            <div className="header-img"></div>
            <button className="explore-btn">
                Explore
            </button>
        </div>
    );
}