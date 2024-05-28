import BaseSelect from "./BaseSelect";

const options = [
  {
    id: 1,
    name: "Semester 1",
  },
  {
    id: 1,
    name: "Semester 2",
  },
  {
    id: 1,
    name: "Semester 3",
  },
];

export default function FilterSemesterDropdown({
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
