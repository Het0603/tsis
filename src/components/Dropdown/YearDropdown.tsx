import React, { useState } from "react";
import PlainSelect from "../Select/PlainSelect";

const inquiryOptions = [
  {
    id: "2020",
    name: "2020",
  },
  {
    id: "2021",
    name: "2021",
  },
  {
    id: "2022",
    name: "2022",
  },
  {
    id: "2023",
    name: "2023",
  },
];
function YearDropdown({ name, value, onChange, title, helperText,fullWidth }: any) {
  return (
    <>
      <PlainSelect
        props={{
          name,
          value,
          onChange: (e: any) => {
            const selectedValue = e.target.value;
            onChange(selectedValue);
          },
          title,
        }}
        options={inquiryOptions}
        helperText={helperText}
        fullWidth={fullWidth}
      />
    </>
  );
}

export { YearDropdown };
