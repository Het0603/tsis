import { Grid, InputLabel, Stack } from "@mui/material";
import AvatarImage from "src/components/AvatarImageInput/AvatarImage";
import PrimaryButton from "src/components/Buttons/PrimaryButton";
import BaseCard from "src/components/Card/BaseCard";
import RouterLink from "src/components/Router/RouterLink";
import TextInput from "src/components/TextInput/TextInput";
import PageSubtitleText from "src/components/Typography/PageSubtitleText";
import PageTitleText from "src/components/Typography/PageTitleText";
import ForgotPasswordImage from 'src/static/Images/forgot_password.png'
import ForgetPasswordCard from "./ForgetPasswordCard";

export default function ForgotPassword() {
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
                        <Stack direction={'row'} justifyContent={'center'}>
                            <AvatarImage url={ForgotPasswordImage} height={100} width={100} />
                        </Stack>
                        <ForgetPasswordCard>
                            <Grid container padding={2} spacing={2}>
                                <Grid item xs={12} md={12}>
                                    <PageTitleText variant='h4' value='Forget Password ?' fontSize={30} fontWeight={'bold'} />
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <PageSubtitleText>Enter the email address associated with your account and we'll send you a code to reset your password</PageSubtitleText>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <TextInput label="Email"></TextInput>
                                </Grid>
                                <Grid item xs={12} md={12} mt={1}>
                                    <RouterLink to={'/verify'}> <PrimaryButton value='Send' fullWidth></PrimaryButton></RouterLink>

                                </Grid>
                            </Grid>
                        </ForgetPasswordCard>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}