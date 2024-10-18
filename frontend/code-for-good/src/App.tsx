import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Emergency from "./components/Emergency";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/housing_form" element={<Emergency />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
