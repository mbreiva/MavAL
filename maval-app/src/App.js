import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './home/MavalHome'
import LoginPage from './login/Login';
import RegisterPage from './register/Register'
import AnimePage from './anime/Anime';
import UserProfilePage from './user_profile/UserProfile';
//import UserPage from './pages/UserPage'

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/anime" component={AnimePage} />
      <Route exact path="/user" component={UserProfilePage} />
      {/* <Route path="/:id" component={UserPage} />
      <Route path="/categories" component={CategoriesPage} />
      <Route path="/categories/:id" component={IndividualCategoryPage} /> */}
    </Switch>
  )
}
