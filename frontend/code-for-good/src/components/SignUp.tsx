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
    <div className="flex flex-col grid-cols-12 gap-3 w-full">
      <p className="text-3xl">Sign Up</p>
      <FormControl className="flex flex-col p-10 gap-y-5" isRequired>
        <div>
          <FormLabel>First Name</FormLabel>
          <Input type="text" aria-label="first name" />
        </div>

        <div>
          <FormLabel>Last Name</FormLabel>
          <Input type="text" aria-label="last name" />
        </div>

        <div>
          <FormLabel>Age</FormLabel>
          <NumberInput max={28} min={14}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </div>

        <div>
          <FormLabel>Gender</FormLabel>
          <Select placeholder="Select Gender">
            <option>Man</option>
            <option>Woman</option>
            <option>Other</option>
          </Select>
        </div>

        <div>
          <FormLabel>Housing Status</FormLabel>
          <RadioGroup className="flex items-left" defaultValue="Itachi">
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
