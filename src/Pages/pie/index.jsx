import { Box } from "@mui/material";
import Header from "../../Components/Header";
import SidebarNav from "../../Components/Bars/sidebar/Sidebar";
import Navbar from "../../Components/Bars/Navbar/Navbar";
import PieProduct from "../../Components/Charts/PieChart";

const Pie = () => {
    return (
        <Box display="flex" >
            <SidebarNav />

            <Box justifyContent={"center"} alignItems={"center"} margin={"auto"} paddingBottom={10}>

                <Box marginBottom={5}>

                    <Header title="Pie Chart" subtitle="Overview of the pie chart" />
                </Box>

                <Box marginTop={3}  >
                    <PieProduct />
                </Box>
            </Box>
        </Box>
    );
};

export default Pie;