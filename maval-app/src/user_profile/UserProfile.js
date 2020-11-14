import React from 'react'
import NavBar from '../shared_components/NavBar'

export default function UserProfilePage(){
    return (
        <div class="m-5">
            <NavBar />
            <h1 id="username" name="username"></h1>
            <h2>Favourite Anime</h2>
            <table id="favAnime" name="favAnime" class="table table-striped">
                <thead>
                <tr>
                    <th scope="col"> Title </th>
                    <th scope="col"> Status </th>
                    <th scope="col"> Episodes </th>
                </tr>
                </thead>
            </table>
            <h2>Favourite Manga</h2>
            <table id="favManga" name="favManga" class="table table-striped">
                <thead>
                <tr>
                    <th scope="col"> Title </th>
                    <th scope="col"> Status </th>
                    <th scope="col"> Chapters </th>
                </tr>
                </thead>
            </table>
        </div>
    )
}