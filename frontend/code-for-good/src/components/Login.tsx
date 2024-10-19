import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  Text,
  VStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
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
            {/*Making link to redirect user to sign up instead*/}
            {/** Make text asking Don't have an account?  (SignUp) link redirects u to  */}
            <Text fontSize="sm" textAlign="center">
              Don't have an account?{" "}
              <Link to="/signup_redirect">
                <ChakraLink color="teal.500">Sign Up</ChakraLink>
              </Link>
            </Text>
          </VStack>
        </Box>
      </Box>
    </div>
  );
};

export default LogIn;
