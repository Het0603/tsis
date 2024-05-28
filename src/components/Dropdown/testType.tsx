import React, { useState } from "react";
import { BaseDropdown } from "./BaseDropdown";

const GradeData = [
  {
    id: "A",
    name: "A",
  },
  {
    id: "B",
    name: "B",
  },
  {
    id: "C",
    name: "C",
  },
  {
    id: "D",
    name: "D",
  },
  {
    id: "E",
    name: "E",
  },
  {
    id: "F",
    name: "F",
  },
];

function TestTypeDropdown({ props, label, helperText, error }: any) {
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

export { TestTypeDropdown };
