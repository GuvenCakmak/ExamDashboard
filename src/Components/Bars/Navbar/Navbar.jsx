import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Typography, Box } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';

export default function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { logout } = useAuth0()
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            marginTop: 0.5,
            anchor: "top"


        }}>

            <Box sx={{ display: "flex" }}>

                <Typography
                    fontSize={45}
                    variant='h4'
                    color={'whitesmoke'}
                >
                    ExamensArbete
                </Typography>
            </Box>
            <Box>
                <Button sx={{
                    border: 3,
                    marginRight: 2,
                    ":hover": {
                        color: "rgb(9, 5, 252)"
                    }
                }}
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}



                >
                    <Typography
                        variant='h4'
                        color={'whitesmoke'}
                    >
                        Settings
                    </Typography>

                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</MenuItem>
                </Menu>
            </Box>
        </Box>
    );
}