import BaseSelect from "./BaseSelect";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
const options = [
  {
    id: "today",
    name: "Today",
  },
  {
    id: "last_week",
    name: "Last Week",
  },
  {
    id: "last_month",
    name: "Last Month",
  },
  {
    id: "last_quarter",
    name: "Last Quarter",
  },
  {
    id: "custom",
    name: "Custom",
  },
];
export default function CustomDateInputSelect({
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
          endAdornment: <CalendarTodayIcon sx={{
            marginRight : '15px'
          }} />,
        }}
        options={options}
        helperText={helperText}
      />
    </>
  );
}
