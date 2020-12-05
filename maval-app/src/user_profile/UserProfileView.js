import React from 'react'
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

const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: theme.spacing(2),
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
}));

export default function UserProfileView(props){
    const classes = useStyles();
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
                    <TableCell>{userMedia.currentPosition}</TableCell>
                    <TableCell>{userMedia.rating}</TableCell>
                    <TableCell>{userMedia.favourite.toString()}</TableCell>
                </TableRow>
            );

            animeTable = (
                <div>
                    <Typography variant="h5">My Anime</Typography>
                    <TableContainer component={Paper} className={classes.paper}>
                        <Table>
                            <TableHead >
                                <TableRow>
                                    <TableCell className={classes.tableHeadCell}>
                                        Title
                                    </TableCell>
                                    <TableCell className={classes.tableHeadCell}>
                                        Status
                                    </TableCell>
                                    <TableCell className={classes.tableHeadCell}>
                                        Episodes
                                    </TableCell>
                                    <TableCell className={classes.tableHeadCell}>
                                        My Episode
                                    </TableCell>
                                    <TableCell className={classes.tableHeadCell}>
                                        My Rating
                                    </TableCell>
                                    <TableCell className={classes.tableHeadCell}>
                                        Favourite
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {animeTableRows}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            );
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
                    <TableCell>{userMedia.currentPosition}</TableCell>
                    <TableCell>{userMedia.rating}</TableCell>
                    <TableCell>{userMedia.favourite.toString()}</TableCell>
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
                                    <TableCell>Episodes</TableCell>
                                    <TableCell>My Episode</TableCell>
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
                    <TableCell>{userMedia.currentPosition}</TableCell>
                    <TableCell>{userMedia.rating}</TableCell>
                    <TableCell>{userMedia.favourite.toString()}</TableCell>
                </TableRow>
            );

            favAnimeTable = (
                <div>
                    <Typography variant="h5">My Favourite Anime</Typography>
                    <TableContainer component={Paper} className={classes.paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Title</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Episodes</TableCell>
                                    <TableCell>My Episode</TableCell>
                                    <TableCell>My Rating</TableCell>
                                    <TableCell>Favourite</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {favAnimeTableRows}
                            </TableBody>
                        </Table>       
                    </TableContainer>    
                </div>
            );
            
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
                    <TableCell>{userMedia.currentPosition}</TableCell>
                    <TableCell>{userMedia.rating}</TableCell>
                    <TableCell>{userMedia.favourite.toString()}</TableCell>
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
                                    <TableCell>Episodes</TableCell>
                                    <TableCell>My Episode</TableCell>
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
        userInfo = (
            <div>
                <Grid containter spacing={3}>
                    <Grid item xs={4}>
                        {username}
                    </Grid>
                    <Grid item xs={8}>
                        {animeTable}
                        {mangaTable}
                        {favAnimeTable}
                        {favMangaTable}
                    </Grid>
                </Grid>
            </div>
        );
    }
    return (
        <Container component="main" maxWidth="lg">
            {userInfo}
        </Container>
    );

}