import logo from './logo.svg';
import './App.css'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './home/MavalHome'
import LoginView from './login/LoginView'
import RegisterPage from './register/Register'
import AnimePage from './anime/Anime'
import MangaPage from './manga/Manga'
import UserProfilePage from './user_profile/UserProfile'
import LoginScreen from './login/LoginScreen'

//import UserPage from './pages/UserPage'

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginScreen} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/anime" component={AnimePage} />
      <Route exact path="/manga" component={MangaPage} />
      <Route exact path="/user" component={UserProfilePage} />
      {/* <Route path="/:id" component={UserPage} />
      <Route path="/categories" component={CategoriesPage} />
      <Route path="/categories/:id" component={IndividualCategoryPage} /> */}
    </Switch>
  )
}
