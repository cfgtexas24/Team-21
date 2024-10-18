import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Home = () => {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-3xl underline">STORM</p>
      <div>
        <button>Login</button>
      </div>
      <div>
        <Link to="/housing_form">
          <button>Emergency Housing Form</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
