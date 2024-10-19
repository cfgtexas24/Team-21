import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Emergency from "./components/Emergency";
import Mentor from "./components/Mentor";
import Mentee from "./components/Mentee";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/housing_form" element={<Emergency />} />
          <Route path="/mentor_form" element={<Mentor />} />
          <Route path="mentee_form" element={<Mentee />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
