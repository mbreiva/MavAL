import React from 'react'

export default function UserProfilePage(props){
    let favourites;
    let favRows;
    let favTable;
    let username;

    if(props.user == null) {
        username = <div/>;
    }
    else if(props.user.favouriteMedia == null){
        username = props.user.username;
        favTable = <div/>;
    }
    else {
        username = props.user.username;
        favourites = props.user.favouriteMedia;

        favRows = favourites.map((media) =>
            <tr key={media.id}>
                <td><a href={`/anime/${media.id}`}>{media.title}</a></td>
                <td>{media.status}</td>
                <td>{media.episodeCount}</td>
            </tr>
        );

        favTable = (
            <div>
                <h2>Favourites</h2>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Status</td>
                        <td>Episodes</td>
                    </tr>
                </thead>
                <tbody>
                    {favRows}
                </tbody>
            </div>
        );
    } 

    let userInfo = (
        <div>
            <h1>{username}</h1>
            {favTable}
        </div>
    );

    return (
        <div>
            {userInfo}
        </div>
    );

}