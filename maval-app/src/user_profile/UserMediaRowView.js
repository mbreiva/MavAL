import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import FavouriteMediaButton from '../shared_components/FavouriteMediaButton'
import EditIcon from '@material-ui/icons/Edit'
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

export default function UserMediaRowView(props) {
    const classes = useStyles();
    const {
        userMediaId,
        mediaType,
        media,
        userProgress,
        userRating,
        favourite,
        userProgressType,
        handleProgressChange,
        handleRatingChange,
        handleFavouriteChange,
        handleProgressTypeChange,
    } = props;
    
    // For anime only
    // TODO: Do for manga and other media as well
    var animeProgressOptions = [];

    for(let i = 0; i <= media.episodeCount; i++) {
        animeProgressOptions.push(<MenuItem value={i}>{i}</MenuItem>)
    }

    return (
        <TableRow key={userMediaId}>
            <TableCell>
                <a href={`/anime/${media.id}`} style={{ color:'black', textDecoration: 'none' }}>
                    {media.title}
                </a>
            </TableCell>
            <TableCell>
                {media.status}
            </TableCell>
            <TableCell>
                <div className={classes.tableCell}>
                    {media.episodeCount}
                </div>
            </TableCell>
            <TableCell>
                <Select
                    value={userProgress}
                    onChange={handleProgressChange}
                    displayEmpty
                    className={classes.tableCell}
                >
                    {animeProgressOptions}
                </Select>
            </TableCell>
            <TableCell>
                <Select
                    value={userRating}
                    onChange={handleRatingChange}
                    displayEmpty
                    className={classes.tableCell}
                >
                    <MenuItem value={""}>-</MenuItem>
                    <MenuItem value={0}>0</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                </Select>
            </TableCell>
            <TableCell>
                <Select
                    value={userProgressType}
                    onChange={handleProgressTypeChange}
                    displayEmpty
                    className={classes.tableCell}
                >
                    <MenuItem value={""}>-</MenuItem>
                    <MenuItem value={"Currently Watching"}>Currently Watching</MenuItem>
                    <MenuItem value={"Completed"}>Completed</MenuItem>
                    <MenuItem value={"Dropped"}>Dropped</MenuItem>
                    <MenuItem value={"On Hold"}>On Hold</MenuItem>
                    <MenuItem value={"Saved for Later"}>Saved for Later</MenuItem>
                </Select>
            </TableCell>
            <TableCell>
                <div className={classes.tableCell}>
                    <IconButton 
                        onClick={() => {handleFavouriteChange(!props.favourite);}}
                    >
                        {favourite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </IconButton>
                </div>
            </TableCell>
        </TableRow>
    )
}
