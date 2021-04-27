import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import IconButton from '@material-ui/core/IconButton'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'


const useStyles = makeStyles((theme) => ({
    tableCell: {
        display: "flex",
        justifyContent: "center",
    },  
    tableCellSelect: {
        display: "flex",
        justifyContent: "center",
        width: "50px",
    },  
    tableCellStatusSelect: {
        display: "flex",
        justifyContent: "center",
        width: "120px",
    },  
    tableRow: {
        display: "flex",
        flexFlow: "row nowrap",
    }
}));

export default function UserMediaRow(props) {
    const classes = useStyles();
    const {
        userMedia,
        updateProgress,
        updateRating,
        updateFavourite,
        updateProgressType,
    } = props;
    
    // For anime only
    // TODO: Do for manga and other media as well
    var animeProgressOptions = [];
    var mangaProgressOptions = [];

    for(let i = 0; i <= userMedia.media.episodeCount; i++) {
        animeProgressOptions.push(<MenuItem key={i} value={i}>{i}</MenuItem>)
    }

    for(let i = 0; i <= userMedia.media.chapterCount; i++) {
        mangaProgressOptions.push(<MenuItem key={i} value={i}>{i}</MenuItem>)
    }

    return (
        <TableRow>
            <TableCell style={{paddingLeft: "30px"}}>
                <Button><a href={`/anime/${userMedia.media.id}`} style={{ color:'black', textDecoration: 'none' }}>
                    {userMedia.media.title}
                </a></Button>
            </TableCell>
            <TableCell>
                {userMedia.media.status}
            </TableCell>
            <TableCell>
                <div>
                    {userMedia.media.mediaTypeId === 1
                        ? userMedia.media.episodeCount
                        : userMedia.media.chapterCount
                    }
                </div>
            </TableCell>
            <TableCell>
                <Select
                    value={userMedia.progress}
                    onChange={(event) => { updateProgress(userMedia.id, event.target.value) }}
                    displayEmpty
                    className={classes.tableCellSelect}
                >
                    {userMedia.media.mediaTypeId === 1
                        ? animeProgressOptions
                        : mangaProgressOptions
                    }
                </Select>
            </TableCell>
            <TableCell>
                <Select
                    value={userMedia.rating}
                    onChange={(event) => { updateRating(userMedia.id, event.target.value) }}
                    displayEmpty
                    className={classes.tableCellSelect}
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
                    value={userMedia.progressType}
                    onChange={(event) => { updateProgressType(userMedia.id, event.target.value) }}
                    displayEmpty
                    className={classes.tableCellStatusSelect}
                >
                    <MenuItem value={""}>-</MenuItem>
                    <MenuItem value={"Currently Watching"}>Watching</MenuItem>
                    <MenuItem value={"Completed"}>Completed</MenuItem>
                    <MenuItem value={"Dropped"}>Dropped</MenuItem>
                    <MenuItem value={"On Hold"}>On Hold</MenuItem>
                    <MenuItem value={"Saved for Later"}>Saved</MenuItem>
                </Select>
            </TableCell>
            <TableCell style={{paddingRight: "30px"}}>
                <div>
                    <IconButton
                        onClick={() => {updateFavourite(userMedia.id, !userMedia.favourite);}}
                    >
                        {userMedia.favourite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </IconButton>
                </div>
            </TableCell>
        </TableRow>
    )
}
