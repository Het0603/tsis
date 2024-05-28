import BaseSelect from "./BaseSelect";

const options = [
  {
    id: 1,
    name: "Short",
  },
  {
    id: 2,
    name: "Long",
  }
];
export default function LeaveTypeDropdown({
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
