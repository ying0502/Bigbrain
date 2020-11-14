import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
} from 'react-router-dom';
import QuestionPage from './components/dashboard/qustionPage';
import LoginForm from './components/auth/Login_form';
import SignupForm from './components/auth/Signup_form';
import Dashboard from './components/dashboard/Dashboard';
import Narvbar from './components/homePage/narvbar';
import HomePage from './components/homePage/homePage';

// import { LogoutButton } from './Logout_button';
/* eslint-disable react/destructuring-assignment */
function App() {
  return (
    <Router>
      <Narvbar />
      <Route exact path="/"><HomePage /></Route>
      <Switch>
        <Route exact path="/login"><LoginForm /></Route>
        <Route exact path="/register"><SignupForm /></Route>
        <Route exact path="/dashboard"><Dashboard /></Route>
        <Route exact path="/game/427398257/" />
        <Route exact path="/game/862040729/" />
        <Route exact path="/game/862040729/11223"><QuestionPage /></Route>
      </Switch>
    </Router>
  );
}

export default App;
