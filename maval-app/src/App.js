import './App.css'
import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './home/MavalHome'
import AnimePage from './anime/AnimePage'
import MangaPage from './manga/MangaPage'
import IndividualAnimePage from './anime/IndividualAnimePage'
import IndividualMangaPage from './manga/IndividualMangaPage'
import UserProfileScreen from './user_profile/UserProfileScreen'
import SearchPage from './search/SearchPage'
import NavBar from './shared_components/NavBar'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './shared_components/Theme'
import Footer from './shared_components/Footer'

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
      <div style={{minHeight: "100vh", overflow: "hidden", display: "block", position: "relative", paddingBottom: "50px"}}>
        <NavBar isLoggedIn={isLoggedIn} login={login} logout={logout} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/anime" component={AnimePage} />
          <Route exact path="/anime/:animeId" component={IndividualAnimePage} />
          <Route exact path="/manga" component={MangaPage} />
          <Route exact path="/manga/:mediaId" component={IndividualMangaPage} />
          <Route exact path="/user/:id" component={UserProfileScreen} />
          <Route exact path="/search" component={SearchPage} />
        </Switch>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
