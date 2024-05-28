import React, { useState } from "react";
import { BaseDropdown } from "../BaseDropdown";

const inquiryOptions = [
  {
    id: "male",
    name: "Male",
  },
  {
    id: "female",
    name: "Female",
  },
];
function GenderDropdown({ props, label, helperText, error }: any) {
  return (
    <>
      <BaseDropdown
        props={props}
        options={inquiryOptions}
        label={label}
        error={error}
        helperText={helperText}
      />
    </>
  );
}

export { GenderDropdown };
