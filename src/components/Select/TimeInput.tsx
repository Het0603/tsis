import React, { useState } from "react";
import {
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid, Typography,
} from "@mui/material";
import TextInput from "../TextInput/TextInput";

const TimeTextField = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fromHours, setFromHours] = useState(1);
  const [fromMinutes, setFromMinutes] = useState(0);
  const [fromPeriod, setFromPeriod] = useState("AM");
  const [toHours, setToHours] = useState(1);
  const [toMinutes, setToMinutes] = useState(0);
  const [toPeriod, setToPeriod] = useState("AM");

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSave = () => {
    // You can handle the time data here when the user clicks Save
    const formattedFromTime = `${fromHours}:${fromMinutes.toString().padStart(2, "0")} ${fromPeriod}`;
    const formattedToTime = `${toHours}:${toMinutes.toString().padStart(2, "0")} ${toPeriod}`;
    console.log("From Time:", formattedFromTime);
    console.log("To Time:", formattedToTime);
    setIsOpen(false);
  };

  return (
    <>
      <TextInput
        label="Time"
        value={`${fromHours}:${fromMinutes.toString().padStart(2, "0")} ${fromPeriod} - ${toHours}:${toMinutes.toString().padStart(2, "0")} ${toPeriod}`}
        onClick={handleOpen}
      />

      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Select Time Range</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={1.5}><Typography variant="body1" color="initial" marginTop={"15px"}>From</Typography></Grid>
            <Grid item xs={12} md={3.5}>
              <TextInput
                type="number"
                value={fromHours}
                onChange={(e) => setFromHours(Math.max(1, Math.min(12, Number(e.target.value))))}
                inputProps={{ min: 1, max: 12 }}
                label="Hour"
              />
            </Grid>
            <Grid item xs={12} md={3.5}>
              <TextInput
                type="number"
                value={fromMinutes}
                onChange={(e) => setFromMinutes(Math.max(0, Math.min(59, Number(e.target.value))))}
                inputProps={{ min: 0, max: 59 }}
                label="Minutes"
              />
            </Grid>
            <Grid item xs={12} md={3.5} marginTop={"15px"}>
              <Button onClick={() => setFromPeriod(fromPeriod === "AM" ? "PM" : "AM")} variant="outlined">
                {fromPeriod}
              </Button>
            </Grid>

            <Grid item xs={12} md={1.5}><Typography variant="body1" color="initial" marginTop={"15px"}>To</Typography></Grid>
            <Grid item xs={12} md={3.5}>
              <TextInput
                type="number"
                value={fromHours}
                onChange={(e) => setFromHours(Math.max(1, Math.min(12, Number(e.target.value))))}
                inputProps={{ min: 1, max: 12 }}
                label="Hour"
              />
            </Grid>
            <Grid item xs={12} md={3.5}>
              <TextInput
                type="number"
                value={fromMinutes}
                onChange={(e) => setFromMinutes(Math.max(0, Math.min(59, Number(e.target.value))))}
                inputProps={{ min: 0, max: 59 }}
                label="Minutes"
              />
            </Grid>
            <Grid item xs={12} md={3.5} marginTop={"15px"}>
              <Button onClick={() => setFromPeriod(fromPeriod === "AM" ? "PM" : "AM")} variant="outlined">
                {fromPeriod}
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TimeTextField;
