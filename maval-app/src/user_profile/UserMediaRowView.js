import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import FavouriteMediaButton from '../shared_components/FavouriteMediaButton'
import EditIcon from '@material-ui/icons/Edit'
import IconButton from '@material-ui/core/IconButton'

export default function UserMediaRowView() {
    return (
        <TableRow key={userMedia.id}>
            <TableCell>
                <a href={`/anime/${userMedia.media.id}`} style={{ color:'black', textDecoration: 'none' }}>
                    {userMedia.media.title}
                </a>
            </TableCell>
            <TableCell>{userMedia.media.status}</TableCell>
            <TableCell>{userMedia.media.episodeCount}</TableCell>
            <TableCell>
                <div className={classes.tableCell}>
                    {(userMedia.progress === 0) ? "-" : userMedia.progress}
                    <IconButton><EditIcon fontSize="small" /></IconButton>
                </div>
            </TableCell>
            <TableCell>
                <div className={classes.tableCell}>
                    {(userMedia.rating === 0) ? "-" : userMedia.rating}
                    <IconButton><EditIcon fontSize="small" /></IconButton>
                </div>
            </TableCell>
            <TableCell>
                <FavouriteMediaButton 
                    favourite={userMedia.favourite}
                    mediaId={userMedia.media.id}
                    handleFavouriteChange={props.handleFavouriteChange} 
                />
            </TableCell>
            <TableCell>
                <div className={classes.tableCell}>
                    {userMedia.progressType ? userMedia.progressType : "-"}
                    <IconButton><EditIcon fontSize="small" /></IconButton>
                </div>
            </TableCell>
        </TableRow>
    )
}
