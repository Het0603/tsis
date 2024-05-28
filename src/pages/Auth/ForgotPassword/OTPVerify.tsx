import { Grid, Stack } from "@mui/material";
import AvatarImage from "src/components/AvatarImageInput/AvatarImage";
import PrimaryButton from "src/components/Buttons/PrimaryButton";
import BaseCard from "src/components/Card/BaseCard";
import RouterLink from "src/components/Router/RouterLink";
import TextInput from "src/components/TextInput/TextInput";
import PageSubtitleText from "src/components/Typography/PageSubtitleText";
import PageTitleText from "src/components/Typography/PageTitleText";
import ForgetPasswordCard from "./ForgetPasswordCard";


export default function OTPVerify() {
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


                            <Grid container padding={2} spacing={1}>
                                <Grid item xs={12} md={12}>
                                    <PageTitleText variant='h4' fontSize={30} value='Enter Code' fontWeight={'bold'} />
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <PageSubtitleText>please check your mail</PageSubtitleText>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <TextInput label=""></TextInput>
                                </Grid>
                                <Grid item xs={12} md={12} mt={1}>
                                    <RouterLink to={'/new-password'}> <PrimaryButton value='CONFIRM' fullWidth></PrimaryButton></RouterLink>
                                </Grid>
                            </Grid>
                        </ForgetPasswordCard>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}