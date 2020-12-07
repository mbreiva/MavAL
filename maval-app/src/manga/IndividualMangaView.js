import React from 'react'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) =>({
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
    button: {
        marginTop: theme.spacing(2),
    }
}));

export default function IndividualMangaView(props) {
    let mangaInfo;
    const classes = useStyles();

    if(props.manga == null) {
        mangaInfo = <div/>
    }
    else {
        mangaInfo = (
            <div>
                <Typography component="h1" variant="h4" className={classes.title}>
                    {props.manga.title}
                </Typography>
                <p>Status: {props.manga.status}</p>
                <p>Release Date: {props.manga.releaseDate}</p>
                <p>Chapters: {props.manga.chapterCount}</p>
                <Button 
                    type="submit"
                    fullWidth
                    variant="contained" 
                    color="primary"
                    className={classes.button}
                    onClick={props.addUserMedia}
                >
                    Add to my list
                </Button>
                <Button 
                    type="submit"
                    fullWidth
                    variant="contained" 
                    color="primary"
                    className={classes.button}
                    onClick={props.addMediaToFavourites}
                >
                    Favourite
                </Button>
            </div>
        );
    }

    return (
        <div>
            {mangaInfo}
        </div>
    );
}