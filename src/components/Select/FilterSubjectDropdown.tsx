import BaseSelect from "./BaseSelect";

const options = [
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

export default function FilterSubjectTypeDropdown({
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
