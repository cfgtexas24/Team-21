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
      const response = await fetch("http://172.20.10.3:5174/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      console.log("Full server response:", data);

      if (data.success) {
        toast({
          title: "Login Successful",
          description: data.message,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        if (data.des === "admin") navigate("/admin_home");
        else navigate("/mentee_home");
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
      console.error("Login error:", error);
    }

    setUsername("");
    setPassword("");
  };

  return (
    <>
      <Navbar />
      <Box
        width="100%"
        height="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        bg="gray.100"
        padding="2rem"
      >
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
                <Button bg="#002982" color="white" onClick={handleSubmit}>
                  Log In
                </Button>
                <Text fontSize="sm" textAlign="center">
                  Don't have an account?{" "}
                  <Link to="/signup_redirect">
                    <ChakraLink color="#002982">Sign Up</ChakraLink>
                  </Link>
                </Text>
              </VStack>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default LogIn;
