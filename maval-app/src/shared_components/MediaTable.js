import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TablePagination from '@material-ui/core/TablePagination'
import Paper from '@material-ui/core/Paper'
import MediaRow from './MediaRow'

const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
        fontWeight: theme.typography.fontWeightBold,
    },
    paper: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(4),
        display: 'flex',
        flexFlow: "column nowrap",
        borderRadius: "20px",
    },
    tableHeadCell: {
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
}));

export default function MediaTable(props) {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    let rows = <div/>
    let media = props.media;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    if(media.length > 0) {
        rows = props.media.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((medium) =>
            <MediaRow
                key={medium.id} 
                media={medium}
            />
        );
    }

    let episodeOrChapter;

    if(props.mediaType === 1) {
        episodeOrChapter = "Episode";
    }
    else if(props.mediaType === 2) {
        episodeOrChapter = "Chapter";
    }

    return (
        <Paper className={classes.paper} elevation={2}>
            <Typography variant="h5">{props.title}</Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{fontWeight:"bold"}}>
                                Title
                            </TableCell>
                            <TableCell style={{fontWeight:"bold"}}>
                                Status
                            </TableCell>
                            <TableCell>
                                <div className={classes.tableHeadCell}>
                                    {episodeOrChapter}
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25, 50, 100]}
                component="div"
                count={media.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
