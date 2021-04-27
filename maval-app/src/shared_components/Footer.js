import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
    footer: {
        position: "absolute",
        bottom: "0",
        backgroundColor: '#8ABF8E',
        height: "30px",
        width: "100%",
    },
}));
export default function Footer () {
    const classes = useStyles();

    return (
        <Paper className={classes.footer} ></Paper>
    )
}