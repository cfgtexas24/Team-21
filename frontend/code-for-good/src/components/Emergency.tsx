import React from "react";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

const Emergency = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-4">
      <div className="flex w-2/3 flex-col gap-4 items-center">
        <h1 className="font-bold">Get Help from STORM</h1>
        <p className="">
          STORM Center of Hope & Service is here for you. Fill out the form
          below if you need IMMEDIATE housing assistance. We will contact you
          within 24 hours with more information.
        </p>
      </div>
      <div className="flex flex-col w-2/3 gap-4">
        <FormControl isRequired className="flex flex-col gap-4">
          <div>
            <FormLabel>First Name</FormLabel>
            <Input type="name" placeholder="Jane" />
          </div>
          <div>
            <FormLabel>Last Name</FormLabel>
            <Input type="name" placeholder="Doe" />
          </div>
          <div>
            <FormLabel>Email address</FormLabel>
            <Input type="email" placeholder="example@gmail.com" />
          </div>
          <div>
            <FormLabel>Phone</FormLabel>
            <Input type="phone" placeholder="+1 (123) 456-7890" />
          </div>
        </FormControl>
        <FormControl className="flex flex-col gap-4">
          <div>
            <FormLabel>Current Address</FormLabel>
            <Input type="text" />
          </div>
          <div>
            <FormLabel>Current City</FormLabel>
            <Input type="text" />
          </div>
          <div>
            <FormLabel>Current State</FormLabel>
            <Input type="text" />
          </div>
          <div>
            <FormLabel>Current Zip Code</FormLabel>
            <Input type="text" />
          </div>
        </FormControl>
        <FormControl isRequired className="flex flex-col gap-4">
          <div>
            <FormLabel>
              Please provide us with any additional information you would like
              us to know about you.
            </FormLabel>
            <Input type="text" />
          </div>
        </FormControl>
        <Button>Submit</Button>
      </div>
    </div>
  );
};

export default Emergency;
