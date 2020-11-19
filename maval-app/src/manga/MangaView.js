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

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
});

export default function MangaPage(props){
    const classes = useStyles();
    const mangaList = props.manga;
    const mangaRows = mangaList.map((manga) =>
        <tr key={manga.id}>
            <td><a href={`/manga/${manga.id}`}>{manga.title}</a></td>
            <td>{manga.status}</td>
            <td>{manga.chapterCount}</td>
        </tr>
    );

    return (
        <div>
            <Container component="main" maxWidth="lg">
                <Typography component="h1" variant="h4">Manga</Typography>
                <TableContainer component={Paper}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Title</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Chapters</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {mangaRows}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </div>
    )
}