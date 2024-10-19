import { Link } from "react-router-dom";
import { Box, Button, Text, VStack, Heading } from "@chakra-ui/react";
import "../index.css";

const Home = () => {
  return (
    <Box
      className="home-background"
      width="100%"
      height="100vh"
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
      paddingBottom="3rem"
    >
      <Box
        className="home-content"
        padding="1.5rem"
        borderRadius="md"
        boxShadow="lg"
        bg="5176C8"
        maxWidth="350px"
        textAlign="center"
        marginBottom="2rem"
      >
        <VStack spacing={4}>
          <Heading as="h1" size="2xl" color="#002982" textShadow="1px 1px">
            STORM
          </Heading>
          <Text fontSize="lg" color="gray.600" fontStyle="italic">
            Center of Hope and Service
          </Text>
          <Box width="100%">
            <Link to="/login">
              <Button width="100%" bg="#5176C8" color="white" _hover={{ bg: '#3f5fa7' }}>
                Login / Signup
              </Button>
            </Link>
          </Box>
          <Box width="100%">
            <Link to="/housing_form">
              <Button width="100%" bg="#E1BA00" color="white" _hover={{ bg: '#3f5fa7' }}>
                Emergency Housing Form
              </Button>
            </Link>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default Home;
