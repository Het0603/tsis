import BaseSelect from "./BaseSelect";

const options = [
  {
    id: 1,
    name: "Online",
  },
  {
    id: 2,
    name: "Cash",
  },
  {
    id: 3,
    name: "Cheque",
  }
];
export default function PaymentModeDropdown({
  name,
  value,
  onChange,
  title,
  helperText,
}: any) {
  return (
    <>
      <BaseSelect
        props={{
          name,
          value,
          onChange: (e: any) => {
            const selectedValue = e.target.value;
            onChange(selectedValue);
          },
          title,
        }}
        options={options}
        helperText={helperText}
      />
    </>
  );
}
