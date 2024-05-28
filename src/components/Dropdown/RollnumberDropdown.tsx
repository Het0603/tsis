import React, { useState } from "react";
import { BaseDropdown } from "./BaseDropdown";

const GradeData = [
  {
    id: "A",
    name: "Ground",
  },
  {
    id: "B",
    name: "1",
  },
  {
    id: "C",
    name: "2",
  },
  {
    id: "D",
    name: "3",
  },
  {
    id: "E",
    name: "4",
  },
];

function RollNumberDropdown({ props, label, helperText, error }: any) {
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

export { RollNumberDropdown };
