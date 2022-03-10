import "../style/nav.css";
import { Link } from "react-router-dom";
// Navigation Component
export default function Nav(){

    return (

        // <!-- Navigation Bar -->
        <nav>
      
          {/* <!-- Logo --> */}
          <a href="#"><img src="../assets/shared/logo.svg" alt="Space Logo" /></a>
          <hr></hr>

          {/* <!-- Navigation Menu --> */}
          <ul className="nav-menu">
            
            <li className="nav-item">
              <Link to="/">
                  <span className="nav-num">00</span>
                  Home
              </Link>
            </li>
            <li className="nav-item">
               <Link to="/destination">
                  <span className="nav-num">01</span>
                  Destination
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/crew">
                  <span className="nav-num">02</span>
                  Crew
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/technology">
                  <span className="nav-num">03</span>
                  Technology
              </Link>
            </li>
      
          </ul>
      
        </nav>

    );

}