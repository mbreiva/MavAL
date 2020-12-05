import React from 'react'
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

const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
        fontWeight: theme.typography.fontWeightBold,
    },
    table: {
      minWidth: 650,
    },
    paper: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(4),
        display: 'flex',
        alignItems: 'center',
    },
}));

export default function AnimeView(props){
    const classes = useStyles();
    const animeList = props.anime;
    let animeRows = <div/>

    if(animeList.length > 0){
        animeRows = animeList.map((anime) =>
            <TableRow key={anime.id}>
                <TableCell><a href={`/anime/${anime.id}`}>{anime.title}</a></TableCell>
                <TableCell>{anime.status}</TableCell>
                <TableCell>{anime.episodeCount}</TableCell>
            </TableRow>
        );
    }
    

    return (
        <Container component="main" maxWidth="lg">
            <Typography component="h1" variant="h4" className={classes.title}>Anime</Typography>
            <TableContainer component={Paper} className={classes.paper}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Episodes</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {animeRows}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}