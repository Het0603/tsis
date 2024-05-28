import {
  FormControl,
  FormHelperText,
  FormLabel,
  MenuItem,
  Select,
} from "@mui/material";

export default function SemesterDropdown({ ...props }) {
  const {
    label,
    setFieldValue,
    setSemsterNumber,
    values,
    semesterCount,
    dropdownValue,
    errors,
    disabledValue
  } = props;
  return (
    <>
      <FormControl fullWidth>
        <FormLabel
          style={{ color: "black" }}
          sx={{
            fontSize: 12,
            color: "black",
          }}
        >
          {label}
        </FormLabel>
        <Select
          MenuProps={{
            PaperProps: {
              sx: {
                borderRadius: "15px",
                "& .MuiMenuItem-root": {},
              },
            },
          }}
          fullWidth
          placeholder="Select"
          name="admission_semester"
          onChange={(e, value) => {
            setFieldValue("admission_semester", e.target.value);
            setSemsterNumber(e.target.value);
          }}
          //   value={values.admission_semester || ""}
          value={dropdownValue || ""}
          border="none"
          slotProps={{
            listbox: {
              placement: "bottom-start",
              sx: {
                minWidth: 160,
                maxHeight: 200,
                overflowY: "scroll",
              },
              width: 250,
            },
          }}
          sx={{
            backgroundColor: "white",
            height: "40px",
            borderRadius: "10px",
            "& span": {
              "& > svg": {
                height: "auto",
                width: 20,
              },
            },
            "& button": {
              borderRadius: 50,
              overflow: "hidden",
            },
          }}
          disabled={disabledValue}
        >
          {Array.from({ length: semesterCount }, (_, i) => i + 1).map(
            (v, i) => (
              <MenuItem key={i} value={v}>
                Semester {v}
              </MenuItem>
            )
          )}
        </Select>
        <FormHelperText
          sx={{
            marginLeft: 1,
            fontSize: 11,
            letterSpacing: 0.5,
            color: "red",
          }}
        >
          {errors}
          {/* {errors.semester_number} */}
        </FormHelperText>
      </FormControl>
    </>
  );
}
