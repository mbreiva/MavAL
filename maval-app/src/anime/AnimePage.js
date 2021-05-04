import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import CircularProgress from '@material-ui/core/CircularProgress'
import MediaTable from '../shared_components/MediaTable'

const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
        fontWeight: theme.typography.fontWeightBold,
    },
}));

export default function AnimePage(){
    const classes = useStyles();

    const [anime, setAnime] = useState([]);

    useEffect(() => {
        let url = "http://localhost:8080/api/get_anime";

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

    let animeTable = (
        <div style={{display:"flex", justifyContent: "center"}}>
            <CircularProgress/>
        </div>
    );

    if(anime.length > 0){
        animeTable = <MediaTable media={anime} mediaType={1} />;
    }

    return (
        <Container component="main" maxWidth="lg">
            <Typography component="h1" variant="h4" className={classes.title}>Anime</Typography>
            {animeTable}
        </Container>
    )
}