import { Grid, Typography } from "@mui/material";

export default function Calender (){
    return(
        <>
        <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
                <Typography
                sx={{
                    color:"black",
                    fontSize:"42px",
                    fontWeight:500,
                    marginTop:"10px"
                    }}>
                    Calendar With Festival And Other Celebration Day
                </Typography>
            </Grid> 
        </Grid>
        </>
    )
}