import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import NavBar from '../shared_components/NavBar'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
});

export default function AnimeView(props){
    const classes = useStyles();
    const animeList = props.anime;
    const animeRows = animeList.map((anime) =>
        <tr key={anime.id}>
            <td>{anime.title}</td>
            <td>{anime.status}</td>
            <td>{anime.episodeCount}</td>
        </tr>
    );

    return (
        <div>
            <NavBar />
            <Container component="main" maxWidth="lg">
                <Typography component="h1" variant="h4">Anime</Typography>
                <TableContainer component={Paper}>
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
        </div>
    )
}