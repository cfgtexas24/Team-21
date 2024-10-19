import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Select,
} from "@chakra-ui/react";
import Navbar from "./Navbar";

const EventRegister: React.FC = () => {
  return (
    <>
      <Navbar />
      <Box
        width="100%"
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bg="gray.100"
        padding="2rem"
      >
        <Box
          borderWidth="1px"
          borderRadius="lg"
          padding="6"
          bg="white"
          boxShadow="md"
          width="100%"
          maxWidth="600px"
        >
          <Heading size="lg" mb={6} textAlign="center">
            Event Registration
          </Heading>
          <VStack spacing={4}>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Enter your name" />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Enter your email" />
            </FormControl>
            <FormControl id="phone">
              <FormLabel>Phone Number</FormLabel>
              <Input type="tel" placeholder="Enter your phone number" />
            </FormControl>
            <FormControl id="event" isRequired>
              <FormLabel>Event</FormLabel>
              <Select placeholder="Select event">
                <option value="grit-growth">Grit & Growth</option>
                <option value="empowerment-workshop">
                  Empowerment Workshop: Building Resilience
                </option>
                <option value="community-service-day">
                  Community Service Day: Hands for Hope
                </option>
              </Select>
            </FormControl>
            <Button colorScheme="teal" width="full">
              Register
            </Button>
          </VStack>
        </Box>
      </Box>
    </>
  );
};

export default EventRegister;
