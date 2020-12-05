import React from 'react'

export default function UserProfileView(props){
    let animeTable = <div/>;
    let animeTableRows;
    let mangaTable = <div/>;
    let mangaTableRows;
    let favAnimeTable = <div/>;
    let favAnimeTableRows;
    let favMangaTable = <div/>;
    let favMangaTableRows;
    let username = <div/>;
    let userInfo;

    if(!props.userProfile.user){
        userInfo = <div/>
    }
    else{
        if(props.userProfile.user.username) {
            username = props.userProfile.user.username;
        }
        if(props.userProfile.userAnime.length > 0) {
            animeTableRows = props.userProfile.userAnime.map((userMedia) =>
                <tr key={userMedia.id}>
                    <td>{userMedia.media.title}</td>
                    <td>{userMedia.media.status}</td>
                    <td>{userMedia.media.episodeCount}</td>
                    <td>{userMedia.currentPosition}</td>
                    <td>{userMedia.rating}</td>
                    <td>{userMedia.favourite.toString()}</td>
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
                            {animeTableRows}
                        </tbody>
                    </table>
                </div>
            );
        }
        if(props.userProfile.userManga.length > 0) {
            mangaTableRows = props.userProfile.userManga.map((userMedia) => 
                <tr key={userMedia.id}>
                    <td>{userMedia.media.title}</td>
                    <td>{userMedia.media.status}</td>
                    <td>{userMedia.media.chapterCount}</td>
                    <td>{userMedia.currentPosition}</td>
                    <td>{userMedia.rating}</td>
                    <td>{userMedia.favourite.toString()}</td>
                </tr>
            );
            mangaTable = (
                <div>
                    <h2>My Manga</h2>
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
                            {mangaTableRows}
                        </tbody>
                    </table>
                </div>
            );
        }
        if(props.userProfile.favAnime.length > 0) {
            favAnimeTableRows = props.userProfile.favAnime.map((userMedia) =>
                <tr key={userMedia.id}>
                    <td>{userMedia.media.title}</td>
                    <td>{userMedia.media.status}</td>
                    <td>{userMedia.media.episodeCount}</td>
                    <td>{userMedia.currentPosition}</td>
                    <td>{userMedia.rating}</td>
                    <td>{userMedia.favourite.toString()}</td>
                </tr>
            );

            favAnimeTable = (
                <div>
                    <h2>My Favourite Anime</h2>
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
                            {favAnimeTableRows}
                        </tbody>
                    </table>           
                </div>
            );
            
        }
        if(props.userProfile.favManga.length > 0) {
            favMangaTableRows = props.userProfile.favManga.map((userMedia) => 
                <tr key={userMedia.id}>
                    <td>{userMedia.media.title}</td>
                    <td>{userMedia.media.status}</td>
                    <td>{userMedia.media.chapterCount}</td>
                    <td>{userMedia.currentPosition}</td>
                    <td>{userMedia.rating}</td>
                    <td>{userMedia.favourite.toString()}</td>
                </tr>
            );
            favMangaTable = (
                <div>
                    <h2>My Favourite Manga</h2>
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
                            {favMangaTableRows}
                        </tbody>
                    </table>
                </div>
            );
        }
        userInfo = (
            <div>
                <h1>{username}</h1>
                {animeTable}
                {mangaTable}
                {favAnimeTable}
                {favMangaTable}
            </div>
        );
    }
    return (
        <div>
            {userInfo}
        </div>
    );

}