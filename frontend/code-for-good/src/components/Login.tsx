import React, { useState } from "react";
import { Input, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>
      <div className="login-container">
        <Text fontSize="4xl" marginBottom={4}>
          Login
        </Text>
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          marginTop={4}
        />
        <Button marginTop={4} onClick={handleSubmit}>
          Submit
        </Button>
      </div>
      <div className="flex flex-col gap-4 m-12">
        <p>Don't have an account yet?</p>
        <Link to="/signup">
          <Button>Sign Up</Button>
        </Link>
      </div>
    </>
  );
};

export default Login;
