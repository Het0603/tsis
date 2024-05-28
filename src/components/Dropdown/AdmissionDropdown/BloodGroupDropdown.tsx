import React, { useState } from "react";
import { BaseDropdown } from "../BaseDropdown";

const bloodGroupOptions = [
  {
    id: "a+",
    name: "A+",
  },
  {
    id: "b+",
    name: "B+",
  },
  {
    id: "o+",
    name: "O+",
  },
  {
    id: "ab+",
    name: "AB+",
  },
  {
    id: "a-",
    name: "A-",
  },
  {
    id: "b-",
    name: "B-",
  },
  {
    id: "o-",
    name: "O-",
  },
  {
    id: "ab-",
    name: "AB-",
  },
];

function BloodGroupDropdown({ props, label, helperText, error }: any) {
  return (
    <>
      <BaseDropdown
        props={props}
        options={bloodGroupOptions}
        label={label}
        error={error}
        helperText={helperText}
      />
    </>
  );
}

export { BloodGroupDropdown };
