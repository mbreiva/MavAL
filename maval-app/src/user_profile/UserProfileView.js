import React from 'react'

export default function UserProfileView(props){
    let userMedia;
    let userMediaRows;
    let userMediaTable;
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
            </tr>
        );

        userMediaTable = (
            <div>
                <h2>My Anime</h2>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Status</td>
                        <td>Episodes</td>
                    </tr>
                </thead>
                <tbody>
                    {userMediaRows}
                </tbody>
            </div>
        );
    } 

    let userInfo = (
        <div>
            <h1>{username}</h1>
            {userMediaTable}
        </div>
    );

    return (
        <div>
            {userInfo}
        </div>
    );

}