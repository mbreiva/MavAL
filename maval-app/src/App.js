import './App.css'
import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './home/MavalHome'
import AnimeScreen from './anime/AnimeScreen'
import MangaScreen from './manga/MangaScreen'
import IndividualAnimeScreen from './anime/IndividualAnimeScreen'
import IndividualMangaScreen from './manga/IndividualMangaScreen'
import UserProfileScreen from './user_profile/UserProfileScreen'
import NavBar from './shared_components/NavBar'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './shared_components/Theme'

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/anime" component={AnimeScreen} />
          <Route exact path="/anime/:id" component={IndividualAnimeScreen} />
          <Route exact path="/manga" component={MangaScreen} />
          <Route exact path="/manga/:id" component={IndividualMangaScreen} />
          <Route exact path="/user/:id" component={UserProfileScreen} />
        </Switch>
      </div>
    </ThemeProvider>
  )
}
