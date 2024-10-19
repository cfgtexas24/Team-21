import React from "react";
import {
  Box,
  Button,
  Text,
  VStack,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import { Card, CardBody, CardFooter } from "@chakra-ui/react";
import Navbar from "./Navbar";

const MenteeHome = () => {
  const handleVideoChat = () => {
    // Handle 1-1 video chat logic here
  };

  const handleScheduleChat = () => {
    // Handle scheduling video chat logic here
  };

  const handleChatRoom = () => {
    // Handle chat room logic here
  };

  const handleGames = () => {
    // Handle games logic here
  };

  return (
    <>
      <Navbar />
      <Box
        width="100%"
        height="130vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        bg="gray.100"
        padding="2rem"
      >
        <VStack spacing={8} align="stretch" width="100%" maxWidth="800px">
          <Text
            fontSize="4xl"
            textAlign="center"
            fontWeight="bold"
            color="teal"
          >
            Welcome to the Mentee Home Page!
          </Text>
          <Box
            borderWidth="1px"
            borderRadius="lg"
            padding="6"
            bg="white"
            boxShadow="md"
          >
            <Heading size="lg" marginBottom="4">
              Chat with Your Mentor
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
              <Card variant="outline" boxShadow="md">
                <CardBody>
                  <VStack spacing={3} align="stretch">
                    <Heading size="md">Video Chat 1-1 with Mentor</Heading>
                    <Text>Start a one-on-one video chat with your mentor.</Text>
                  </VStack>
                </CardBody>
                <CardFooter>
                  <Button colorScheme="teal" onClick={handleVideoChat}>
                    Start Video Chat
                  </Button>
                </CardFooter>
              </Card>
              <Card variant="outline" boxShadow="md">
                <CardBody>
                  <VStack spacing={3} align="stretch">
                    <Heading size="md">Schedule Video Chat with Mentor</Heading>
                    <Text>
                      Schedule a video chat with your mentor at a convenient
                      time.
                    </Text>
                  </VStack>
                </CardBody>
                <CardFooter>
                  <Button colorScheme="teal" onClick={handleScheduleChat}>
                    Schedule Chat
                  </Button>
                </CardFooter>
              </Card>
              <Card variant="outline" boxShadow="md">
                <CardBody>
                  <VStack spacing={3} align="stretch">
                    <Heading size="md">Join Chat Room</Heading>
                    <Text>
                      Join a chat room to discuss with your mentor and peers.
                    </Text>
                  </VStack>
                </CardBody>
                <CardFooter>
                  <Button colorScheme="teal" onClick={handleChatRoom}>
                    Join Chat Room
                  </Button>
                </CardFooter>
              </Card>
            </SimpleGrid>
          </Box>
          <Box
            borderWidth="1px"
            borderRadius="lg"
            padding="6"
            bg="white"
            boxShadow="md"
          >
            <Heading size="lg" marginBottom="4">
              Engage in Fun and Educational Games
            </Heading>
            <Card variant="outline" maxW="sm" alignSelf="center" boxShadow="md">
              <CardBody>
                <VStack spacing={3} align="stretch">
                  <Heading size="md">Play Games</Heading>
                  <Text>
                    Engage in fun and educational games to enhance your learning
                    experience.
                  </Text>
                </VStack>
              </CardBody>
              <CardFooter>
                <Button colorScheme="teal" onClick={handleGames}>
                  Play Games
                </Button>
              </CardFooter>
            </Card>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default MenteeHome;
