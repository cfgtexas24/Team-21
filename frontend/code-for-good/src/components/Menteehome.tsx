import React from "react";
import { Box, Button, Text, VStack, HStack, Heading } from "@chakra-ui/react";
import { Card, CardBody, CardFooter } from "@chakra-ui/react";

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

  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="gray.100"
    >
      <HStack spacing={4} align="stretch">
        <Card maxW="sm">
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
        <Card maxW="sm">
          <CardBody>
            <VStack spacing={3} align="stretch">
              <Heading size="md">Schedule Video Chat with Mentor</Heading>
              <Text>
                Schedule a video chat with your mentor at a convenient time.
              </Text>
            </VStack>
          </CardBody>
          <CardFooter>
            <Button colorScheme="teal" onClick={handleScheduleChat}>
              Schedule Chat
            </Button>
          </CardFooter>
        </Card>
        <Card maxW="sm">
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
      </HStack>
    </Box>
  );
};

export default MenteeHome;
