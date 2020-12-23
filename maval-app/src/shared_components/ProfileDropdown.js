import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles'
import Menu from '@material-ui/core/Menu'
import Fade from '@material-ui/core/Fade'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import IconButton from '@material-ui/core/IconButton'
import ButtonBase from '@material-ui/core/ButtonBase'
import './ProfileDropdown.css'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    paper: {
      marginRight: theme.spacing(2),
    },
}));

export default function ProfileDropdown(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    //const open = Boolean(anchorEl);
    
    let user_id = localStorage.getItem("user_id");

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleIconClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                color="inherit"
                onMouseOver={handleClick}
                //onMouseLeave={handleIconClose}
            >
                <AccountCircleIcon fontSize="large"/>
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                // keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                TransitionComponent={Fade}
                elevation={0}
                getContentAnchorEl={null}
                MenuListProps={{ onMouseLeave: handleClose}}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: -2,
                    horizontal: 'right',
                }}
            >
                <MenuItem component={ Link } to={`/user/${user_id}`}>Profile</MenuItem>
                <MenuItem>My Anime</MenuItem>
                <MenuItem>My Manga</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem onClick={props.logout}>Log out</MenuItem>
            </Menu>
        </div>
    );
}