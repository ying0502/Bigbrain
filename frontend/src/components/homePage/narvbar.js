/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { logOut } from '../../actions/auth';
import Create from '../dashboard/createGame';
import Delete from '../dashboard/deleteGame';
import { customStyles } from '../../utils/utils';

Modal.setAppElement('#root');
/* eslint-disable-next-line no-shadow */
const Narvbar = ({ isLoggedIn, logOut }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpen1, setIsOpen1] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const openModal1 = () => {
    setIsOpen1(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const closeModal1 = () => {
    setIsOpen1(false);
  };

  if (isLoggedIn) {
    return (
      <nav className="darken-2 nav-wrapper blue-grey lighten-1 navbar-css">
        <ul className="right">
          <li className="avatar" onClick={openModal1} style={{ margin: '0 10px' }}>delete</li>
          <Modal
            isOpen={modalIsOpen1}
            onRequestClose={closeModal1}
            style={customStyles}
          >
            <Delete />
          </Modal>
          <li className="avatar" onClick={openModal}>create</li>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
          >
            <Create />
          </Modal>
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
    <nav className="darken-2 blue-grey">
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
