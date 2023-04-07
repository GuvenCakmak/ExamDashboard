
import React from "react";
import "./home.scss"
import { Typography, Box, Button, Grid } from "@mui/material";


function Home() {
    return (
        <Grid container rowSpacing={2} className="loginContainer" sx={{

        }}>
            <Grid item xs={6} sx={{ mt: 50 }} >

                <Typography fontSize={80} fontWeight={500} className="loginTitle" >
                    Welcome To <br /> Your Business<br /> Dashbaord
                </Typography>

            </Grid>

            <Grid item xs={6} container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                marginTop={50}
            >

                <Button sx={{
                    marginLeft: "10%",

                }} >
                    <Typography className="loginButton" fontSize={60} width={280}  >
                        Login
                    </Typography>
                </Button>
                <Button sx={{
                    marginRight: "20%",
                }}>
                    <Typography className="signupButton" fontSize={60} width={280}  >
                        Sign Up
                    </Typography>
                </Button>
            </Grid>



        </Grid >

    )
};

export default Home;
