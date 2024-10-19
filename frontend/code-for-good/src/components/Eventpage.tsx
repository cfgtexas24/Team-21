import React from "react";
import {
  Box,
  Text,
  VStack,
  Heading,
  Image,
  HStack,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Firstpicture from "../assets/placeholder1.jpeg";
import Secondpicture from "../assets/placeholder2.jpeg";
import Thirdpicture from "../assets/placeholder3.jpeg";

const EventPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Text
        fontSize="4xl"
        textAlign={"center"}
        paddingTop={5}
        fontWeight={"bold"}
      >
        Upcoming Events
      </Text>
      <VStack spacing={8} padding="2rem">
        <Box
          borderWidth="1px"
          borderRadius="lg"
          padding="6"
          bg="white"
          boxShadow="md"
          width="100%"
          maxWidth="600px"
        >
          <HStack spacing={4}>
            <Image
              boxSize="100px"
              objectFit="cover"
              src={Firstpicture}
              alt="Event 1"
            />
            <Box>
              <Heading size="md" mb={4}>
                Event 1
              </Heading>
              <Text fontStyle="italic" mb={2}>
                Date: January 1, 2023
              </Text>
              <Text>
                Description: Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus
                diam.
              </Text>
              <Link to="/events/register">
                <Button colorScheme="teal" mt={4} textAlign={"center"}>
                  Register
                </Button>
              </Link>
            </Box>
          </HStack>
        </Box>
        <Box
          borderWidth="1px"
          borderRadius="lg"
          padding="6"
          bg="white"
          boxShadow="md"
          width="100%"
          maxWidth="600px"
        >
          <HStack spacing={4}>
            <Image
              boxSize="100px"
              objectFit="cover"
              src={Secondpicture}
              alt="Event 2"
            />
            <Box>
              <Heading size="md" mb={4}>
                Event 2
              </Heading>
              <Text fontStyle="italic" mb={2}>
                Date: February 1, 2023
              </Text>
              <Text>
                Description: Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus
                diam.
              </Text>
              <Link to="/events/register">
                <Button colorScheme="teal" mt={4} textAlign={"center"}>
                  Register
                </Button>
              </Link>
            </Box>
          </HStack>
        </Box>
        <Box
          borderWidth="1px"
          borderRadius="lg"
          padding="6"
          bg="white"
          boxShadow="md"
          width="100%"
          maxWidth="600px"
        >
          <HStack spacing={4}>
            <Image
              boxSize="100px"
              objectFit="cover"
              src={Thirdpicture}
              alt="Event 3"
            />
            <Box>
              <Heading size="md" mb={4}>
                Event 3
              </Heading>
              <Text fontStyle="italic" mb={2}>
                Date: March 1, 2023
              </Text>
              <Text>
                Description: Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus
                diam.
              </Text>
              <Link to="/events/register">
                <Button colorScheme="teal" mt={4} textAlign={"center"}>
                  Register
                </Button>
              </Link>
            </Box>
          </HStack>
        </Box>
      </VStack>
    </>
  );
};

export default EventPage;
