import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) =>({
    title: {
        marginBottom: theme.spacing(2),
        fontWeight: theme.typography.fontWeightBold,
    },
    paper: {
        marginLeft: theme.spacing(30),
        marginRight: theme.spacing(30),
        marginTop: theme.spacing(4),
        borderRadius: "20px"
    },
    button: {
        marginTop: theme.spacing(2),
        margin: "10px",
        color: "white",
        backgroundColor: "#50A873"
    },
    img: {
        width: "20%",
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    }
}));

export default function IndividualMangaPage(props) {
    let mangaInfo;
    const classes = useStyles();

    let mangaId = props.match.params.mediaId;
    let userId = localStorage.getItem("user_id");

    const [manga, setManga] = useState(null);

    useEffect(() => {
        let url = `http://localhost:8080/api/get_manga_by_id?id=${mangaId}`;

        fetch(url, {
            method: "GET",
        })
            .then(response =>
                response.json()
            )
            .then(result => {
                setManga(result);
                console.log("Success:", result);
            })
            .catch(error => {
                console.error("Error", error);
            });
    });

    const addUserMedia = () => {
        let url = `http://localhost:8080/api/add_user_media?user_id=${userId}&media_id=${mangaId}`;

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
        let url = `http://localhost:8080/api/change_favourite_status?user_id=${userId}&media_id=${mangaId}&new_favourite_status=true`;

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

    if(manga === null) {
        mangaInfo = <div/>
    }
    else {
        mangaInfo = (
            <Paper className={classes.paper} elevation={2}>
                <Container className={classes.container}>
                    <Typography component="h1" variant="h4" className={classes.title}>
                        {manga.title}
                    </Typography>
                    <img src={manga.imageSource} className={classes.img}></img>
                    <p><span style={{fontWeight: "bold"}}>Status:</span> {manga.status}</p>
                    <p><span style={{fontWeight: "bold"}}>Release Date:</span> {manga.releaseDate}</p>
                    <p><span style={{fontWeight: "bold"}}>Chapters:</span> {manga.chapterCount}</p>
                    <Button 
                        type="submit"
                        variant="contained" 
                        color="primary"
                        className={classes.button}
                        onClick={addUserMedia}
                    >
                        Add to my list
                    </Button>
                    <Button 
                        type="submit"
                        variant="contained" 
                        color="primary"
                        className={classes.button}
                        onClick={addMediaToFavourites}
                    >
                        Favourite
                    </Button>
                </Container>
            </Paper>
        );
    }

    return (
        <div>
            {mangaInfo}
        </div>
    );
}