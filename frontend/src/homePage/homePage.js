import React from 'react';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import background1 from '../images/thumbnail_1.jpg';

const HomePage = () => (
  <div>
    <div className="parallax-container">
      <Parallax bgImage={background1} bgImageAlt="the cat" strength={800}>
        <div style={{ height: '500px' }} />
      </Parallax>
    </div>

    <section className="center">
      <h1>Connect Your Dream</h1>
      <p>Find your dream collaborator and get help from others</p>
      <div>
        <Link
          to="register"
          className="btn waves-effect waves-light blue-grey lighten-1"
          style={{ margin: '5px' }}
        >
          Sign Up
        </Link>
        <Link
          to="login"
          className="btn waves-effect waves-light blue-grey lighten-1"
          style={{ margin: '10px' }}
        >
          Login
        </Link>
      </div>
    </section>

    <div className="container">
      <div className="row">
        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center brown-text">
              <i className="material-icons">people</i>
            </h2>
            <h5 className="center">Speeds up collaborator</h5>

            <p className="light">
              FindColla is a community of engineers, designers, project managers, and dreamers.

            </p>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center brown-text">
              <i className="material-icons">bubble_chart</i>
            </h2>
            <h5 className="center">Easy to communicate</h5>

            <p className="light">
              Dreamers and collaborators can communicate with each other easily.
              There are communicate board under each projects and invitation messages
              can be emailed between users.
            </p>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="icon-block">
            <h2 className="center brown-text">
              <i className="material-icons">settings</i>
            </h2>
            <h5 className="center">Good community environment</h5>

            <p className="light">
              Administrator will hide improper projects and supervise dreamers to modify them.
              Hence the community will keep safe, efficient, and professional.
            </p>
          </div>
        </div>
      </div>
    </div>
    <footer className="page-footer blue-grey lighten-1">
      <div className="container center-align">
        <div>© 2020 Copyright bestAss3 Team</div>
        <br />
      </div>
    </footer>

  </div>
);

export default HomePage;
