import {
  Grid,
  InputLabel,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AvatarImage from "src/components/AvatarImageInput/AvatarImage";
import PrimaryButton from "src/components/Buttons/PrimaryButton";
import RouterLink from "src/components/Router/RouterLink";
import SGITrademarkFooter from "src/components/SGITrademarkFooter/SGITrademarkFooter";
import TextInputPassword from "src/components/TextInput/TextInputPassword";
import TextInputUserName from "src/components/TextInput/TextInputUserName";
import PageSubtitleText from "src/components/Typography/PageSubtitleText";
import PageTitleText from "src/components/Typography/PageTitleText";
import LoginCard from "./LoginCard";
import { useNavigate } from "react-router-dom";
import { useLogin } from "./useLogin";
import useAuthState from "src/redux/auth/useAuthState";
import { useEffect } from "react";
import Avatar from "src/static/Images/college_logo.png";
import Student_Login_Back from "src/static/Images/student_login_back.png";
import { LoadingButton } from "@mui/lab";

export default function Login() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const { handleChange, onSubmit, values, errors, isSubmitting } = useLogin();

  const { isLoggedIn } = useAuthState();
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) navigate(`/`);
  }, [isLoggedIn]);
  return (
    <>
      <form>
        <div
          style={{
            // height: `90vh`,
            // width: '100vw',
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            // marginTop : '10px',
            // marginBottom: '50px',
            // overflowY : 'scroll'
            // marginTop: "-250px",
            zIndex: 1,
          }}
        >
          <Grid container justifyContent={"center"} padding={3} zIndex={1}>
            <Grid item xs={12} md={4}>
              <Stack direction={"row"} justifyContent={"center"}>
                {!isMobile ? (
                  <>
                    <AvatarImage
                      url={Avatar}
                      height={50}
                      width={150}
                      marginBottom={50}
                    />
                  </>
                ) : (
                  <>
                    <AvatarImage
                      url={Avatar}
                      height={50}
                      width={150}
                      marginBottom={50}
                    />
                  </>
                )}
              </Stack>

              <LoginCard title={"login"}>
                <Grid container padding={1} spacing={1}>
                  <Grid item xs={12} md={12}>
                    <PageTitleText
                      variant="h4"
                      value="Login"
                      fontSize={30}
                      fontWeight={"bold"}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <PageSubtitleText>
                      Welcome to SGI Staff, Login to Continue
                    </PageSubtitleText>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextInputUserName
                      name="username"
                      label={"Username"}
                      value={values.username}
                      onChange={handleChange}
                      error={Boolean(errors.username)}
                      helpertext={errors.username}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextInputPassword
                      name="password"
                      label={"Password"}
                      value={values.password}
                      onChange={handleChange}
                      error={Boolean(errors.password)}
                      helpertext={errors.password}
                    />
                  </Grid>
                  <Grid item xs={12} md={12} mt={1} m={2}>
                    {/* <RouterLink to={'/'}>  */}
                    <LoadingButton
                      type="submit"
                      loading={Boolean(isSubmitting)}
                      onClick={onSubmit}
                      fullWidth
                      variant="contained"
                      sx={{
                        backgroundColor: `var(--college-blue, #2C3878)`,
                        borderRadius: "10px",
                        height: "45px",
                      }}
                    >
                      Login
                    </LoadingButton>
                    {/* </RouterLink> */}
                  </Grid>
                  <Grid item xs={12} md={12} mt={1}>
                    <Stack direction={"row"} justifyContent={"center"}>
                      <RouterLink to={"/forgot-password"}>
                        <InputLabel
                          sx={{
                            fontSize: "14px",
                          }}
                        >
                          {" "}
                          Forgot Password ?{" "}
                        </InputLabel>
                      </RouterLink>
                    </Stack>
                  </Grid>
                </Grid>
              </LoginCard>
            </Grid>
          </Grid>
        </div>
      </form>
      <div
        style={{
          backgroundImage: `url(${Student_Login_Back})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          width: "100%",
          height: "40vh", // Adjust the height as desired
          position: "fixed",
          bottom: 0,
          left: 0,
          zIndex: 0,
        }}
      ></div>

      <SGITrademarkFooter />
    </>
  );
}
