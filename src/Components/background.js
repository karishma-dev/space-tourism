
export default function background(name){

    let backgroundDesktop, backgroundTablet, backgroundMobile;

    switch(name){
        case "homepage":
            backgroundDesktop = 'url("../assets/home/background-home-desktop.jpg")';
            backgroundTablet = 'url("../assets/home/background-home-tablet.jpg")';
            backgroundMobile = 'url("../assets/home/background-home-mobile.jpg")';
            break;

        case "destination": 
            backgroundDesktop = 'url("../assets/destination/background-destination-desktop.jpg")';
            backgroundTablet = 'url("../assets/destination/background-destination-tablet.jpg")';
            backgroundMobile =  'url("../assets/destination/background-destination-mobile.jpg")';
            break;
        
        case "crew": 
            backgroundDesktop = 'url("../assets/crew/background-crew-desktop.jpg")';
            backgroundTablet = 'url("../assets/crew/background-crew-tablet.jpg")';
            backgroundMobile = 'url("../assets/crew/background-crew-mobile.jpg")';
            break;

        case "technology": 
            backgroundDesktop = 'url("../assets/technology/background-technology-desktop.jpg")';
            backgroundTablet = 'url("../assets/technology/background-technology-tablet.jpg")';
            backgroundMobile = 'url("../assets/technology/background-technology-mobile.jpg")';
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