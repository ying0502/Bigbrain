import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
} from 'react-router-dom';
import LoginForm from './auth/Login_form';
import SignupForm from './auth/Signup_form';
import Dashboard from './Create/Dashboard';
import Narvbar from './homePage/narvbar';
import HomePage from './homePage/homePage';

// import { LogoutButton } from './Logout_button';

function App() {
  const { loginStatus, setLoginStatus } = useState('');

  function setLogin() {
    // 如果有token
    const token = localStorage.getItem('token');
    if (token) {
      setLoginStatus(token);
    } else {
      setLoginStatus(false);
    }
  }
  return (
    <Router>
      <Narvbar loginStatus={loginStatus} setLogin={() => setLogin()} />
      <Route exact path="/"><HomePage /></Route>
      <Switch>
        <Route exact path="/login"><LoginForm /></Route>
        <Route exact path="/register"><SignupForm /></Route>
        <Route exact path="/dashboard"><Dashboard /></Route>
      </Switch>
    </Router>
  );
}

export default App;
