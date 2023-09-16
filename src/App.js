// Import Statements
import Nav from "./Components/Nav";
import Homepage from "./Components/Homepage";
import Destination from "./Components/Destination";
import Providers from "./Components/Providers";
import "./style/common.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// App Component
export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/destination" element={<Destination />}></Route>
          <Route path="/providers" element={<Providers />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
