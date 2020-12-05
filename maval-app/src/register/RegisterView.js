import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%', 
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
}));

export default function RegisterPage(props){
    const classes = useStyles();

    return (
        <div>
            <CssBaseline />
            <Container component="main" maxWidth="xs">
                <div className={classes.paper}>
                    <Typography component="h1" variant="h4">Sign Up</Typography>
                    <form className={classes.form}>
                        <TextField 
                            variant="outlined" 
                            margin="normal"
                            required
                            fullWidth
                            id="email" 
                            name="email" 
                            label="Email" 
                            size="small"
                            onChange={props.handleEmailChange}
                        />
                        <TextField 
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username" 
                            name="username" 
                            label="Username" 
                            size="small"
                            onChange={props.handleUsernameChange}
                        />
                        <TextField 
                            variant="outlined" 
                            margin="normal"
                            required
                            fullWidth
                            id="password" 
                            name="password" 
                            label="Password" 
                            size="small"
                            onChange={props.handlePasswordChange}
                        />
                    </form>
                    <Button 
                        type="submit"
                        fullWidth
                        variant="contained" 
                        color="primary"
                        onClick={props.handleRegister}
                    >
                        Register
                    </Button>
                </div>
            </Container>
        </div>
    )
}