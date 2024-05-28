import { Grid, Stack } from "@mui/material";
import Error_403 from 'src/static/Error/403.png'

export default function Error403() {

    return (
        <Grid container justifyContent={'center'}>
            <Stack direction={'row'}>
                <img src={Error_403} style={{
                    backgroundColor: 'white'
                }} alt="Error 403" />
            </Stack>
        </Grid>
    )
}