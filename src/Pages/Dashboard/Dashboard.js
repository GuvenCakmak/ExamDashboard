import React from "react";
import { Typography, Box, Button, Grid, List, ListItem, ListItemText, Divider } from "@mui/material";
import RevenueChart from "../../Components/Charts/LineChart";
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';

function Dashboard() {
    return (


        <Box sx={{ display: "flex", margin: 2, }}>
            <Typography position={"absolute"} marginBottom={5} variant="h5">Dashboard</Typography>
            <Box sx={{ display: "flex", marginTop: 10, }} >
                <Grid xs={8} >
                    <Box sx={{ backgroundColor: "#283593", borderRadius: "25px", padding: 2, margin: 2 }}>
                        <Typography sx={{ justifyContent: "center", display: "flex" }} color={"whitesmoke"} variant="h6">Revenue Chart</Typography>
                        <RevenueChart />
                    </Box>
                </Grid>

                <Grid xs={4}>
                    <Box sx={{ backgroundColor: "#283593", borderRadius: "25px", padding: 2, margin: 2, }}>
                        <Typography>
                            Most Trending Products
                            <LocalFireDepartmentOutlinedIcon sx={{ color: "orange", paddingLeft: 1, }} />
                        </Typography>
                        <List>

                            <ListItem>
                                <ListItemText primary="test1"></ListItemText>
                            </ListItem>
                            <Divider sx={{ borderBottomWidth: 2, backgroundColor: "white" }} />
                            <ListItem>
                                <ListItemText primary="test2"></ListItemText>
                            </ListItem>
                            <Divider sx={{ borderBottomWidth: 2, backgroundColor: "white" }} />
                            <ListItem>
                                <ListItemText primary="test3"></ListItemText>
                            </ListItem>
                            <Divider sx={{ borderBottomWidth: 2, backgroundColor: "white" }} />
                            <ListItem>
                                <ListItemText primary="test4"></ListItemText>
                            </ListItem>
                            <Divider sx={{ borderBottomWidth: 2, backgroundColor: "white" }} />
                            <ListItem>
                                <ListItemText primary="test5"></ListItemText>
                            </ListItem>

                        </List>
                    </Box>
                </Grid>
            </Box >


        </Box >
    )
}

export default Dashboard;
