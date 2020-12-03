import React from 'react'
import Button from '@material-ui/core/Button'

export default function IndividualAnimeView(props) {
    let animeInfo;

    if(props.anime == null) {
        animeInfo = <div/>
    }
    else {
        animeInfo = (
            <div>
                <h1>{props.anime.title}</h1>
                <p>Status: {props.anime.status}</p>
                <p>Release Date: {props.anime.releaseDate}</p>
                <p>Episodes: {props.anime.episodeCount}</p>
                <Button 
                        type="submit"
                        fullWidth
                        variant="contained" 
                        color="primary"
                        onClick={props.addUserAnime}
                >
                    Add to my list
                </Button>
            </div>
        );
    }

    return (
        <div>
            {animeInfo}
        </div>
    );
}