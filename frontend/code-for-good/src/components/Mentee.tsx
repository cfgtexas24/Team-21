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
  CardBody,
  Card,
  Text,
  Flex,
  InputRightElement,
  Select,
} from "@chakra-ui/react";
import React from "react";

const Mentee = () => {
  // Define state variables for form fields including gender, password, and sheltered status
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    city: "",
    state: "",
    age: "",
    additionalInfo: "",
    gender: "",
    password: "",
    shelteredStatus: "1", // Default to "Unsheltered"
  });

  // Define state for the checkboxes
  const [interests, setInterests] = useState({
    mentor: false,
    stormProgram: false,
  });

  // Handle input change and update state
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle checkbox change
  const handleCheckboxChange = (e: any) => {
    const { name, checked } = e.target;
    setInterests((prevInterests) => ({
      ...prevInterests,
      [name]: checked,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log({ ...formData, interests }); // Log the data including checkbox values

    // Reset the form data to blank values
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      city: "",
      state: "",
      age: "",
      additionalInfo: "",
      gender: "",
      password: "",
      shelteredStatus: "",
    });

    // Reset checkbox values
    setInterests({
      mentor: false,
      stormProgram: false,
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
          Mentee Form
        </Heading>
        <Heading as="h2" size="l" textAlign="center" m={5}>
          Apply To Be Matched With a Mentor
        </Heading>

        <Box
          as="form"
          p={4}
          borderWidth="1px"
          borderRadius="lg"
          boxShadow="1px 1px 3px rgba(0,0,0,0.3)"
          onSubmit={handleSubmit}
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
                placeholder="Phone number"
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

            <FormControl>
              <FormLabel>Gender</FormLabel>
              <Select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                placeholder="Select Gender"
              >
                <option value="female">Female</option>
                <option value="male">Male</option>
              </Select>
            </FormControl>

            <FormControl>
              <FormLabel>Sheltered Status</FormLabel>
              <RadioGroup
                name="shelteredStatus"
                value={formData.shelteredStatus}
                onChange={(value) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    shelteredStatus: value,
                  }))
                }
              >
                <Stack direction="row">
                  <Radio value="unsheltered">Unsheltered</Radio>
                  <Radio value="sheltered">Sheltered</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>

            <Stack spacing={5} direction="column">
              <Card>
                <CardBody>
                  <FormLabel>I am interested in: </FormLabel>
                  <Flex direction="column" alignItems="flex-start">
                    <Checkbox
                      name="mentor"
                      isChecked={interests.mentor}
                      onChange={handleCheckboxChange}
                    >
                      Being paired with a volunteer mentor
                    </Checkbox>
                    <Checkbox
                      name="stormProgram"
                      isChecked={interests.stormProgram}
                      onChange={handleCheckboxChange}
                    >
                      Learning more development skills
                    </Checkbox>
                  </Flex>
                </CardBody>
              </Card>
              <Text>
                Please provide us with any additional information you would like
                us to know about you
              </Text>
              <Input
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                placeholder="Additional information"
              />
              git
            </Stack>

            <Button colorScheme="teal" type="submit">
              Submit
            </Button>
          </VStack>
        </Box>
      </Box>
    </>
  );
};
export default Mentee;
