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
import Navbar from "./Navbar";
import Firstpicture from "../assets/placeholder1.jpeg";
import Secondpicture from "../assets/placeholder2.jpeg";
import Thirdpicture from "../assets/placeholder3.jpeg";
import { Link } from "react-router-dom";

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
                Grit & Growth
              </Heading>

              <Text>
                <strong>Date:</strong> November 9th, 2024 <br />
                <strong>Description:</strong> Join us for STORM's 3rd Annual
                Grit & Growth Community Experience on November 9th, themed “Who
                I Choose to Become, I Will Become.” Get involved by
                volunteering, sharing your career journey, or donating items to
                support local youth—let's inspire hope and create lasting impact
                together!
              </Text>
              <Link to="/events/register">
                <Button bg="#002982" color="white" mt={4} textAlign={"center"}>
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
                Empowerment Workshop: Building Resilience
              </Heading>
              <Text>
                <strong>Date:</strong> March 15, 2025 <br />
                <strong>Description:</strong> Join us for a transformative
                workshop focused on building resilience in youth. Participants
                will engage in interactive sessions that foster self-confidence,
                coping strategies, and personal growth. This empowering event
                aims to equip attendees with the tools they need to navigate
                challenges and thrive in their personal and academic lives.
              </Text>
              <Link to="/events/register">
                <Button  bg="#002982" color="white" mt={4} textAlign={"center"}>
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
                Community Service Day: Hands for Hope
              </Heading>
              <Text>
                <strong>Date:</strong> July 20, 2025 <br />
                <strong>Description:</strong> Be a part of our Community Service
                Day, where volunteers come together to support local
                neighborhoods. Activities will include clean-up projects,
                mentorship sessions, and resource distribution. This event is
                designed to strengthen community bonds while providing essential
                services and support to those in need, making a positive impact
                in our community.
              </Text>
              <Link to="/events/register">
                <Button  bg="#002982" color="white" mt={4} textAlign={"center"}>
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
