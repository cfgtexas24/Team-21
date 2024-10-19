import React from "react";
import { useForm } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  Select,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Radio,
  RadioGroup,
  HStack,
  Button,
  useToast,
  VStack,
} from "@chakra-ui/react";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const toast = useToast();

  async function onSubmit(values) {
    try {
      const response = await fetch('http://localhost:5174/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Sign-up successful",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        throw new Error(data.message || "Sign-up failed");
      }
    } catch (error) {
      toast({
        title: "Error signing up",
        description: error.message || "An unexpected error occurred",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={4} align="stretch">
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input {...register("name")} placeholder="Enter your name" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input {...register("email")} type="email" placeholder="Enter your email" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Age</FormLabel>
          <NumberInput min={18} max={100}>
            <NumberInputField {...register("age")} />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Gender</FormLabel>
          <RadioGroup defaultValue="male">
            <HStack spacing={4}>
              <Radio {...register("gender")} value="male">Male</Radio>
              <Radio {...register("gender")} value="female">Female</Radio>
              <Radio {...register("gender")} value="other">Other</Radio>
            </HStack>
          </RadioGroup>
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Education Level</FormLabel>
          <Select {...register("educationLevel")} placeholder="Select education level">
            <option value="highschool">High School</option>
            <option value="bachelor">Bachelor's Degree</option>
            <option value="master">Master's Degree</option>
            <option value="phd">PhD</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Additional Comments</FormLabel>
          <Input {...register("comments")} placeholder="Any additional information" />
        </FormControl>

        <Button mt={4} colorScheme="blue" isLoading={isSubmitting} type="submit">
          Submit
        </Button>
      </VStack>
    </form>
  );
}

export default SignUp;