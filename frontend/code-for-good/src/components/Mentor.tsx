import { useState } from "react";
import Navbar from "./Navbar";
import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  Icon,
  Link,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Checkbox,
  Progress,
  Radio,
  RadioGroup,
  Stack,
  Textarea,
  FormHelperText,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  VStack,
  StackDivider,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";

const Mentor = () => {
  // Define state variables for each form field
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    city: "",
    state: "",
    age: "",
    password: "",
  });

  // Handle input change and update state
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission normally send the data to backend
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData); // for now, just log the data to the console

    // Reset the form data to blank values
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      city: "",
      state: "",
      age: "",
      password: "",
    });
  };

  // for password hiding
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <Navbar />
      <Box w={700} p={4} m="20px auto">
        <Heading as="h1" size="xl" textAlign="center">
          Mentor Form
        </Heading>
        <Heading as="h2" size="l" textAlign="center" m={5}>
          Apply To Be A Mentor
        </Heading>

        <Box
          as="form"
          p={4}
          borderWidth="1px"
          borderRadius="lg"
          boxShadow="1px 1px 3px rgba(0,0,0,0.3)"
          onSubmit={handleSubmit} // Attach handleSubmit to the form's onSubmit event
        >
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={4}
            align="stretch"
          >
            <FormControl isRequired>
              <FormLabel>First name</FormLabel>
              <Input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
              />
              <FormHelperText>
                Enter your email you'd like to use as your username.
              </FormHelperText>
            </FormControl>

            {/**Password for user */}
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                name="password"
                type={show ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>

            <InputGroup>
              <InputLeftAddon>+1</InputLeftAddon>
              <Input
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="phone number"
              />
            </InputGroup>

            <FormControl>
              <FormLabel>City</FormLabel>
              <Input
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
              />
            </FormControl>

            <FormControl>
              <FormLabel>State</FormLabel>
              <Input
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Age</FormLabel>
              <NumberInput
                name="age"
                value={formData.age}
                onChange={(valueString) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    age: valueString,
                  }))
                }
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <Button colorScheme="teal" type="submit">
              Submit
            </Button>
          </VStack>
        </Box>
      </Box>
    </>
  );
};

export default Mentor;
