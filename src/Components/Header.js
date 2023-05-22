import { Typography, Box, } from "@mui/material";
import React from "react";

const Header = ({ title, subtitle }) => {

    return (
        <Box sx={{

            width: "100%"
        }}>
            <Typography
                variant="h5"
                color="grey"
                fontWeight="bold"

            >
                {title}
            </Typography>
            <Typography variant="h6" color="white">
                {subtitle}
            </Typography>
        </Box>
    );
};

export default Header;