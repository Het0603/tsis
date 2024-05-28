import React, { useState } from "react";
import { BaseDropdown } from "../BaseDropdown";

const birthDetailOptions = [
  {
    id: "cash",
    name: "Cash",
  },
  {
    id: "online",
    name: "Online",
  },
  {
    id: "cheque",
    name: "Cheque",
  },
];
function PaymentModeDropdown({ props, label, helperText, error }: any) {
  return (
    <>
      <BaseDropdown
        props={props}
        options={birthDetailOptions}
        label={label}
        error={error}
        helperText={helperText}
      />
    </>
  );
}

export { PaymentModeDropdown };
