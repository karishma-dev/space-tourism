import homeM from "../assets/home/background-home-mobile.jpg";
import homeT from "../assets/home/background-home-tablet.jpg";
import homeD from "../assets/home/background-home-desktop.jpg";
import destinD from "../assets/destination/background-destination-desktop.jpg";
import destinT from "../assets/destination/background-destination-tablet.jpg";
import destinM from "../assets/destination/background-destination-mobile.jpg";
import crewM from "../assets/crew/background-crew-mobile.jpg";
import crewT from "../assets/crew/background-crew-tablet.jpg";
import crewD from "../assets/crew/background-crew-desktop.jpg";
import techM from "../assets/technology/background-technology-mobile.jpg";
import techT from "../assets/technology/background-technology-tablet.jpg";
import techD from "../assets/technology/background-technology-desktop.jpg";

export default function background(name){

    let backgroundDesktop, backgroundTablet, backgroundMobile;

    switch(name){
        case "homepage":
            backgroundDesktop = `url(${homeD})`;
            backgroundTablet = `url(${homeT})`;
            backgroundMobile = `url(${homeM})`;
            break;

        case "destination": 
            backgroundDesktop = `url(${destinD})`;
            backgroundTablet = `url(${destinT})`;
            backgroundMobile =  `url(${destinM})`;
            break;
        
        case "crew": 
            backgroundDesktop = `url(${crewD})`;
            backgroundTablet = `url(${crewT})`;
            backgroundMobile = `url(${crewM})`;
            break;

        case "technology": 
            backgroundDesktop = `url(${techD})`;
            backgroundTablet = `url(${techT})`;
            backgroundMobile = `url(${techM})`;
            break;
        default:
            console.log("Error....");
            break;
    }

    document.documentElement.style.setProperty(
        "--background-desktop",
        backgroundDesktop
    );
    document.documentElement.style.setProperty(
        "--background-tablet",
        backgroundTablet
    );
    document.documentElement.style.setProperty(
        "--background-mobile",
        backgroundMobile
    );
}