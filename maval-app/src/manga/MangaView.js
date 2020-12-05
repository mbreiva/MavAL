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

export default function MangaPage(props){
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const mangaList = props.manga;
    let mangaRows = <div/>
    
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    if(mangaList.length > 0) {
        mangaRows = mangaList.splice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((manga) =>
            <TableRow key={manga.id}>
                <TableCell><a href={`/manga/${manga.id}`} style={{ color:'black', textDecoration: 'none' }}>{manga.title}</a></TableCell>
                <TableCell>{manga.status}</TableCell>
                <TableCell>{manga.chapterCount}</TableCell>
            </TableRow>
        );
    }


    return (
        <div>
            <Container component="main" maxWidth="lg">
                <Typography component="h1" variant="h4" className={classes.title}>Manga</Typography>
                <TableContainer component={Paper} className={classes.paper}>
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
            <TablePagination
                rowsPerPageOptions={[10, 25, 50, 100]}
                component="div"
                count={mangaList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
            </Container>
        </div>
    )
}