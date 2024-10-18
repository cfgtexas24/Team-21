import React from "react";

const Emergency = () => {
  return (
    <div className="flex flex-col w-full justify-center align-middle">
      <div className="flex w-1/2 flex-col gap-4">
        <h1 className="font-bold">Get Help from STORM</h1>
        <p className="">
          STORM Center of Hope & Service is here for you. Fill out the form
          below and let us know the ways we can best help you in your foster
          care transition OR get started right away by filling out our youth
          application!
        </p>
      </div>
      <div className="flex flex-col">
        <form className="flex w-1/2 flex-col gap-4">
          <label>
            Name:
            <input type="text" />
          </label>
          <label>
            Email:
            <input type="email" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Emergency;
