import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  Text,
  VStack,
  Link as ChakraLink,
  useToast,
  Container,
} from "@chakra-ui/react";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5174/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      
      const data = await response.json();
      console.log('Full server response:', data);

      if (data.success) {
        toast({
          title: "Login Successful",
          description: data.message,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate('http://localhost:5173/mentee_home');
      } else {
        toast({
          title: "Login Failed",
          description: data.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred while trying to log in",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      console.error('Login error:', error);
    }

    setUsername("");
    setPassword("");
  };

  return (
    <>
      <Navbar />
      <Container maxW="container.xl" height="calc(100vh - 60px)">
        <Box
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            width="400px"
            padding="2rem"
            boxShadow="lg"
            bg="white"
            borderRadius="md"
          >
            <VStack spacing={6} align="stretch">
              <Text fontSize="3xl" fontWeight="bold" textAlign="center">
                Login
              </Text>
              <Input
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button colorScheme="teal" onClick={handleSubmit}>
                Log In
              </Button>
              <Text fontSize="sm" textAlign="center">
                Don't have an account?{" "}
                <Link to="/signup_redirect">
                  <ChakraLink color="teal.500">Sign Up</ChakraLink>
                </Link>
              </Text>
            </VStack>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default LogIn;
