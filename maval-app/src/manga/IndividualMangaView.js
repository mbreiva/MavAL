import React from 'react'
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

export default function IndividualMangaView(props) {
    let mangaInfo;
    const classes = useStyles();

    if(props.manga == null) {
        mangaInfo = <div/>
    }
    else {
        mangaInfo = (
            <Paper className={classes.paper} elevation={2}>
                <Container className={classes.container}>
                    <Typography component="h1" variant="h4" className={classes.title}>
                        {props.manga.title}
                    </Typography>
                    <img src={props.manga.imageSource} className={classes.img}></img>
                    <p><span style={{fontWeight: "bold"}}>Status:</span> {props.manga.status}</p>
                    <p><span style={{fontWeight: "bold"}}>Release Date:</span> {props.manga.releaseDate}</p>
                    <p><span style={{fontWeight: "bold"}}>Chapters:</span> {props.manga.chapterCount}</p>
                    <Button 
                        type="submit"
                        variant="contained" 
                        color="primary"
                        className={classes.button}
                        onClick={props.addUserMedia}
                    >
                        Add to my list
                    </Button>
                    <Button 
                        type="submit"
                        variant="contained" 
                        color="primary"
                        className={classes.button}
                        onClick={props.addMediaToFavourites}
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