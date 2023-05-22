import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import { Box } from '@mui/material';

function Reviews() {

    const [value, setValue] = React.useState(4)
    return (


        <List sx={{ color: "white", }}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary="Ali Connors"
                    secondary={
                        <React.Fragment>
                            <Typography color={"white"}> — Shoe fits well perfect size!</Typography>
                            <Rating name="read-only" value={value} readOnly />
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                </ListItemAvatar>
                <ListItemText
                    sx={{ color: "white" }}
                    primary="Alex Jennifer"
                    secondary={
                        <React.Fragment>

                            <Typography color={"white"}> — 100% would recommend this to anyone</Typography>
                            <Rating name="read-only" value={value} readOnly />
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </ListItemAvatar>

                <ListItemText

                    primary="Sandra Adams"
                    secondary={
                        <React.Fragment>
                            <Typography color={"white"}> — Finally I got my Jewelry time to shine!</Typography>
                            <Rating name="read-only" value={value} readOnly />
                        </React.Fragment>
                    }
                />
            </ListItem>
        </List >

    )
};

export default Reviews;
