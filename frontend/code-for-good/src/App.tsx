import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Emergency from "./components/Emergency";
import Mentor from "./components/Mentor";
import Mentee from "./components/Mentee";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import MenteeHome from "./components/Menteehome";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/housing_form" element={<Emergency />} />
        <Route path="/mentor_form" element={<Mentor />} />
        <Route path="mentee_form" element={<Mentee />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mentee-home" element={<MenteeHome />} />
      </Routes>
    </Router>
  );
}

export default App;
