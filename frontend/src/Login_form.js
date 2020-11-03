import React from 'react';
import { API } from './api';

const api = new API('http://localhost:5005');

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      pwd: '',
    };
  }

  handleSubmit(event) {
    const email = this.nameInput.value;
    const { pwd } = this.state;
    console.log(`${email}、${pwd}`);
    api.makeAPIRequest('admin/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, pwd }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((data) => {
        console.log(data);
        if (data.token) {
          alert('successfully login!');
        } else {
          alert('Invalid input!');
        }
      })
      .catch((err) => {
        alert(err);
      });
    event.preventDefault();
  }

  handleChange(event) {
    const pwd = event.target.value;
    this.setState({ pwd });
  }

  render() {
    const { thisState } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        Email:
        <input type="text" ref={(input) => { this.nameInput = input; }} />
        Password:
        <input type="password" value={{ thisState }.pwd} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default LoginForm;
