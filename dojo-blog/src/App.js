import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
            {/* using routes instead of switch as the notation has changed */}
          <Routes>
            <Route path="/" element={<Home />} />
            {/* this is needed as it is a new version of react and the style has changed */}
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
