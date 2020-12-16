import React, { useState } from 'react'
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

    let userProfile = props.userProfile;
    let userInfo;
    let username = <div/>;

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

    if(!userProfile.user){
        userInfo = <div/>
    }
    else{
        if(userProfile.user.username) {
            username = (
                <Typography component="h1" variant="h4" className={classes.title}>
                    {userProfile.user.username}
                </Typography>
            );
        }
        if(userProfile.userAnime.length > 0) {
            animeTable = (
                <UserMediaTable 
                    title={"My Anime"} 
                    user={userProfile.user} 
                    userMedia={userProfile.userAnime} 
                    mediaType={1}
                />
            );
        }
        if(userProfile.userManga.length > 0) {
            mangaTable = (
                <UserMediaTable
                    title={"My Manga"}
                    user={userProfile.user}
                    userMedia={userProfile.userManga}
                    mediaType={2}
                />
            );
        }
        if(userProfile.favAnime.length > 0) {
            favAnimeTable = (
                <UserMediaTable 
                    title={"My Favourite Anime"} 
                    user={userProfile.user} 
                    userMedia={userProfile.favAnime} 
                    mediaType={1}
                />
            );
            
        }
        if(userProfile.favManga.length > 0) {
            favMangaTable = (
                <UserMediaTable
                    title={"My Manga"}
                    user={userProfile.user}
                    userMedia={userProfile.favManga}
                    mediaType={2}
                />
            );
        }

        if(userProfile.currentlyWatchingAnime.length > 0) {
            currentlyWatchingAnimeTable = (
                <UserMediaTable
                    title={"Currently Watching"}
                    user={userProfile.user}
                    userMedia={userProfile.currentlyWatchingAnime}
                    mediaType={1}
                />
            );
        }

        if(userProfile.currentlyReadingManga.length > 0) {
            currentlyReadingMangaTable = (
                <UserMediaTable
                    title={"Currently Reading"}
                    user={userProfile.user}
                    userMedia={userProfile.currentlyReadingManga}
                    mediaType={2}
                />
            );
        }

        if(userProfile.completedAnime.length > 0) {
            completedAnimeTable = (
                <UserMediaTable
                    title={"Completed Anime"}
                    user={userProfile.user}
                    userMedia={userProfile.completedAnime}
                    mediaType={1}
                />
            );
        }

        if(userProfile.completedManga.length > 0) {
            completedMangaTable = (
                <UserMediaTable
                    title={"Completed Manga"}
                    user={userProfile.user}
                    userMedia={userProfile.completedManga}
                    mediaType={2}
                />
            );
        }

        if(userProfile.onHoldAnime.length > 0) {
            onHoldAnimeTable = (
                <UserMediaTable
                    title={"On Hold Anime"}
                    user={userProfile.user}
                    userMedia={userProfile.onHoldAnime}
                    mediaType={1}
                />
            );
        }

        if(userProfile.onHoldManga.length > 0) {
            onHoldMangaTable = (
                <UserMediaTable
                    title={"On Hold Manga"}
                    user={userProfile.user}
                    userMedia={userProfile.onHoldManga}
                    mediaType={2}
                />
            );
        }

        if(userProfile.droppedAnime.length > 0) {
            droppedAnimeTable = (
                <UserMediaTable
                    title={"Dropped Anime"}
                    user={userProfile.user}
                    userMedia={userProfile.droppedAnime}
                    mediaType={1}
                />
            );
        }

        if(userProfile.droppedManga.length > 0) {
            droppedMangaTable = (
                <UserMediaTable
                    title={"Dropped Manga"}
                    user={userProfile.user}
                    userMedia={userProfile.droppedManga}
                    mediaType={2}
                />
            );
        }

        if(userProfile.savedAnime.length > 0) {
            savedAnimeTable = (
                <UserMediaTable
                    title={"Saved Anime"}
                    user={userProfile.user}
                    userMedia={userProfile.savedAnime}
                    mediaType={1}
                />
            );
        }

        if(userProfile.savedManga.length > 0) {
            savedMangaTable = (
                <UserMediaTable
                    title={"Saved Manga"}
                    user={userProfile.user}
                    userMedia={userProfile.savedManga}
                    mediaType={2}
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
                <Tab label="Currently Watching" />
                <Tab label="Completed" />
                <Tab label="On Hold" />
                <Tab label="Saved for Lated" />
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
                <Tab label="Currently Reading" />
                <Tab label="Completed" />
                <Tab label="On Hold" />
                <Tab label="Saved for Lated" />
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
                        {currentlyWatchingAnimeTable}
                    </TabPanel>
                    <TabPanel value={subValue} index={1}>
                        {completedAnimeTable}
                    </TabPanel>
                    <TabPanel value={subValue} index={2}>
                        {onHoldAnimeTable}
                    </TabPanel>
                    <TabPanel value={subValue} index={3}>
                        {savedAnimeTable}
                    </TabPanel>
                    <TabPanel value={subValue} index={4}>
                        {droppedAnimeTable}
                    </TabPanel>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    {mangaTabs}
                    <TabPanel value={subValue} index={0}>
                        {currentlyReadingMangaTable}
                    </TabPanel>
                    <TabPanel value={subValue} index={1}>
                        {completedMangaTable}
                    </TabPanel>
                    <TabPanel value={subValue} index={2}>
                        {onHoldMangaTable}
                    </TabPanel>
                    <TabPanel value={subValue} index={3}>
                        {savedMangaTable}
                    </TabPanel>
                    <TabPanel value={subValue} index={4}>
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