import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import IconButton from '@material-ui/core/IconButton'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'


const useStyles = makeStyles((theme) => ({
    tableCell: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },  
}));

export default function MediaRow(props) {
    const classes = useStyles();
    const media = props.media;

    return (
        <TableRow>
            <TableCell>
                <a href={media.mediaTypeId === 1 
                        ? `/anime/${media.id}` 
                        : `/manga/${media.id}`} 
                style={{ color:'black', textDecoration: 'none' }}>
                    {media.title}
                </a>
            </TableCell>
            <TableCell>
                {media.status}
            </TableCell>
            <TableCell>
                <div className={classes.tableCell}>
                    {media.mediaTypeId === 1 ? media.episodeCount : media.chapterCount}
                </div>
            </TableCell>
        </TableRow>
    )
}
