import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Input,
  Text,
  VStack,
  Link as ChakraLink,
} from "@chakra-ui/react";

const SignUpButtons = () => {
  return (
    <>
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
          <VStack spacing={4} align="stretch" className="mb-4">
            <Text fontSize="4xl" marginBottom={4} textAlign="center">
              Sign up
            </Text>

            {/* Mentor Form Button */}
            <Link to="/mentor_form">
              <Button colorScheme="teal" width="100%">
                Mentor Form
              </Button>
            </Link>

            {/* Mentee Form Button */}
            <Link to="/mentee_form">
              <Button colorScheme="teal" width="100%">
                Mentee Form
              </Button>
            </Link>
          </VStack>
        </Box>
      </Box>
    </>
  );
};

export default SignUpButtons;
