import React from 'react';
import { connect } from 'react-redux';
/* eslint-disable import/no-extraneous-dependencies */
import { Redirect } from 'react-router';
import M from 'materialize-css';
import { register } from '../../actions/auth';

const registerSuccess = 'Register Success';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      redirectTag: false,
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password, name } = this.state;
    /* eslint-disable react/destructuring-assignment */
    /* eslint-disable react/prop-types */
    await this.props.register({ name, email, password });
    if (this.props.isAuthenticated) {
      M.toast({ html: registerSuccess, classes: 'rounded' });
      this.setState({ redirectTag: true });
      setTimeout(this.setState({ redirectTag: false }));
      return null;
    } M.toast({ html: 'register fail', classes: 'rounded' });
    return null;
  }

  handleonChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    /* eslint-disable no-trailing-spaces */
    const {
      name, email, password, redirectTag,
    } = this.state;
    if (redirectTag) {
      return <Redirect to="/login" />;
    }
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <h2>User Signup</h2>
        Email:
        <input type="email" name="email" value={email} onChange={this.handleonChange} />
        Password:
        <input type="password" name="password" value={password} onChange={this.handleonChange} />
        Name:
        <input type="text" name="name" value={name} onChange={this.handleonChange} />
        <input type="submit" value="Submit" className="btn waves-effect waves-light" />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  payload: state.auth.payload,

});

const mapDispatchToProps = {
  register,
};

export default connect(mapStateToProps, mapDispatchToProps)(
  SignupForm,
);
