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

    if(!props.userProfile){
        userInfo = <div/>
    }
    // else{
    //     if(props.userProfile.user.username) {
    //         username = props.userProfile.user.username;
    //     }
    //     if(props.userProfile.userAnime) {
    //         animeTableRows = props.userProfile.userAnime.map((userAnime) =>
    //             <tr key={userAnime.id}>
    //                 <td>{userAnime.media.title}</td>
    //                 <td>{userAnime.media.status}</td>
    //                 <td>{userAnime.media.episodeCount}</td>
    //                 <td>{userAnime.media}</td>
    //                 <td>{userAnime.media}</td>
    //                 <td>{userAnime.media.toString()}</td>
    //             </tr>
    //         );

    //         animeTable = (
    //             <div>
    //                 <h2>My Anime</h2>
    //                 <table>
    //                     <thead>
    //                         <tr>
    //                             <td>Title</td>
    //                             <td>Status</td>
    //                             <td>Episodes</td>
    //                             <td>My Episode</td>
    //                             <td>My Rating</td>
    //                             <td>Favourite</td>
    //                         </tr>
    //                     </thead>
    //                     <tbody>
    //                         {animeTableRows}
    //                     </tbody>
    //                 </table>
    //             </div>
    //         );
    //     }
    //     if(props.userProfile.userManga) {
    //         //TODO: fill table
    //         mangaTable = <div/>
    //     }
    //     if(props.userProfile.favAnime) {
    //         favAnimeTableRows = props.userProfile.favAnime.map((userAnime) =>
    //             <tr key={userAnime.id}>
    //                 <td>{userAnime.media.title}</td>
    //                 <td>{userAnime.media.status}</td>
    //                 <td>{userAnime.media.episodeCount}</td>
    //                 <td>{userAnime.media}</td>
    //                 <td>{userAnime.media}</td>
    //                 <td>{userAnime.media.toString()}</td>
    //             </tr>
    //         );

    //         animeTable = (
    //             <div>
    //                 <h2>My Favourite Anime</h2>
    //                 <table>
    //                     <thead>
    //                         <tr>
    //                             <td>Title</td>
    //                             <td>Status</td>
    //                             <td>Episodes</td>
    //                             <td>My Episode</td>
    //                             <td>My Rating</td>
    //                             <td>Favourite</td>
    //                         </tr>
    //                     </thead>
    //                     <tbody>
    //                         {animeTableRows}
    //                     </tbody>
    //                 </table>           
    //             </div>
    //         );
            
    //     }
    //     if(props.userProfile.favManga) {
    //         //TODO: fill table
    //     }
    //     userInfo = (
    //         <div>
    //             <h1>{username}</h1>
    //             {animeTable}
    //             {favAnimeTable}
    //         </div>
    //     );
    // }
    return (
        <div>
            {userInfo}
        </div>
    );

}