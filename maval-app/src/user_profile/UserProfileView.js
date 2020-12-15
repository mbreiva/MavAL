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
import UserMediaRowScreen from './UserMediaRowScreen'

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
    let animeTable = <div/>;
    let mangaTable = <div/>;
    let favAnimeTable = <div/>;
    let favMangaTable = <div/>;
    let username = <div/>;
    let userInfo;

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const handleSubChange = (newValue) => {
        setSubValue(newValue);
    };

    if(!props.userProfile.user){
        userInfo = <div/>
    }
    else{
        if(props.userProfile.user.username) {
            username = (
                <Typography component="h1" variant="h4" className={classes.title}>
                    {props.userProfile.user.username}
                </Typography>
            );
        }
        if(props.userProfile.userAnime.length > 0) {
            animeTable = (
                <UserMediaTable 
                    title={"My Anime"} 
                    user={props.userProfile.user} 
                    userMedia={props.userProfile.userAnime} 
                    mediaType={1}
                />
            );
        }
        if(props.userProfile.userManga.length > 0) {
            mangaTable = (
                <UserMediaTable
                    title={"My Manga"}
                    user={props.userProfile.user}
                    userMedia={props.userProfile.userManga}
                    mediaType={2}
                />
            );
        }
        if(props.userProfile.favAnime.length > 0) {
            favAnimeTable = (
                <UserMediaTable 
                    title={"My Favourite Anime"} 
                    user={props.userProfile.user} 
                    userMedia={props.userProfile.favAnime} 
                    mediaType={1}
                />
            );
            
        }
        if(props.userProfile.favManga.length > 0) {
            favMangaTable = (
                <UserMediaTable
                    title={"My Manga"}
                    user={props.userProfile.user}
                    userMedia={props.userProfile.favManga}
                    mediaType={2}
                />
            );
        }
        
        let favourites =(
            <Tabs
                value={subValue}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleSubChange}
            >
                <Tab label="Anime" />
                <Tab label="Manga" />
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
                    {animeTable}
                </TabPanel>
                <TabPanel value={value} index={2}>
                    {mangaTable}
                </TabPanel>
                <TabPanel value={value} index={3}>
                    {favourites}
                    <TabPanel value={subValue} index={0}>
                        {favAnimeTable}
                    </TabPanel>
                    <TabPanel value={subValue} index={1}>
                        {favMangaTable}
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
                    <Tab label="Favourites" />
                    <Tab label="Currently Watching" />
                    <Tab label="Completed" />
                    <Tab label="On Hold" />
                    <Tab label="Dropped" />
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