import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Text, VStack } from "@chakra-ui/react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Box paddingTop="4.5rem">
        <VStack spacing={6}>
          <Text fontSize="3xl" textDecoration="underline">
            STORM
          </Text>
          <Box>
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          </Box>
          <Box>
            <Link to="/housing_form">
              <Button>Emergency Housing Form</Button>
            </Link>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default Home;
