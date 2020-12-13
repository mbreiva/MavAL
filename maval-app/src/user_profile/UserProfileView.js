import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import TabPanel from '../shared_components/TabPanel'
import FavouriteMediaButton from '../shared_components/FavouriteMediaButton'
import UserAnimeTable from './UserAnimeTable'

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
    let animeTableRows;
    let mangaTable = <div/>;
    let mangaTableRows;
    let favAnimeTable = <div/>;
    let favAnimeTableRows;
    let favMangaTable = <div/>;
    let favMangaTableRows;
    let username = <div/>;
    let userInfo;

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleSubChange = (event, newValue) => {
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
            animeTableRows = props.userProfile.userAnime.map((userMedia) =>
                <TableRow key={userMedia.id}>
                    <TableCell>
                        <a href={`/anime/${userMedia.media.id}`} style={{ color:'black', textDecoration: 'none' }}>
                            {userMedia.media.title}
                        </a>
                    </TableCell>
                    <TableCell>{userMedia.media.status}</TableCell>
                    <TableCell>{userMedia.media.episodeCount}</TableCell>
                    <TableCell>{(userMedia.currentPosition === 0) ? "-" : userMedia.currentPosition}</TableCell>
                    <TableCell>{(userMedia.rating === 0) ? "-" : userMedia.rating}</TableCell>
                    <TableCell>
                        <FavouriteMediaButton 
                            favourite={userMedia.favourite}
                            mediaId={userMedia.media.id}
                            handleFavouriteChange={props.handleFavouriteChange} 
                        />
                    </TableCell>
                </TableRow>
            );

            animeTable = <UserAnimeTable title={"My Anime"} rows={animeTableRows}/>;
        }
        if(props.userProfile.userManga.length > 0) {
            mangaTableRows = props.userProfile.userManga.map((userMedia) => 
                <TableRow key={userMedia.id}>
                    <TableCell>
                        <a href={`/anime/${userMedia.media.id}`} style={{ color:'black', textDecoration: 'none' }}>
                            {userMedia.media.title}
                        </a>
                    </TableCell>
                    <TableCell>{userMedia.media.status}</TableCell>
                    <TableCell>{userMedia.media.chapterCount}</TableCell>
                    <TableCell>{(userMedia.currentPosition === 0) ? "-" : userMedia.currentPosition}</TableCell>
                    <TableCell>{(userMedia.rating === 0) ? "-" : userMedia.rating}</TableCell>
                    <TableCell>
                        <FavouriteMediaButton 
                            favourite={userMedia.favourite}
                            mediaId={userMedia.media.id}
                            handleFavouriteChange={props.handleFavouriteChange} 
                        />
                    </TableCell>
                </TableRow>
            );
            mangaTable = (
                <div>
                    <Typography variant="h5">My Manga</Typography>
                    <TableContainer component={Paper} className={classes.paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Title</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Chapters</TableCell>
                                    <TableCell>My Chapter</TableCell>
                                    <TableCell>My Rating</TableCell>
                                    <TableCell>Favourite</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {mangaTableRows}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            );
        }
        if(props.userProfile.favAnime.length > 0) {
            favAnimeTableRows = props.userProfile.favAnime.map((userMedia) =>
                <TableRow key={userMedia.id}>
                    <TableCell>
                        <a href={`/anime/${userMedia.media.id}`} style={{ color:'black', textDecoration: 'none' }}>
                            {userMedia.media.title}
                        </a>
                    </TableCell>
                    <TableCell>{userMedia.media.status}</TableCell>
                    <TableCell>{userMedia.media.episodeCount}</TableCell>
                    <TableCell>{(userMedia.currentPosition === 0) ? "-" : userMedia.currentPosition}</TableCell>
                    <TableCell>{(userMedia.rating === 0) ? "-" : userMedia.rating}</TableCell>
                    <TableCell>
                        <FavouriteMediaButton 
                            favourite={userMedia.favourite}
                            mediaId={userMedia.media.id}
                            handleFavouriteChange={props.handleFavouriteChange} 
                        />
                    </TableCell>
                </TableRow>
            );

            favAnimeTable = <UserAnimeTable title={"My Favourite Anime"} rows={favAnimeTableRows} />;
            
        }
        if(props.userProfile.favManga.length > 0) {
            favMangaTableRows = props.userProfile.favManga.map((userMedia) => 
                <TableRow key={userMedia.id}>
                    <TableCell>
                        <a href={`/anime/${userMedia.media.id}`} style={{ color:'black', textDecoration: 'none' }}>
                            {userMedia.media.title}
                        </a>
                    </TableCell>
                    <TableCell>{userMedia.media.status}</TableCell>
                    <TableCell>{userMedia.media.chapterCount}</TableCell>
                    <TableCell>{(userMedia.currentPosition === 0) ? "-" : userMedia.currentPosition}</TableCell>
                    <TableCell>{(userMedia.rating === 0) ? "-" : userMedia.rating}</TableCell>
                    <TableCell>
                        <FavouriteMediaButton 
                            favourite={userMedia.favourite}
                            mediaId={userMedia.media.id}
                            handleFavouriteChange={props.handleFavouriteChange} 
                        />
                    </TableCell>
                </TableRow>
            );
            favMangaTable = (
                <div>
                    <Typography variant="h5">My Favourite Manga</Typography>
                    <TableContainer component={Paper} className={classes.paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Title</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Chapters</TableCell>
                                    <TableCell>My Chapter</TableCell>
                                    <TableCell>My Rating</TableCell>
                                    <TableCell>Favourite</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {favMangaTableRows}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
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
                <Grid item xs={2}>
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