import React, { useState } from "react";
import { BaseDropdown } from "./BaseDropdown";

const GradeData = [
  {
    id: 1,
    name: "Business Management",
  },
  {
    id: 2,
    name: "Business Management",
  },
  {
    id: 3,
    name: "Business Management",
  },
  {
    id: 4,
    name: "Business Management",
  },
  {
    id: 5,
    name: "Business Management",
  },
];

function SubjectDropdown({ props, label, helperText, error }: any) {
  return (
    <>
      <BaseDropdown
        props={props}
        options={GradeData}
        label={label}
        error={error}
        helperText={helperText}
      />
    </>
  );
}

export { SubjectDropdown };
