import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import 'fontsource-roboto'
import Container from '@material-ui/core/Container'
import LoginScreen from '../login/LoginScreen'
import RegisterScreen from '../register/RegisterScreen'

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
}));

export default function NavBar() {
    const classes = useStyles();
    
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
                    {/* <Button component={ Link } to="/login" color="inherit">Login</Button> */}
                    <LoginScreen />
                    <RegisterScreen />
                </Toolbar>
            </Container>
            </AppBar>
        </div>

    );
}