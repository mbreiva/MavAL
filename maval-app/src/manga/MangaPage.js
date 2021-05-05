import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import MediaTable from '../shared_components/MediaTable'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
        fontWeight: theme.typography.fontWeightBold,
    },
    table: {
      minWidth: 650,
    },
}));

export default function MangaPage(props){
    const classes = useStyles();

    const [manga, setManga] = useState([]);

    useEffect(() => {
        let url = "http://localhost:8080/api/get_manga";

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
    }, []);

    let mangaTable = (
        <div style={{display:"flex", justifyContent: "center"}}>
            <CircularProgress/>
        </div>
    );

    if(manga.length > 0) {
        mangaTable = <MediaTable media={manga} mediaType={2}/>;
    }


    return (
        <div>
            <Container component="main" maxWidth="lg">
                <Typography component="h1" variant="h4" className={classes.title}>Manga</Typography>
                {mangaTable}
            </Container>
        </div>
    )
}