/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
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
    await this.props.register({ name, email, password });
    if (this.props.isAuthenticated) {
      M.toast({ html: registerSuccess, classes: 'rounded' });
      this.setState({ redirectTag: true });
      setTimeout(this.setState({ redirectTag: false }));
      return null;
    } M.toast({ html: 'register fail', classes: 'rounded' });
    return null;
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
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
        <input type="email" name="email" value={email} onChange={this.handleChange} />
        Password:
        <input type="password" name="password" value={password} onChange={this.handleChange} />
        Name:
        <input type="text" name="name" value={name} onChange={this.handleChange} />
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
