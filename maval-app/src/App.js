import './App.css'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './home/MavalHome'
import AnimeScreen from './anime/AnimeScreen'
import MangaScreen from './manga/MangaScreen'
import LoginScreen from './login/LoginScreen'
import RegisterScreen from './register/RegisterScreen'
import IndividualAnimeScreen from './anime/IndividualAnimeScreen'
import IndividualMangaScreen from './manga/IndividualMangaScreen'
import UserProfileScreen from './user_profile/UserProfileScreen'
import NavBar from './shared_components/NavBar'

//import UserPage from './pages/UserPage'

export default function App() {
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/register" component={RegisterScreen} />
        <Route exact path="/anime" component={AnimeScreen} />
        <Route exact path="/anime/:id" component={IndividualAnimeScreen} />
        <Route exact path="/manga" component={MangaScreen} />
        <Route exact path="/manga/:id" component={IndividualMangaScreen} />
        <Route exact path="/user/:id" component={UserProfileScreen} />
        {/* <Route path="/:id" component={UserPage} />
        <Route path="/categories" component={CategoriesPage} />
        <Route path="/categories/:id" component={IndividualCategoryPage} /> */}
      </Switch>
    </div>
  )
}
