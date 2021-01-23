import './App.css'
import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './home/MavalHome'
import AnimeScreen from './anime/AnimeScreen'
import MangaScreen from './manga/MangaScreen'
import IndividualAnimeScreen from './anime/IndividualAnimeScreen'
import IndividualMangaScreen from './manga/IndividualMangaScreen'
import UserProfileScreen from './user_profile/UserProfileScreen'
import SearchPage from './search/SearchPage'
import NavBar from './shared_components/NavBar'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './shared_components/Theme'

export default function App() {
  var currentLoginStatus = localStorage.getItem("is_logged_in");
  const [isLoggedIn, setIsLoggedIn] = useState(currentLoginStatus);

  const login = () => {
    setIsLoggedIn("true");
    localStorage.setItem("is_logged_in", "true");
  };

  const logout = () => {
    setIsLoggedIn("false");
    localStorage.clear();
    localStorage.setItem("is_logged_in", "false");
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <NavBar isLoggedIn={isLoggedIn} login={login} logout={logout} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/anime" component={AnimeScreen} />
          <Route exact path="/anime/:id" component={IndividualAnimeScreen} />
          <Route exact path="/manga" component={MangaScreen} />
          <Route exact path="/manga/:id" component={IndividualMangaScreen} />
          <Route exact path="/user/:id" component={UserProfileScreen} />
          <Route exact path="/search" component={SearchPage} />
        </Switch>
      </div>
    </ThemeProvider>
  )
}
