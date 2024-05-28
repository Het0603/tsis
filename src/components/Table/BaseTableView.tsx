import { Box, Table } from "@mui/material";

export function BaseTableView(props: any) {
  return (
    <>
      <Box maxWidth={"100%"} style={{ overflowX: "scroll" }}>
        <Table {...props} />
      </Box>
    </>
  );
}
