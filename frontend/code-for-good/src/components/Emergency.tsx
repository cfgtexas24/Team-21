import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
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
    e.preventDefault();

    const msg =
      `!!ALERT!! STORM Emergency Housing Request\n` +
      `Name: ${firstName} ${lastName}\n` +
      `Contact: ${phone}, ${email}\n` +
      `Current Location: ${address}, ${city}, ${state} ${zip}`;

    try {
      const res = await fetch("http://localhost:5174/send-sms", {
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
    <div className="flex flex-col w-full justify-center items-center gap-4">
      <div className="flex w-2/3 flex-col gap-4 items-center">
        <h1 className="font-bold">Get Help from STORM</h1>
        <p>
          STORM Center of Hope & Service is here for you. Fill out the form
          below if you need IMMEDIATE housing assistance. We will contact you
          within 24 hours with more information.
        </p>
      </div>
      <form onSubmit={onSubmit} className="flex flex-col w-2/3 gap-4">
        <FormControl isRequired className="flex flex-col gap-4">
          <div>
            <FormLabel>First Name</FormLabel>
            <Input
              type="text"
              placeholder="Jane"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <FormLabel>Last Name</FormLabel>
            <Input
              type="text"
              placeholder="Doe"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <FormLabel>Email Address</FormLabel>
            <Input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
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
          </div>
        </FormControl>
        <FormControl className="flex flex-col gap-4">
          <div>
            <FormLabel>Current Address</FormLabel>
            <Input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div>
            <FormLabel>Current City</FormLabel>
            <Input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div>
            <FormLabel>Current State</FormLabel>
            <Input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div>
            <FormLabel>Current Zip Code</FormLabel>
            <Input
              type="text"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
          </div>
        </FormControl>
        <FormControl isRequired className="flex flex-col gap-4">
          <div>
            <FormLabel>
              Please provide us with any additional information you would like
              us to know about you.
            </FormLabel>
            <Input
              type="text"
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
            />
          </div>
        </FormControl>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Emergency;
