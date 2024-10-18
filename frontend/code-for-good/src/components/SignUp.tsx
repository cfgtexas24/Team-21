import React from "react";
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
} from "@chakra-ui/react";

function SignUp() {
  return (
    <div className="flex flex-col">
      <p className="text-3xl">Sign Up</p>
      <FormControl
        className="grid grid-cols-12 space-x-1.5 p-3 gap-y-3"
        isRequired
      >
        <div className="col-span-6">
          <FormLabel>First Name</FormLabel>
          <Input type="text" aria-label="first name" />
        </div>

        <div className="col-span-6">
          <FormLabel>Last Name</FormLabel>
          <Input type="text" aria-label="last name" />
        </div>

        <div className="col-span-12">
          <FormLabel>Age</FormLabel>
          <NumberInput max={28} min={14}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </div>

        <div className="col-span-12">
          <FormLabel>Gender</FormLabel>
          <Select placeholder="Select Gender">
            <option>Man</option>
            <option>Woman</option>
            <option>Other</option>
          </Select>
        </div>

        <div className="col-span-6">
          <FormLabel>City</FormLabel>
          <Input type="text" aria-label="last name" />
        </div>

        <div className="col-span-6">
          <FormLabel>State</FormLabel>
          <Input type="text" aria-label="last name" />
        </div>

        <div className="col-span-12">
          <FormLabel>Zip Code</FormLabel>
          <Input type="text" aria-label="last name" />
        </div>

        <div className="col-span-6">
          <FormLabel>Housing Status</FormLabel>
          <RadioGroup defaultValue="Unsheltered">
            <HStack spacing="24px">
              <Radio value="Unsheltered">Unsheltered</Radio>
              <Radio value="Sheltered">Sheltered</Radio>
            </HStack>
          </RadioGroup>
        </div>
      </FormControl>
    </div>
  );
}

export default SignUp;
