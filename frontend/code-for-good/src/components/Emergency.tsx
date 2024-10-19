import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";

const Emergency = () => {
  return (
    <Box
      paddingTop="4.5rem"
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={4}
    >
      <VStack width="66%" spacing={4} alignItems="center">
        <Text fontSize="2xl" fontWeight="bold">
          Get Help from STORM
        </Text>
        <Text textAlign="center">
          STORM Center of Hope & Service is here for you. Fill out the form
          below if you need IMMEDIATE housing assistance. We will contact you
          within 24 hours with more information.
        </Text>
      </VStack>
      <VStack width="66%" spacing={4}>
        <FormControl isRequired>
          <FormLabel>First Name</FormLabel>
          <Input type="text" placeholder="Jane" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Last Name</FormLabel>
          <Input type="text" placeholder="Doe" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type="email" placeholder="example@gmail.com" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Phone</FormLabel>
          <Input type="tel" placeholder="+1 (123) 456-7890" />
        </FormControl>
        <FormControl>
          <FormLabel>Current Address</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl>
          <FormLabel>Current City</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl>
          <FormLabel>Current State</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl>
          <FormLabel>Current Zip Code</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>
            Please provide us with any additional information you would like us
            to know about you.
          </FormLabel>
          <Input type="text" />
        </FormControl>
        <Button colorScheme="teal" type="submit">
          Submit
        </Button>
      </VStack>
    </Box>
  );
};

export default Emergency;
