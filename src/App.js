import './style/common.css';
import Nav from "./Components/Nav";
import Homepage from './Components/Homepage';
import Destination from './Components/Destination';
import Crew from "./Components/Crew"
import Technology from './Components/Technology';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path='/' element={ <Homepage /> }>
          </Route>
          <Route exact path='/destination' element={ <Destination /> }></Route>
          <Route exact path='/crew' element={ <Crew /> }></Route>
          <Route exact path='/technology' element={ <Technology /> }></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
