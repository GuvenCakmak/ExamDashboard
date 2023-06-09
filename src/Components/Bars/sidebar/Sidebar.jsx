import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";


const Item = ({ title, to, icon, selected, setSelected }) => {

    const { isLoading } = useAuth0()


    if (isLoading) {
        return <div></div>
    }
    return (
        <MenuItem
            active={selected === title}
            style={{
                color: "#383593",

            }}
            onClick={() => setSelected(title)}
            icon={icon}

        >
            <Typography sx={{ fontSize: 16, color: "#0d0b5c", fontWeight: 500 }}>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    );
};

const SidebarNav = () => {

    const { user, isLoading, isAuthenticated } = useAuth0();
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");


    return (
        <Box sx={{ marginRight: 4, }}>
            <Sidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    {/* LOGO AND MENU ICON */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",

                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography variant="h5" >
                                    ADMIN
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {!isCollapsed && (

                        <Box >

                            <Box display="flex" justifyContent="center" alignItems="center" width="200">
                                <img width={100} height={100} alt="profile-user"
                                    style={{ cursor: "pointer", borderRadius: "50%", }}
                                    src={user.picture} />

                            </Box>
                            <Box textAlign="center">
                                <Typography
                                    variant="h5"

                                    fontWeight="bold"
                                    sx={{ m: "10px 0 0 0" }}
                                >
                                    {user.name}
                                </Typography>

                            </Box>
                        </Box>
                    )}

                    <Box >
                        <NavLink exact to="/Dashboard">
                            <Item
                                title="Dashboard"
                                to="/"
                                icon={<HomeOutlinedIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </NavLink>
                        <Typography
                            variant="h6"

                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Data
                        </Typography>
                        <NavLink exact to="/Products">
                            <Item

                                title="Products"
                                icon={<PeopleOutlinedIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </NavLink >
                        <NavLink exact to="/Customers">
                            <Item
                                title="Customers"
                                to="/Customers"
                                icon={<ContactsOutlinedIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </NavLink>
                        <NavLink exact to="/Transactions">
                            <Item
                                title="Transactions"
                                to="/Transactions"
                                icon={<ReceiptOutlinedIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </NavLink>
                        <Typography
                            variant="h6"

                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Pages
                        </Typography>
                        <Item
                            title="Profile Form"
                            to="/form"
                            icon={<PersonOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />


                        <Typography
                            variant="h6"

                            sx={{ m: "15px 0 5px 20px" }}
                        >
                            Charts
                        </Typography>
                        <NavLink exact to="/Bar">
                            <Item
                                title="Bar Chart"
                                to="/Bar"
                                icon={<BarChartOutlinedIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </NavLink>

                        <NavLink exact to="/Pie">
                            <Item
                                title="Pie Chart"
                                to="/Pie"
                                icon={<PieChartOutlineOutlinedIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </NavLink>

                        <NavLink exact to="/Line">
                            <Item

                                title="Line Chart"
                                to="/Line"
                                icon={<TimelineOutlinedIcon />}
                                selected={selected}
                                setSelected={setSelected}

                            />
                        </NavLink>

                    </Box>
                </Menu>
            </Sidebar>

        </Box>
    );
};

export default SidebarNav;
