import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { API } from '../api';

const api = new API('http://localhost:5005');

const Narvbar = ({ loginStatus, setLogin }) => {
  function handleLogOut() {
    api.makeAPIRequest('admin/auth/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    localStorage.removeItem('token');
    setLogin();
  }
  console.log(loginStatus, setLogin);

  if (loginStatus) {
    return (
      <nav className="darken-2 nav-wrapper blue-grey lighten-1 navbar-css">
        <Link to="/" className="brand-logo avatar">
          Holla
        </Link>
        <ul className="right hide-on-med-and-down">
          <li>
            <Link to="/register" className="avatar">
              create
            </Link>
          </li>
          <li>
            <Link to="/" className="avatar" onClick={handleLogOut}>
              logout
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
  return (
    <nav className="darken-2 nav-wrapper blue-grey lighten-1 navbar-css">
      <Link to="/" className="brand-logo avatar">
        Holla
      </Link>
      <ul className="right hide-on-med-and-down">
        <li>
          <Link to="/register" className="avatar">
            Register
          </Link>
        </li>
        <li>
          <Link to="/login" className="avatar">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

Narvbar.propTypes = {
  loginStatus: PropTypes.number,
  setLogin: PropTypes.func,
};

Narvbar.defaultProps = {
  loginStatus: localStorage.getItem('token'),
  setLogin: null,
};
export default Narvbar;
