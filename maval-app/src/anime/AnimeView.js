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
    tableHeadCell: {
        fontWeight: "bold",
    },
}));

export default function AnimeView(props){
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const animeList = props.anime;
    let animeRows = <div/>

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    if(animeList.length > 0){
        animeRows = animeList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((anime) =>
            <TableRow key={anime.id}>
                <TableCell><a href={`/anime/${anime.id}`} style={{ color:'black', textDecoration: 'none' }}>{anime.title}</a></TableCell>
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
                            <TableCell className={classes.tableHeadCell}>
                                Title
                            </TableCell>
                            <TableCell className={classes.tableHeadCell}>
                                Status
                            </TableCell>
                            <TableCell className={classes.tableHeadCell}>
                                Episodes
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {animeRows}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 50, 100]}
                component="div"
                count={animeList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Container>
    )
}