import React from 'react'

export default function UserProfileView(props){
    let userMedia;
    let userMediaRows;
    let animeTable;
    let mangaTable;
    let username;

    if(props.user == null) {
        username = <div/>;
    }
    else if(props.user.userMedia == null){
        username = props.user.username;
        userMedia = <div/>;
    }
    else {
        username = props.user.username;
        userMedia = props.user.userMedia;

        userMediaRows = userMedia.map((media) =>
            <tr key={media.id}>
                <td><a href={`/anime/${media.anime.id}`}>{media.anime.title}</a></td>
                <td>{media.anime.status}</td>
                <td>{media.anime.episodeCount}</td>
                <td>{media.episode}</td>
                <td>{media.rating}</td>
                <td>{media.favourite.toString()}</td>
            </tr>
        );

        animeTable = (
            <div>
                <h2>My Anime</h2>
                <table>
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Status</td>
                            <td>Episodes</td>
                            <td>My Episode</td>
                            <td>My Rating</td>
                            <td>Favourite</td>
                        </tr>
                    </thead>
                    <tbody>
                        {userMediaRows}
                    </tbody>
                </table>
            </div>
        );
    } 

    let userInfo = (
        <div>
            <h1>{username}</h1>
            {animeTable}
        </div>
    );

    return (
        <div>
            {userInfo}
        </div>
    );

}