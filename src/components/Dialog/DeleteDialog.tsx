import { Button, DialogContent, Grid, Typography } from "@mui/material";
import { BootstrapDialog } from "./BoostrapDialog";
import BootstrapDialogTitle from "./BoostrapDialogTitle";

export default function DeleteModel({
  open,
  close,
  title,
  description,
  cancel,
  final,
  final_title,
}: any) {
  return (
    <>
      <BootstrapDialog
        onClose={close}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth={"md"}
        PaperProps={{
          style: { borderRadius: 15 },
        }}
      >
        <BootstrapDialogTitle onClose={close}>{title}</BootstrapDialogTitle>
        <DialogContent>
          <Typography variant="body2" fontSize={17}>
            {description}
          </Typography>

          <Grid container marginTop={1} spacing={1} mt={2}>
            <Grid item xs={12} md={6}>
              <Button
                sx={{
                  border: "1px solid #808080",
                  color: "#808080",
                  padding: "8px",
                }}
                fullWidth
                variant="text"
                onClick={close}
              >
                {cancel}
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                sx={{
                  border: "1px solid #4755D1",
                  color: "#3240BA",
                  padding: "8px",
                }}
                variant="text"
                fullWidth
                onClick={final}
              >
                {final_title}
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </BootstrapDialog>
    </>
  );
}
