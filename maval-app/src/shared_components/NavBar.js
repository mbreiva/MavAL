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
import LoginAuthService from '../login/LoginAuthService'
import RegisterScreen from '../register/RegisterScreen'
import ProfileDropdown from './ProfileDropdown'
import SearchBar from '../search/SearchBar'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: '#676767',
    },
    appBar: {
        display: "flex",
        flexFlow: "row nowrap",
        backgroundColor: "#FFFFFF",
        color: '#676767',
    },
    mediaSection: {
        display: "flex",
        flexGrow: 5,
        flexWrap: "nowrap",
        justifyContent: "flex-start",
    },
    navBarEnd: {
        flexGrow: 1
    },
    container: {
        padding: 0,
    },
}));

export default function NavBar(props) {
    const classes = useStyles();
     
    let loginButton = <LoginAuthService login={props.login} />;
    let registerButton = <RegisterScreen />;
    let profileButton = <ProfileDropdown logout={props.logout} />;

    return (
        <div>
            <AppBar position="static" className={classes.appBar} elevation={0}>
            <Container maxWidth="xl" className={classes.container}>
                <Toolbar>
                    <div className={classes.title}>
                        <Button component={ Link } to="/" color="inherit" disableRipple>
                            <Typography variant="h5" >
                                mavAL
                            </Typography>
                        </Button>
                    </div>
                    <span className={classes.mediaSection}>
                        <Button component={ Link } to="/anime" color="inherit">Anime</Button>                       
                        <Button component={ Link } to="/manga" color="inherit">Manga</Button>
                    </span>
                    <SearchBar />
                    {(props.isLoggedIn === "true") ? 
                        profileButton
                        : (<span style={{display:"flex"}}>
                                {registerButton}
                                {loginButton}
                            </span>)
                    }
                </Toolbar>
            </Container>
            </AppBar>
        </div>

    );
}