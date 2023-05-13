import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import SidebarNav from "./sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
function Showbars({ children }) {

    const location = useLocation();
    const [showBars, setshowBars] = useState(false)
    const { isAuthenticated, isLoading } = useAuth0()

    useEffect(() => {
        if (location.pathname === "/") {
            setshowBars(false)
        } else {
            setshowBars(true)
        }
    }, [location])

    if (isLoading) {
        return <div></div>
    }

    return (



        <Box sx={{ heigth: "100%" }}>
            {showBars ? (
                <>
                    <Box sx={{ float: "left", marginRight: 5, width: "auto", }}>
                        <SidebarNav />
                    </Box>
                    <Box sx={{ float: "top", width: "auto" }}>
                        <Navbar />
                    </Box>
                </>
            ) : null}
        </Box>


    )
}

export default Showbars;
