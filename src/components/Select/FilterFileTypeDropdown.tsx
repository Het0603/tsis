import BaseSelect from "./BaseSelect";

const options = [
  {
    id: 1,
    name: "PDF",
  },
  {
    id: 2,
    name: "JPEG",
  },
  {
    id: 3,
    name: "JPG",
  },
];

export default function FilterFileTypeDropdown({
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
