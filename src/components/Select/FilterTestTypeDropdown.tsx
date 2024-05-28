import BaseSelect from "./BaseSelect";

const options = [
  {
    id: 1,
    name: "Module 1",
  },
  {
    id: 2,
    name: "Weekly",
  },
  {
    id: 3,
    name: "Mid Sem",
  },
  {
    id: 4,
    name: "Module 3",
  },
  {
    id: 5,
    name: "End Sem",
  },
];

export default function FilterTestTypeDropdown({
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
