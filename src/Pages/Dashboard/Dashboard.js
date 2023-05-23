import { React, useEffect, useState } from "react";
import { Typography, Box, Button, Grid, List, ListItem, ListItemText, Divider, MenuItem, } from "@mui/material";
import RevenueChart from "../../Components/Charts/LineChart";
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import Api from "../../Components/Api/Api";
import Example from "../../Components/Charts/ProductChart";
import SidebarNav from "../../Components/Bars/sidebar/Sidebar";
import Navbar from "../../Components/Bars/Navbar/Navbar";
import Reviews from "./Reviews";
import { mockTransactions } from "../../Components/Data/MockData";
import Header from "../../Components/Header";
import PieProduct from "../../Components/Charts/PieChart";

function Dashboard() {

    const [products, setProducts] = useState({ products: [] });

    useEffect(() => {

        const getData = async () => {
            const data = await Api();

            setProducts(data)
        }
        getData();
    }, []);



    return (

        <Box sx={{ display: "flex", }}>
            <SidebarNav />

            <Grid container spacing={1} >
                <Navbar />


                <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

                <Grid sx={6} >

                    <Box sx={{ backgroundColor: "#283593", borderRadius: "25px", width: 900, margin: 2 }}>
                        <Typography sx={{ justifyContent: "center", display: "flex" }} color={"whitesmoke"} variant="h6">Revenue Chart</Typography>
                        <RevenueChart />
                    </Box>


                </Grid>

                <Grid sx={6} >
                    <Box sx={{ backgroundColor: "#283593", borderRadius: "25px", margin: 2, }}>


                        <Typography color={"white"} sx={{ justifyContent: "center", display: "flex", paddingTop: 1 }}>
                            Most Recent Reviews
                            <LocalFireDepartmentOutlinedIcon sx={{ color: "orange", paddingLeft: 1, }} />
                        </Typography>
                        <Reviews />
                    </Box>
                </Grid>

                <Grid sx={4}>
                    <Box sx={{ backgroundColor: "#283593", borderRadius: "25px", padding: 1, margin: 2, }}>
                        <Typography sx={{ justifyContent: "center", display: "flex" }} color={"whitesmoke"} variant="h6">Total Amount Sold</Typography>
                        <Example />
                    </Box>
                </Grid>

                <Grid sx={4}>

                    <Box sx={{ backgroundColor: "#283593", borderRadius: "25px", padding: 1, margin: 2, }}>
                        <Typography sx={{ justifyContent: "center", display: "flex" }} color={"whitesmoke"} variant="h6">Products Sold Today</Typography>
                        <PieProduct />
                    </Box>
                </Grid>

                <Grid style={{
                    height: 365, width: 500, overflow: "hidden", overflowY: "scroll",

                }} sx={4}>

                    <Box
                        padding={1}
                        margin={2}
                        backgroundColor="#283593"
                        borderRadius={6}

                    >
                        <Typography sx={{ justifyContent: "center", display: "flex", paddingTop: 1 }} color={"whitesmoke"} variant="h6">Recent Transactions</Typography>
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            borderBottom="4"
                            colors="white"
                            p="15px"

                        >

                        </Box>
                        {mockTransactions.map((transaction, i) => (
                            <Box
                                key={`${transaction.txId}-${i}`}
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                borderBottom="4"
                                p="15px"

                            >
                                <Box>
                                    <Typography
                                        color="white"
                                        variant="h5"
                                        fontWeight="600"
                                    >
                                        {transaction.txId}
                                    </Typography>
                                    <Typography color="whitesmoke">
                                        {transaction.user}
                                    </Typography>
                                </Box>
                                <Box sx={{ color: "pink" }}>{transaction.date}</Box>
                                <Box
                                    backgroundColor="purple"
                                    p="5px 10px"
                                    borderRadius="4px"
                                >
                                    ${transaction.cost}
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Grid>


            </Grid >
        </Box >

        // 
        // <Grid container spacing={1} paddingLeft={5}>
        //     <Grid md={8}>

        //         <RevenueChart />

        //     </Grid>
        //     <Grid md={4}>
        //         <RevenueChart />
        //     </Grid>
        //     <Grid md={4}>
        //         <Example />
        //     </Grid>
        //     <Grid md={8}>
        //         <Example />
        //     </Grid>
        // </Grid>

    )
}

export default Dashboard;
