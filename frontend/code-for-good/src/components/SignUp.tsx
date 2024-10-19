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
} from "@chakra-ui/react";

function SignUp() {
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  function onSubmit(values: object) {
    // insert into database
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve(1);
      }, 3000);
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <p className="text-3xl">Sign Up</p>
      <FormControl className="grid grid-cols-12 p-3 gap-x-1 gap-y-3">
        <FormControl className="col-span-6">
          <FormLabel>First Name</FormLabel>
          <Input type="text" aria-label="first name" />
        </FormControl>

        <FormControl className="col-span-6">
          <FormLabel>Last Name</FormLabel>
          <Input type="text" aria-label="last name" />
        </FormControl>

        <FormControl className="col-span-12">
          <FormLabel>Age</FormLabel>
          <NumberInput max={28} min={14}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>

        <FormControl className="col-span-12">
          <FormLabel>Gender</FormLabel>
          <Select placeholder="Select Gender">
            <option>Man</option>
            <option>Woman</option>
            <option>Other</option>
          </Select>
        </FormControl>

        <FormControl className="col-span-12">
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="example@email.com"
            type="text"
            aria-label="last name"
          />
        </FormControl>

        <FormControl className="col-span-12">
          <FormLabel>Phone Number</FormLabel>
          <Input
            placeholder="+1 (123)-456-7890"
            type="text"
            aria-label="last name"
          />
        </FormControl>

        <FormControl className="col-span-6">
          <FormLabel>City</FormLabel>
          <Input type="text" aria-label="last name" />
        </FormControl>

        <FormControl className="col-span-6">
          <FormLabel>State</FormLabel>
          <Input type="text" aria-label="last name" />
        </FormControl>

        <FormControl className="col-span-12 space-x-1">
          <FormLabel>Zip Code</FormLabel>
          <Input type="text" aria-label="last name" />
        </FormControl>

        <FormControl className="col-span-6">
          <FormLabel>Housing Status</FormLabel>
          <RadioGroup defaultValue="Unsheltered">
            <HStack spacing="24px">
              <Radio value="Unsheltered">Unsheltered</Radio>
              <Radio value="Sheltered">Sheltered</Radio>
            </HStack>
          </RadioGroup>
        </FormControl>
      </FormControl>
      <Button mt={4} isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
}

export default SignUp;
