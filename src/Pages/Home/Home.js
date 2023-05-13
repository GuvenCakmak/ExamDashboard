import React from "react";
import "./home.scss"
import { Typography, Box, Button, Grid } from "@mui/material";
import { useAuth0 } from '@auth0/auth0-react'

function Home() {

    const { loginWithRedirect, } = useAuth0();

    const handleLogin = async () => {
        await loginWithRedirect({
            appState: {
                returnTo: "/Dashboard",
            },
        });
    };

    const handleSignUp = async () => {
        await loginWithRedirect({
            appState: {
                returnTo: "/Dashboard",
            },
            authorizationParams: {
                screen_hint: "signup",
            },
        });
    };


    return (
        <Grid container className="loginContainer" sx={{


        }}>
            <Grid className="leftContainer" md={6}

            >
                <Box className="logo">
                    <Typography fontWeight={"bold"} fontSize={45}>EX</Typography>
                    <span className="logoTitle">ExamensArbete</span>

                </Box>
                <Typography fontSize={80} fontWeight={500} mt={50} className="loginTitle" >
                    Welcome To <br /> Your Business<br /> Dashbaord
                </Typography>

            </Grid>

            <Grid md={6} container
                direction="column"
                justifyContent="flex-end"
                alignItems="center"
            >

                <Button onClick={handleLogin} sx={{
                    marginBottom: 20
                }} >
                    <Typography className="loginButton" fontSize={60} width={280}  >
                        Login
                    </Typography>
                </Button>
                <Button onClick={handleSignUp} sx={{

                }}>
                    <Typography className="signupButton" fontSize={60} width={280} >
                        Sign Up
                    </Typography>
                </Button>
            </Grid>



        </Grid >

    )
};

export default Home;
