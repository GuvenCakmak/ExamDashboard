import { Box } from "@mui/material";
import Header from "../../Components/Header";
import RevenueChart from "../../Components/Charts/LineChart";
import SidebarNav from "../../Components/Bars/sidebar/Sidebar";
import Example from "../../Components/Charts/ProductChart";

const Bar = () => {
    return (
        <Box display="flex" >
            <SidebarNav />

            <Box justifyContent={"center"} alignItems={"center"} margin={"auto"} paddingTop={10}>

                <Box marginBottom={5}>
                    <Header title="Bar Chart" subtitle="Overview of the bar chart" />

                </Box>

                <Box height="50vh" width="60vh" marginTop={3} >
                    <Example />
                </Box>
            </Box>
        </Box>
    );
};

export default Bar;