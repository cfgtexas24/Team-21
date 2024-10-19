import React from "react";
import { Box, Flex, HStack, Link, Image, Button } from "@chakra-ui/react";
import stormLogo from "../assets/storm.png"; // Adjust the path as necessary

const Navbar: React.FC = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      padding="1em"
      bg="#5176C8"
      color="white"
      width="100%"
      top="0"
      zIndex="1000"
      left="0"
      right="0"
    >
      <Box>
        <Link href="/" fontSize="xl" fontWeight="bold">
          <Image src={stormLogo} alt="Storm Logo" paddingRight={16} />
        </Link>
      </Box>
      <HStack spacing="24px">
        <Link href="/">
          <Button>Home</Button>
        </Link>
        <Link href="/housing_form">
          <Button>Emergency Housing</Button>
        </Link>
        <Link href="/events">
          <Button>Events</Button>
        </Link>
      </HStack>
    </Flex>
  );
};

export default Navbar;
