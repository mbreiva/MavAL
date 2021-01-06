import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import TablePagination from '@material-ui/core/TablePagination'
import CircularProgress from '@material-ui/core/CircularProgress'
import AddRemoveMediaButton from '../shared_components/AddRemoveMediaButton'

const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
        fontWeight: theme.typography.fontWeightBold,
    },
}));

export default function SearchPage(props) {
    const classes = useStyles();

    let results = props.location.state.results;
    let animeResults;
    let mangaResults;

    let animeTable = <div />;
    let mangaTable = <div />;
    
    if(results.length === 0) {
        
    }
    if(results.length > 0) {
        animeResults = results.filter(result => result.mediaTypeId === 1);
    }

    return (
        <Container component="main" maxWidth="lg">
            <Typography component="h1" variant="h4" className={classes.title}>Search Results</Typography>
        </Container>
    )
}
