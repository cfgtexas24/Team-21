import React from "react";
import { Box, Flex, HStack, Link, Image } from "@chakra-ui/react";
import stormLogo from "../assets/storm.png"; // Adjust the path as necessary

const Navbar: React.FC = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      padding="1em"
      bg="teal.500"
      color="white"
      width="100%"
      position="sticky"
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
        <Link href="/">Home</Link>
        <Link href="/housing_form">Emergency Housing</Link>
      </HStack>
    </Flex>
  );
};

export default Navbar;
