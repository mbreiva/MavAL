import React from 'react'

export default function IndividualMangaView(props) {
    let mangaInfo;

    if(props.manga == null) {
        mangaInfo = <div/>
    }
    else {
        mangaInfo = (
            <div>
                <h1>{props.manga.title}</h1>
                <p>Status: {props.manga.status}</p>
                <p>Release Date: {props.manga.releaseDate}</p>
                <p>Chapters: {props.manga.chapterCount}</p>
            </div>
        );
    }

    return (
        <div>
            {mangaInfo}
        </div>
    );
}