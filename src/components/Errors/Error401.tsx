import { Grid, Stack } from "@mui/material";
import Error_401 from 'src/static/Error/401.png'

export default function Error401() {

    return (
        <Grid container justifyContent={'center'}>
            <Stack direction={'row'}>
                <img src={Error_401} style={{
                    backgroundColor: 'white'
                }} alt="Error 401" />
            </Stack>
        </Grid>
    )
}