import React, { useState, useEffect } from 'react'
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

export default function IndividualAnimePage(props) {
    let animeInfo;
    const classes = useStyles();

    let animeId = props.match.params.animeId;
    const [anime, setAnime] = useState(null);
    // TODO: Check if localstorage updates
    const [userId, setUserId] = useState(localStorage.getItem("user_id"));

    useEffect(() => {
        let url = `http://localhost:8080/api/get_anime_by_id?id=${animeId}`;

        fetch(url, {
            method: "GET",
        })
            .then(response =>
                response.json()
            )
            .then(result => {
                setAnime(result);
                console.log("Success:", result);
            })
            .catch(error => {
                console.error("Error", error);
            });
    }, []);

    const addUserMedia = () => {
        let url = `http://localhost:8080/api/add_user_media?user_id=${userId}&media_id=${animeId}`;

        fetch(url, {
            method: "GET",
        })
            .then(response =>
                response.json()
            )
            .then(result => {
                console.log("Success:", result);
            })
            .catch(error => {
                console.error("Error", error);
            });
    };

    const addMediaToFavourites = () => {
        let url = `http://localhost:8080/api/change_favourite_status?user_id=${userId}&media_id=${animeId}&new_favourite_status=true`;

        fetch(url, {
            method: "GET",
        })
            .then(response =>
                response.json()
            )
            .then(result => {
                console.log("Success:", result);
            })
            .catch(error => {
                console.error("Error", error);
            });
    };


    if(anime === null) {
        animeInfo = <div/>
    }
    else {
        animeInfo = (
            <div>
                <Typography component="h1" variant="h4" className={classes.title}>
                    {anime.title}
                </Typography>
                <p>Status: {anime.status}</p>
                <p>Release Date: {anime.releaseDate}</p>
                <p>Episodes: {anime.episodeCount}</p>
                <Button 
                    type="submit"
                    fullWidth
                    variant="contained" 
                    color="primary"
                    className={classes.button}
                    onClick={addUserMedia}
                >
                    Add to my list
                </Button>
                <Button 
                    type="submit"
                    fullWidth
                    variant="contained" 
                    color="primary"
                    className={classes.button}
                    onClick={addMediaToFavourites}
                >
                    Favourite
                </Button>
            </div>
        );
    }

    return (
        <Container component="main" maxWidth="lg">
            {animeInfo}
        </Container>
    );
}