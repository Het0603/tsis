import { Grid } from "@mui/material";
import PrimaryButton from "src/components/Buttons/PrimaryButton";
import BaseCard from "src/components/Card/BaseCard";
import RouterLink from "src/components/Router/RouterLink";
import TextInput from "src/components/TextInput/TextInput";
import PageSubtitleText from "src/components/Typography/PageSubtitleText";
import PageTitleText from "src/components/Typography/PageTitleText";
import ForgetPasswordCard from "./ForgetPasswordCard";


export default function NewPassword() {
    return (
        <>
            <div style={{
                height: `90vh`,
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '50px'
            }}>
                <Grid container justifyContent={'center'}>
                    <Grid item xs={12} md={4}>
                        <ForgetPasswordCard>
                            <Grid container padding={2} spacing={2}>
                                <Grid item xs={12} md={12}>
                                    <PageTitleText variant='h4' fontSize={30} value='Create New Password' fontWeight={'bold'} />
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <PageSubtitleText>your new password must be different from previous password</PageSubtitleText>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <TextInput label="New Password"></TextInput>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <TextInput label="Confirm Password"></TextInput>
                                </Grid>
                                <Grid item xs={12} md={12} mt={1}>
                                    <RouterLink to={'/'}> <PrimaryButton value='RESET Password' fullWidth></PrimaryButton></RouterLink>
                                </Grid>
                            </Grid>
                        </ForgetPasswordCard>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}