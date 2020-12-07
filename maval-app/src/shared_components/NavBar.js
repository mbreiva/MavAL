import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { fade, makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import 'fontsource-roboto'
import SearchIcon from '@material-ui/icons/Search'
import Container from '@material-ui/core/Container'
import InputBase from '@material-ui/core/InputBase'
import LoginScreen from '../login/LoginScreen'
import RegisterScreen from '../register/RegisterScreen'
import ProfileDropdown from './ProfileDropdown'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
    },
    searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function NavBar() {
    const classes = useStyles();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    let login = <LoginScreen />;
    let register = <RegisterScreen />;
    // TODO: Get user id from local storage
    let user_id = localStorage.getItem("user_id")
    //let userProfile = <Button component={ Link } to={`/user/${user_id}`} color="inherit">Profile</Button>;
    let userProfile = <ProfileDropdown />

    return (
        <div className={classes.root}>
            <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                        MavAL
                    </Typography>
                    <Button component={ Link } to="/" color="inherit">Home</Button>
                    <Button component={ Link } to="/anime" color="inherit">Anime</Button>
                    <Button component={ Link } to="/manga" color="inherit">Manga</Button>
                    {/* TODO: Conditional rendering of login/logout button */}
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                        />
                    </div>
                    {login}
                    {register}
                    {userProfile}
                </Toolbar>
            </Container>
            </AppBar>
        </div>

    );
}