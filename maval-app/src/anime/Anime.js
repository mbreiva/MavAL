import React from 'react'

export default function AnimePage(){
    return (
        <div class="m-5">
            <h1>Anime</h1>
            <form id="animeSearch" class="form-inline my-2 my-lg-0">
                <input id="animeSearchInput" class="form-control mr-sm-2" type="search" placeholder="Search anime" aria-label="Search" />
                <button id="animeSearchButton" class="btn btn-outline-success my-2 my-sm-0" type="button" >Search</button>
            </form>
            <table id="animeTable" name="animeTable" class="table table-striped">
                <thead>
                <tr>
                    <th scope="col"> Title </th>
                    <th scope="col"> Status </th>
                    <th scope="col"> Episodes </th>
                </tr>
                </thead>
            </table>
        </div>
    )
}