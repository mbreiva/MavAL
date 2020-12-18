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
import UserMediaRow from './UserMediaRow'

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
        alignItems: 'center',
    },
    tableHeadCell: {
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
}));

export default function UserMediaTable(props) {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    let rows = <div/>
    let userMedia = props.userMedia;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    if(userMedia.length > 0) {
        rows = props.userMedia.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((userMedium) =>
            <UserMediaRow
                key={userMedium.id} 
                userMedia={userMedium} 
                updateProgress={props.updateProgress}
                updateRating={props.updateRating}
                updateProgressType={props.updateProgressType}
                updateFavourite={props.updateFavourite}
            />
        );
    }

    let episodeOrChapter;
    let myEpisodeOrChapter;
    let watchOrReadStatus;

    if(props.mediaType === 1) {
        episodeOrChapter = "Episode";
        myEpisodeOrChapter = "My Episode";
        watchOrReadStatus = "Watch Status";
    }
    else if(props.mediaType === 2) {
        episodeOrChapter = "Chapter";
        myEpisodeOrChapter = "My Chapter";
        watchOrReadStatus = "Read Status";
    }

    return (
        <div>
            <Typography variant="h5">{props.title}</Typography>
            <TableContainer component={Paper} className={classes.paper}>
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
                            <TableCell>
                                <div className={classes.tableHeadCell}>
                                    {myEpisodeOrChapter}
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className={classes.tableHeadCell}>My Rating</div>
                            </TableCell>
                            <TableCell>
                                <div className={classes.tableHeadCell}>
                                    {watchOrReadStatus}
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className={classes.tableHeadCell}>Favourite</div>
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
                    count={props.userMedia ? props.userMedia.length : 0}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
        </div>
    );
}
