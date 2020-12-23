import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import TabPanel from '../shared_components/TabPanel'
import UserMediaTable from './UserMediaTable'

const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
        fontWeight: theme.typography.fontWeightBold,
    },
    paper: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(4),
        display: 'flex',
        alignItems: 'center',
    },
    tableHeadCell: {
        fontWeight: "bold",
    },
    tableSection: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
    },
}));

export default function UserProfileView(props){
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [subValue, setSubValue] = useState(0);

    let user = props.user;
    let userMedia = props.userMedia;
    let userInfo;
    let username = <div/>;

    let allAnime = userMedia.filter(userMedium => userMedium.mediaType === 1);
    let allManga = userMedia.filter(userMedium => userMedium.mediaType === 2);
    let favAnime = allAnime.filter(userMedium => userMedium.favourite === true);
    let favManga = allManga.filter(userMedium => userMedium.favourite === true);
    let currentlyWatchingAnime = allAnime.filter(userMedium => userMedium.progressType === "Currently Watching");
    let currentlyReadingManga = allManga.filter(userMedium => userMedium.progressType === "Currently Reading");
    let completedAnime = allAnime.filter(userMedium => userMedium.progressType === "Completed");
    let completedManga = allManga.filter(userMedium => userMedium.progressType === "Completed");
    let onHoldAnime = allAnime.filter(userMedium => userMedium.progressType === "On Hold");
    let onHoldManga = allManga.filter(userMedium => userMedium.progressType === "On Hold");
    let droppedAnime = allAnime.filter(userMedium => userMedium.progressType === "Dropped");
    let droppedManga = allManga.filter(userMedium => userMedium.progressType === "Dropped");
    let savedAnime = allAnime.filter(userMedium => userMedium.progressType === "Saved for Later");
    let savedManga = allManga.filter(userMedium => userMedium.progressType === "Saved for Later");


    let animeTable = <div/>;
    let mangaTable = <div/>;
    let favAnimeTable = <div/>;
    let favMangaTable = <div/>;
    let currentlyWatchingAnimeTable = <div/>;
    let currentlyReadingMangaTable = <div/>;
    let completedAnimeTable = <div/>;
    let completedMangaTable = <div/>;
    let onHoldAnimeTable = <div/>;
    let onHoldMangaTable = <div/>;
    let droppedAnimeTable = <div/>;
    let droppedMangaTable = <div/>;
    let savedAnimeTable = <div/>;
    let savedMangaTable = <div/>;

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleSubChange = (event, newValue) => {
        setSubValue(newValue);
    };

    if(!user){
        userInfo = <div/>
    }
    else{
        if(user.username) {
            username = (
                <Typography component="h1" variant="h4" className={classes.title}>
                    {user.username}
                </Typography>
            );
        }
        if(allAnime.length > 0) {
            animeTable = (
                <UserMediaTable 
                    title={"My Anime"} 
                    userMedia={allAnime} 
                    mediaType={1}
                    updateProgress={props.updateProgress}
                    updateRating={props.updateRating}
                    updateProgressType={props.updateProgressType}
                    updateFavourite={props.updateFavourite}
                />
            );
        }
        if(allManga.length > 0) {
            mangaTable = (
                <UserMediaTable
                    title={"My Manga"}
                    userMedia={allManga}
                    mediaType={2}
                    updateProgress={props.updateProgress}
                    updateRating={props.updateRating}
                    updateProgressType={props.updateProgressType}
                    updateFavourite={props.updateFavourite}
                />
            );
        }
        if(favAnime.length > 0) {
            favAnimeTable = (
                <UserMediaTable 
                    title={"My Favourite Anime"} 
                    userMedia={favAnime} 
                    mediaType={1}
                    updateProgress={props.updateProgress}
                    updateRating={props.updateRating}
                    updateProgressType={props.updateProgressType}
                    updateFavourite={props.updateFavourite}
                />
            );
            
        }
        if(favManga.length > 0) {
            favMangaTable = (
                <UserMediaTable
                    title={"My Manga"}
                    userMedia={favManga}
                    mediaType={2}
                    updateProgress={props.updateProgress}
                    updateRating={props.updateRating}
                    updateProgressType={props.updateProgressType}
                    updateFavourite={props.updateFavourite}
                />
            );
        }

        if(currentlyWatchingAnime.length > 0) {
            currentlyWatchingAnimeTable = (
                <UserMediaTable
                    title={"Currently Watching"}
                    userMedia={currentlyWatchingAnime}
                    mediaType={1}
                    updateProgress={props.updateProgress}
                    updateRating={props.updateRating}
                    updateProgressType={props.updateProgressType}
                    updateFavourite={props.updateFavourite}
                />
            );
        }

        if(currentlyReadingManga.length > 0) {
            currentlyReadingMangaTable = (
                <UserMediaTable
                    title={"Currently Reading"}
                    userMedia={currentlyReadingManga}
                    mediaType={2}
                    updateProgress={props.updateProgress}
                    updateRating={props.updateRating}
                    updateProgressType={props.updateProgressType}
                    updateFavourite={props.updateFavourite}
                />
            );
        }

        if(completedAnime.length > 0) {
            completedAnimeTable = (
                <UserMediaTable
                    title={"Completed Anime"}
                    userMedia={completedAnime}
                    mediaType={1}
                    updateProgress={props.updateProgress}
                    updateRating={props.updateRating}
                    updateProgressType={props.updateProgressType}
                    updateFavourite={props.updateFavourite}
                />
            );
        }

        if(completedManga.length > 0) {
            completedMangaTable = (
                <UserMediaTable
                    title={"Completed Manga"}
                    userMedia={completedManga}
                    mediaType={2}
                    updateProgress={props.updateProgress}
                    updateRating={props.updateRating}
                    updateProgressType={props.updateProgressType}
                    updateFavourite={props.updateFavourite}
                />
            );
        }

        if(onHoldAnime.length > 0) {
            onHoldAnimeTable = (
                <UserMediaTable
                    title={"On Hold Anime"}
                    userMedia={onHoldAnime}
                    mediaType={1}
                    updateProgress={props.updateProgress}
                    updateRating={props.updateRating}
                    updateProgressType={props.updateProgressType}
                    updateFavourite={props.updateFavourite}
                />
            );
        }

        if(onHoldManga.length > 0) {
            onHoldMangaTable = (
                <UserMediaTable
                    title={"On Hold Manga"}
                    userMedia={onHoldManga}
                    mediaType={2}
                    updateProgress={props.updateProgress}
                    updateRating={props.updateRating}
                    updateProgressType={props.updateProgressType}
                    updateFavourite={props.updateFavourite}
                />
            );
        }

        if(droppedAnime.length > 0) {
            droppedAnimeTable = (
                <UserMediaTable
                    title={"Dropped Anime"}
                    userMedia={droppedAnime}
                    mediaType={1}
                    updateProgress={props.updateProgress}
                    updateRating={props.updateRating}
                    updateProgressType={props.updateProgressType}
                    updateFavourite={props.updateFavourite}
                />
            );
        }

        if(droppedManga.length > 0) {
            droppedMangaTable = (
                <UserMediaTable
                    title={"Dropped Manga"}
                    userMedia={droppedManga}
                    mediaType={2}
                    updateProgress={props.updateProgress}
                    updateRating={props.updateRating}
                    updateProgressType={props.updateProgressType}
                    updateFavourite={props.updateFavourite}
                />
            );
        }

        if(savedAnime.length > 0) {
            savedAnimeTable = (
                <UserMediaTable
                    title={"Saved Anime"}
                    userMedia={savedAnime}
                    mediaType={1}
                    updateProgress={props.updateProgress}
                    updateRating={props.updateRating}
                    updateProgressType={props.updateProgressType}
                    updateFavourite={props.updateFavourite}
                />
            );
        }

        if(savedManga.length > 0) {
            savedMangaTable = (
                <UserMediaTable
                    title={"Saved Manga"}
                    userMedia={savedManga}
                    mediaType={2}
                    updateProgress={props.updateProgress}
                    updateRating={props.updateRating}
                    updateProgressType={props.updateProgressType}
                    updateFavourite={props.updateFavourite}
                />
            );
        }
        
        let animeTabs =(
            <Tabs
                value={subValue}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleSubChange}
            >
                <Tab label="All" />
                <Tab label="Currently Watching" />
                <Tab label="Completed" />
                <Tab label="Saved for Lated" />
                <Tab label="On Hold" />
                <Tab label="Dropped" />
            </Tabs>
        );

        let mangaTabs =(
            <Tabs
                value={subValue}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleSubChange}
            >
                <Tab label="All" />
                <Tab label="Currently Reading" />
                <Tab label="Completed" />
                <Tab label="Saved for Lated" />
                <Tab label="On Hold" />
                <Tab label="Dropped" />
            </Tabs>
        );

        userInfo = (
            <div>
                <TabPanel value={value} index={0}>
                    {animeTable}
                    {mangaTable}
                    {favAnimeTable}
                    {favMangaTable}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    {animeTabs}
                    <TabPanel value={subValue} index={0}>
                        {animeTable}
                    </TabPanel>
                    <TabPanel value={subValue} index={1}>
                        {currentlyWatchingAnimeTable}
                    </TabPanel>
                    <TabPanel value={subValue} index={2}>
                        {completedAnimeTable}
                    </TabPanel>
                    <TabPanel value={subValue} index={3}>
                        {savedAnimeTable}
                    </TabPanel>
                    <TabPanel value={subValue} index={4}>
                        {onHoldAnimeTable}
                    </TabPanel>
                    <TabPanel value={subValue} index={5}>
                        {droppedAnimeTable}
                    </TabPanel>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    {mangaTabs}
                    <TabPanel value={subValue} index={0}>
                        {mangaTable}
                    </TabPanel>
                    <TabPanel value={subValue} index={1}>
                        {currentlyReadingMangaTable}
                    </TabPanel>
                    <TabPanel value={subValue} index={2}>
                        {completedMangaTable}
                    </TabPanel>
                    <TabPanel value={subValue} index={3}>
                        {savedMangaTable}
                    </TabPanel>
                    <TabPanel value={subValue} index={4}>
                        {onHoldMangaTable}
                    </TabPanel>
                    <TabPanel value={subValue} index={5}>
                        {droppedMangaTable}
                    </TabPanel>
                </TabPanel>
            </div>
        );
    }

    let profileTabs =(
        <div>
            <Paper>
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                >
                    <Tab label="Home" />
                    <Tab label="Anime" />
                    <Tab label="Manga" />
                </Tabs>
            </Paper>
        </div>
    );

    return (
        <Container component="main" maxWidth="xl">
            <Grid container>
                <Grid item xs={2} style={{paddingLeft: 20}}>
                    {username}
                </Grid>
                <Grid item xs={10} className={classes.tableSection}>
                    {profileTabs}
                    {userInfo}
                </Grid>
            </Grid>
        </Container>
    );

}