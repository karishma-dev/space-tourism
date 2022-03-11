// Import Statements
import Nav from "./Components/Nav";
import Homepage from './Components/Homepage';
import Destination from './Components/Destination';
import Crew from "./Components/Crew"
import Technology from './Components/Technology';
import './style/common.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// App Component
export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={ <Homepage /> } />
          
          <Route path='Destination' element={ <Destination /> } />
          <Route path='Crew' element={ <Crew /> } />
          <Route path='Technology' element={ <Technology /> } />
        </Routes>
      </div>
    </Router>
  );
}

