// eslint-disable-next-line react/destructuring-assignment
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import M from 'materialize-css';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { login } from '../../actions/auth';

const registerSuccess = 'LogIn Success';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pwd: '',
      redirectTag: false,
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const email = this.nameInput.value;
    const password = this.state.pwd;
    console.log(`this is the data:${email}、${password}`);

    await this.props.login({ email, password });
    if (this.props.isLoggedIn) {
      M.toast({ html: registerSuccess, classes: 'rounded' });
      // alert(registerSuccess);
      this.setState({ redirectTag: true });
      setTimeout(this.setState({ redirectTag: false }));
      return null;
    }
    M.toast({ html: 'login fail', classes: 'rounded' });
    return null;
  }

  handleChange = (event) => {
    const pwd = event.target.value;
    this.setState({ pwd });
  }

  render() {
    const { pwd, redirectTag } = this.state;
    if (redirectTag) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <h2>User Login</h2>
        Email:
        <input type="text" ref={(input) => { this.nameInput = input; }} />
        Password:
        <input type="password" value={pwd} onChange={this.handleChange} />
        <input type="submit" value="Submit" className="btn waves-effect waves-light" />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(
  LoginForm,
);
