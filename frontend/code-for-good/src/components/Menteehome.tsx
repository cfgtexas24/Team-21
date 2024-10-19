import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Text,
  VStack,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import { Card, CardBody, CardFooter } from "@chakra-ui/react";
import Navbar2 from "./Navbar2";
import ScheduleModal from "./Schedule"; // Import the ScheduleModal

const MenteeHome = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false); // State to manage modal visibility

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <>
      <Navbar2 />
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
            color="#002982"
          >
            Welcome to the Mentee Home Page!
          </Text>
          <Box
            borderWidth="1px"
            borderRadius="lg"
            padding="6"
            bg="white"
            boxShadow="md"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Heading size="lg" marginBottom="4">
              Engage in Fun and Educational Games
            </Heading>
            <Card variant="outline" maxW="sm" alignSelf="center" boxShadow="md">
              <CardBody>
                <VStack spacing={3} align="stretch">
                  <Heading size="md" alignSelf="center">
                    Play Games
                  </Heading>
                  <Text>
                    Engage in fun and educational games to enhance your learning
                    experience.
                  </Text>
                </VStack>
              </CardBody>
              <CardFooter>
                <Link to="/skillgame">
                  <Button bg="#002982" color="white">Play Games</Button>
                </Link>
              </CardFooter>
            </Card>
          </Box>
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
                  <VStack spacing={1} align="stretch">
                    <Heading size="md">Video Chat 1-1 with Mentor</Heading>
                    <Text>Start a one-on-one video chat with your mentor.</Text>
                  </VStack>
                </CardBody>
                <CardFooter>
                  <Link to="/chat">
                    <Button bg="#002982" color="white">Start Video Chat</Button>
                  </Link>
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
                  <Button bg="#002982" color="white" onClick={openModal}>
                    {" "}
                    {/* Open the modal */}
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
                  <Link to="/chat">
                    <Button bg="#002982" color="white">Join Chat Room</Button>
                  </Link>
                </CardFooter>
              </Card>
            </SimpleGrid>
          </Box>
        </VStack>
      </Box>
      <ScheduleModal isOpen={modalIsOpen} closeModal={closeModal} />{" "}
      {/* Include the modal */}
    </>
  );
};

export default MenteeHome;
