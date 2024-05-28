import {
  Autocomplete,
  CircularProgress,
  FormControl,
  FormHelperText,
  FormLabel,
  Paper,
  TextField,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import useHttpQuery from "src/hooks/useHttpQuery";

const CustomPaper = (props: any) => {
  return (
    <Paper
      elevation={1}
      sx={{
        borderRadius: "15px",
      }}
      {...props}
    />
  );
};
export default function BaseAutoComplate({ props, config }: any) {
  const { queryfnconfig, name, label, autocomplete_value } = props;

  const { handleChange, error, value } = config;

  const [options, setOptions] = useState([]);
  const [_value, setValue] = useState(null);

  const getSelectedOption = (value: any) => {
    if (value) {
      const findable = options.find((o) => o.id === value);
      if (findable) {
        return findable;
      }
    }

    return null;
  };

  let httpQuery = {
    isLoading: true,
  };

  if (queryfnconfig) {
    httpQuery = useHttpQuery(queryfnconfig);
  } else {
    httpQuery.isLoading = false;
  }

  useEffect(() => {
    if (httpQuery.data) {
      setOptions(httpQuery.data);
    }
  }, [httpQuery.data]);

  useEffect(() => {
    if (options.length > 0 && value) {
      setValue(getSelectedOption(value));
    }
    return () => {
      return httpQuery.isLoading;
    };
  }, [options]);

  return (
    <FormControl size={"small"} error={Boolean(error)} fullWidth>
      <FormLabel
        style={{ color: "black" }}
        sx={{
          fontSize: 12,
          color: "black",
        }}
      >
        {label}
      </FormLabel>
      <Autocomplete
        getOptionLabel={(options) => options?.name || ""}
        isOptionEqualToValue={(o, v) => o?.id === v?.id}
        options={options}
        onChange={(event, newValue) => {
          setValue(newValue);
          handleChange?.([props?.name], newValue);

          return newValue;
        }}
        PaperComponent={CustomPaper}
        value={_value}
        loading={httpQuery?.isLoading}
        enddecorator={
          httpQuery?.isLoading && (
            <CircularProgress
              size="sm"
              sx={{ bgcolor: "background.surface" }}
            />
          )
        }
        fullWidth
        sx={{
          backgroundColor: "white",
          height: "40px",
          ".MuiOutlinedInput-root.MuiInputBase-sizeSmall": {
            borderRadius: "10px",
          },

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
          ".MuiAutocomplete-hasPopupIcon.css-1e73fd6-MuiAutocomplete-root .MuiOutlinedInput-root":
            {
              height: "10px",
            },
        }}
        size="small"
        {...props}
        renderInput={(params) => (
          <TextField variant="outlined" size="small" {...params} />
        )}
      />
      {error && (
        <FormHelperText
          sx={{ marginLeft: 1, fontSize: 11, letterSpacing: 0.5 }}
        >
          {error}
        </FormHelperText>
      )}{" "}
    </FormControl>
  );
}
export { BaseAutoComplate };
