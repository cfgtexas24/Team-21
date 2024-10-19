import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Emergency from "./components/Emergency";
import Mentor from "./components/Mentor";
import Mentee from "./components/Mentee";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { mockFinancialQuestions } from "./mockData/questions";
import Lesson from "./components/lessons/Lesson";
import { mockResources } from "./mockData/resources";
import SignUpButtons from "./components/SignUpButtons";
import Chatroom from "./components/Chatroom";
import MenteeHome from "./components/Menteehome";
import Skillgame from "./components/Skillgame";
import EventPage from "./components/Eventpage";

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
        <Route
          path="/lesson"
          element={
            <Lesson
              topic={"Financial Literacy"}
              questions={mockFinancialQuestions}
              resources={mockResources}
            />
          }
        />
        <Route path="/events" element={<EventPage />} />
      </Routes>
    </Router>
  );
}
export default App;
