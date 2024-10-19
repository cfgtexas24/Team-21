import React, { useState } from "react";
import Navbar from "./Navbar";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  VStack,
  Text,
} from "@chakra-ui/react";

const Emergency = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const onSubmit = async (e: any) => {
    const msg =
      `!!ALERT!! STORM Emergency Housing Request\n` +
      `Name: ${firstName} ${lastName}\n` +
      `Contact: ${phone}, ${email}\n` +
      `Current Location: ${address}, ${city}, ${state} ${zip}\n` +
      `Additional Information: ${additionalInfo}`;

    try {
      const res = await fetch("http://172.20.10.3:5174/send-sms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ msg }),
      });

      const data = await res.json();
      if (data.success) {
        console.log("SMS sent successfully");
      } else {
        console.log("Error sending SMS: " + data.message);
      }
    } catch (error: any) {
      console.log("Error sending SMS: " + error.message);
    }
  };

  return (
    <Box bg="gray.100" minHeight="100vh" display="flex" flexDirection="column">
      <Navbar />
      <Box
        bg="white"
        borderRadius="lg"
        boxShadow="md"
        padding="6"
        margin="20px auto"
        width="80%"
        maxWidth="600px"
      >
        <Box textAlign="center" mb={4}>
          <Text fontSize="2xl" fontWeight="bold">
            Get Help from STORM
          </Text>
          <Text>
            STORM Center of Hope & Service is here for you. Fill out the form
            below if you need IMMEDIATE housing assistance. We will contact you
            within 24 hours with more information.
          </Text>
        </Box>
        <form onSubmit={onSubmit}>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>First Name</FormLabel>
              <Input
                type="text"
                placeholder="Jane"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input
                type="text"
                placeholder="Doe"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email Address</FormLabel>
              <Input
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Phone Number</FormLabel>
              <InputGroup>
                <InputLeftAddon>+1</InputLeftAddon>
                <Input
                  type="tel"
                  placeholder="(123) 456-7890"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel>Current Address</FormLabel>
              <Input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Current City</FormLabel>
              <Input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Current State</FormLabel>
              <Input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Current Zip Code</FormLabel>
              <Input
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>
                Please provide us with any additional information you would like
                us to know about you.
              </FormLabel>
              <Input
                type="text"
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
              />
            </FormControl>
            <Button type="submit" bg="#002982" color={"white"} width="full">
              Submit
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
};

export default Emergency;
