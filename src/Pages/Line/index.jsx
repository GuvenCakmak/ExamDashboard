import { Box } from "@mui/material";
import Header from "../../Components/Header";
import RevenueChart from "../../Components/Charts/LineChart";
import SidebarNav from "../../Components/Bars/sidebar/Sidebar";
import Navbar from "../../Components/Bars/Navbar/Navbar";

const Line = () => {
    return (
        <Box display="flex" >
            <SidebarNav />

            <Box justifyContent={"center"} alignItems={"center"} margin={"auto"} paddingTop={10}>

                <Box marginBottom={5}>
                    <Header title="Line Chart" subtitle="Overview of the line chart" />

                </Box>

                <Box height="50vh" width="100vh" marginTop={3} >
                    <RevenueChart />
                </Box>
            </Box>
        </Box>
    );
};

export default Line;