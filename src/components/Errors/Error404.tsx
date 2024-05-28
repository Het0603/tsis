import { Grid, Stack } from "@mui/material";
import Error_404 from 'src/static/Error/404.png'

export default function Error404() {

    return (
        <Grid container justifyContent={'center'}>
            <Stack direction={'row'}>
                <img src={Error_404}  style={{
                    backgroundColor: 'white'
                }} alt="Error 404" />
            </Stack>
        </Grid>
    )
}