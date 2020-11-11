import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
/* eslint-disable import/no-extraneous-dependencies */
import { logOut } from '../../actions/auth';

/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-shadow
const Narvbar = ({ isLoggedIn, logOut }) => {
  if (isLoggedIn) {
    return (
      <nav className="darken-2 nav-wrapper blue-grey lighten-1 navbar-css">
        <Link to="/" className="brand-logo avatar">
          Ass3 cutest cats
        </Link>
        <ul className="right">
          <li>
            <Link to="/register" className="avatar">
              create
            </Link>
          </li>
          <li>
            <Link to="/" onClick={logOut} className="avatar">
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
        Ass3 cutest cats
      </Link>
      <ul className="right">
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

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = {
  logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Narvbar);
