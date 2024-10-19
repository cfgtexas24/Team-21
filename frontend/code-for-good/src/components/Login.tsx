import React, { useState } from "react";
import { Box, Button, Input, Text, VStack } from "@chakra-ui/react";
import Navbar from "./Navbar";
const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};
  return (
    <div>  
      <Navbar />
      <Box
        width="100%"
        height="80vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bg="gray.100"
      >
        <Box
          width="400px"
          padding="1rem 2rem"
          boxShadow="md"
          bg="white"
          borderRadius="md"
        >
          <VStack spacing={4} align="stretch">
            <Text fontSize="4xl" marginBottom={4} textAlign="center">
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
            />
            <Button colorScheme="teal" onClick={handleSubmit}>
              Submit
            </Button>
          </VStack>
        </Box>
      </Box>
    </div>
  );
};

export default LogIn;
