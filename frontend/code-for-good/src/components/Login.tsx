import React, { useState } from "react";
import { Input, Button, Text } from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
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
  );
};

export default Login;
