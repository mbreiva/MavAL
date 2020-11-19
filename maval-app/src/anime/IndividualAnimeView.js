import React from 'react'

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
            </div>
        );
    }

    return (
        <div>
            {animeInfo}
        </div>
    );
}