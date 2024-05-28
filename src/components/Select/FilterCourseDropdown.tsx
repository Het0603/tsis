import BaseSelect from "./BaseSelect";

const options = [
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "IMBA",
  },
  {
    id: 3,
    name: "MBA",
  },
];

export default function FilterCourseDropdown({
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
