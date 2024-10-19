import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { Button } from "@chakra-ui/react";

const Home = () => {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-3xl underline">STORM</p>
      <div>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      </div>
      <div>
        <Link to="/housing_form">
          <Button>Emergency Housing Form</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
