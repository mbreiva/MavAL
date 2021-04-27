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
    button: {
        backgroundColor: "#676767",
        color: "#FFFFFF",
        borderRadius: "10px",
        width: "80px",
        '&:hover': {
            backgroundColor: "#7E7E7E"
        }
    },
}));

export default function RegisterDialog(props) {
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
            <Button onClick={handleClickOpen} className={classes.button}>
                Sign Up
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
                        Register
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <InputLabel shrink required>
                        Email
                    </InputLabel>
                    <TextField 
                        fullWidth
                        id="email" 
                        name="email" 
                        onChange={props.handleEmailChange}
                    />
                    <InputLabel shrink required>
                        Username
                    </InputLabel>
                    <TextField 
                        fullWidth
                        id="username" 
                        name="username" 
                        onChange={props.handleUsernameChange}
                    />
                    <InputLabel shrink required>
                        Password
                    </InputLabel>
                    <TextField 
                        fullWidth
                        id="password" 
                        name="password" 
                        onChange={props.handlePasswordChange}
                    />
                    <InputLabel shrink required>
                        Confirm password
                    </InputLabel>
                    <TextField 
                        fullWidth
                        id="confirm_password" 
                        name="confirm_password" 
                        onChange={props.handleConfirmPasswordChange}
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
                            onClick={props.handleRegister}
                        >
                            Register
                        </Button>
                        <Button 
                            onClick={() => {
                                handleClose();
                                props.clearStates();
                            }} 
                        >
                            Cancel
                        </Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </div>
    );
}