import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
} from 'react-router-dom';
import { LoginForm } from './auth/Login_form';
import { SignupForm } from './auth/Signup_form';
import { Dashboard } from './Create/Dashboard';

// import { LogoutButton } from './Logout_button';

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/register">
            <SignupForm />
          </Route>
          <Route path="/dashboard">
            <Dashboard token={localStorage.getItem('token')} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
