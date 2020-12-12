import React, { useState, useRef, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import { Link } from 'react-router-dom'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import { makeStyles } from '@material-ui/core/styles'
import Menu from '@material-ui/core/Menu'
import Fade from '@material-ui/core/Fade'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import IconButton from '@material-ui/core/IconButton'

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
    const open = Boolean(anchorEl);
    let user_id = localStorage.getItem("user_id");

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <IconButton
                color="inherit"
                onMouseOver={handleClick}
                //onMouseOut={handleClose}
            >
                <AccountCircleIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                elevation={0}
                getContentAnchorEl={null}
                
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: -14,
                    horizontal: 'left',
                }}
            >
                <MenuItem component={ Link } to={`/user/${user_id}`}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My Anime</MenuItem>
                <MenuItem onClick={handleClose}>My Manga</MenuItem>
                <MenuItem onClick={handleClose}>Settings</MenuItem>
                <MenuItem onClick={props.handleLogout}>Log out</MenuItem>
            </Menu>
        </div>
    );
}