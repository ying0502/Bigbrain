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
import EditGame from './components/dashboard/editGame';
import SessionPage from './components/Player/SessionPage';
import MyResult from './components/Player/MyResult';
import Result from './components/Player/Result';

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
        <Route exact path="/edit/:id" component={EditGame} />
        <Route exact path="/edit/:gid/:qid" component={QuestionPage} />
        <Route exact path="/game/:gid/:sid" component={SessionPage} />
        <Route exact path="/result/:sid" component={Result} />
        <Route exact path="/myresult/:pid" component={MyResult} />
      </Switch>
    </Router>
  );
}

export default App;
