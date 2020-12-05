import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function RegisterDialog(props) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button color="inherit" onClick={handleClickOpen}>
                Register
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    Register
                </DialogTitle>
                <DialogContent>
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
                    <DialogActions>
                        <Button 
                            type="submit"
                            color="primary"
                            onClick={props.handleRegister}
                        >
                            Register
                        </Button>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </div>
    );
}