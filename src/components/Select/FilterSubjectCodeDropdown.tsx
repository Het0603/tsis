import BaseSelect from "./BaseSelect";

const options = [
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

export default function FilterSubjectCodeDropdown({
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
