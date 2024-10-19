import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Emergency from "./components/Emergency";
import Mentor from "./components/Mentor";
import Mentee from "./components/Mentee";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import SignUpButtons from "./components/SignUpButtons";
import Navbar from "./components/Navbar";
import Chatroom from "./components/Chatroom";
import MenteeHome from "./components/Menteehome";
import Skillgame from "./components/skillgame";
function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/housing_form" element={<Emergency />} />
        <Route path="/mentor_form" element={<Mentor />} />
        <Route path="mentee_form" element={<Mentee />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup_redirect" element={<SignUpButtons />} />
        <Route path="/chat" element={<Chatroom />} />
        <Route path="/mentee_home" element={<MenteeHome />} />
        <Route path="/skillgame" element={<Skillgame />} />
      </Routes>
    </Router>
  );
}

export default App;
