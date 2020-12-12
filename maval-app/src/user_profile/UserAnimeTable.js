import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

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
    },
    tableSection: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
    },
}));

export default function UserAnimeTable(props) {
    const classes = useStyles();

    return (
        <div>
            <Typography variant="h5">{props.title}</Typography>
            <TableContainer component={Paper} className={classes.paper}>
                <Table>
                    <TableHead >
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
                            <TableCell className={classes.tableHeadCell}>
                                My Episode
                            </TableCell>
                            <TableCell className={classes.tableHeadCell}>
                                My Rating
                            </TableCell>
                            <TableCell className={classes.tableHeadCell}>
                                Favourite
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.rows}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
