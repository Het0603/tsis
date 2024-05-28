import BaseSelect from "./BaseSelect";

const options = [
  {
    id: 1,
    name: "Module 1",
  },
  {
    id: 2,
    name: "Module 2",
  },
];

export default function FilterModuleDropdown({
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
