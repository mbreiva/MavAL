import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import TabPanel from '../shared_components/TabPanel'
import MediaTable from '../shared_components/MediaTable'
import SearchBar from './SearchBar'

const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
        fontWeight: theme.typography.fontWeightBold,
    },
}));

export default function SearchPageView(props) {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    let keyword = props.keyword;
    let results = props.results;
    let animeResults;
    let mangaResults;
    let mediaTabs;
    
    let searchResults = <div />;
    let animeTable = <h2>No Results Found.</h2>;
    let mangaTable = <h2>No Results Found.</h2>;

    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };

    if(results.length > 0) {
        animeResults = results.filter(result => result.mediaTypeId === 1);
        mangaResults = results.filter(result => result.mediaTypeId === 2);

        if(animeResults.length > 0) {
            animeTable = (
                <div>
                    <Typography component="h1" variant="h4" className={classes.title}>Anime</Typography>
                    <MediaTable media={animeResults} mediaType={1}/>
                </div>
            );
        }
        
        if(mangaResults.length > 0) {
            mangaTable = (
                <div>
                    <Typography component="h1" variant="h4" className={classes.title}>Manga</Typography>
                    <MediaTable media={mangaResults} mediaType={2}/>
                </div>
            );
        }
    }

    searchResults = (
        <div>
            <TabPanel value={value} index={0}>
                {animeTable}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {mangaTable}
            </TabPanel>
        </div>
    )

    mediaTabs =(
        <div>
            <Paper>
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleTabChange}
                >
                    <Tab label="Anime" />
                    <Tab label="Manga" />
                </Tabs>
            </Paper>
        </div>
    );

    return (
        <Container component="main" maxWidth="lg">
            <Typography component="h1" variant="h4" className={classes.title}>Search Results for "{keyword}"</Typography>
            <SearchBar />
            <div>
                {mediaTabs}
                {searchResults}
            </div>
        </Container>
    )
}
