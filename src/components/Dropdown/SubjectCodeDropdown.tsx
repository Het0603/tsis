import React, { useState } from "react";
import { BaseDropdown } from "./BaseDropdown";

const GradeData = [
    {
        id: 1,
        name: "220055",
      },
      {
        id: 2,
        name: "220055",
      },
      {
        id: 3,
        name: "220055",
      },
      {
        id: 4,
        name: "220055",
      },
      {
        id: 5,
        name: "220055",
      },
];

function SubjectCodeDropdown({ props, label, helperText, error }: any) {
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

export { SubjectCodeDropdown };
