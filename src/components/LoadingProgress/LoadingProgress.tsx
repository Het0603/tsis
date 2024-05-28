import { Box, CircularProgress } from "@mui/material";

const alignments: any = {
  left: "flex-start",
  right: "flex-end",
  center: "center",
};

export function LoadingProgress({
  align = "center",
  color = "primary",
  size = "2rem",
  ...props
}: any) {
  return (
    <Box display="flex" justifyContent={alignments[align]} {...props}>
      <CircularProgress color={color} size={size} />
    </Box>
  );
}
