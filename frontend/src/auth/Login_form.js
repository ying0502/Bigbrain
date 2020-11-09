import React from 'react';
import { API } from '../api';
import '../App.css';

const myStorage = window.localStorage;
const api = new API('http://localhost:5005');

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      pwd: '',
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const email = this.nameInput.value;
    // eslint-disable-next-line react/destructuring-assignment
    const password = this.state.pwd;
    console.log(`this is the data:${email}、${password}`);
    api.makeAPIRequest('admin/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((data) => {
        console.log(data);
        if (data.token) {
          alert('successfully login!');
          myStorage.setItem('token', data.token);
          window.location.href = '/dashboard';
        } else {
          alert('Invalid input!');
        }
      })
      .catch((err) => {
        alert(err);
      });
  }

  handleChange(event) {
    const pwd = event.target.value;
    this.setState({ pwd });
  }

  render() {
    const { pwd } = this.state;
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

export default LoginForm;
