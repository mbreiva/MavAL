import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography'
import { InputLabel } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
        fontWeight: theme.typography.fontWeightBold,
    },
    error: {
        color: "#ff3d00",
        fontSize: 15,
    },
}));

export default function LoginDialog(props) {
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button color="inherit" onClick={handleClickOpen}>
                Login
            </Button>
            <Dialog 
                open={open} 
                onClose={() => {
                    handleClose();
                    props.clearStates();
                }}  
            >
                <DialogTitle>
                    <Typography component="h1" variant="h4" className={classes.title}>
                        Login
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <InputLabel shrink required>
                        Username
                    </InputLabel>
                    <TextField 
                        fullWidth
                        id="username" 
                        name="username" 
                        onChange = {props.handleUsernameChange}
                    />
                    <InputLabel shrink required>
                        Password
                    </InputLabel>
                    <TextField 
                        fullWidth
                        id="password" 
                        name="password"  
                        onChange = {props.handlePasswordChange}
                    />
                    {props.errorMsg ? 
                        <Typography className={classes.error}>
                            {props.errorMsg}
                        </Typography>
                        : <div />
                    }
                    <DialogActions>
                        <Button 
                            type="submit"
                            color="primary"
                            onClick={props.handleLogin}
                        >
                            Login
                        </Button>
                        <Button 
                            onClick={() => {
                                handleClose();
                                props.clearStates();
                            }} 
                            color="primary"
                        >
                            Cancel
                        </Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </div>
    )
}