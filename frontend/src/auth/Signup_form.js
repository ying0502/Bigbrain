import React from 'react';
import { API } from '../api';
import '../App.css';

const api = new API('http://localhost:5005');

export class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePwd = this.handleChangePwd.bind(this);
    this.reg_email = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,5}$/;

    this.state = {
      email: '',
      pwd: '',
      name: '',
    };
  }

  handleSubmit(event) {
    // const { thisState } = this.state;
    // eslint-disable-next-line react/destructuring-assignment
    const { email } = this.state;
    // eslint-disable-next-line react/destructuring-assignment
    const password = this.state.pwd;
    // eslint-disable-next-line react/destructuring-assignment
    const { name } = this.state;
    // console.log(`${email} ${password} ${name}`);
    if (!this.reg_email.test(email)) {
      alert('incorrect email format!');
    } else if (password.length < 6) {
      alert('password length not enough');
    } else if (!name) {
      alert('invalid input!');
    } else {
      api.makeAPIRequest('admin/auth/register', {
        method: 'POST',
        body: JSON.stringify({ email, password, name }),
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then((data) => {
          console.log(data);
          if (data.token) {
            alert('successfully signup!');
          } else {
            alert('Invalid input!');
          }
        })
        .catch((err) => {
          alert(err);
        });
    }
    event.preventDefault();
  }

  handleChangeEmail(event) {
    const emailInput = event.target.value;
    this.setState({ email: emailInput });
  }

  handleChangeName(event) {
    const nameInput = event.target.value;
    this.setState({ name: nameInput });
  }

  handleChangePwd(event) {
    const password = event.target.value;
    this.setState({ pwd: password });
  }

  render() {
    // const { thisState } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <h2>User Signup</h2>
        Email:
        {/* eslint-disable-next-line react/destructuring-assignment */}
        <input type="text" value={this.state.email} onChange={this.handleChangeEmail} />
        Password:
        {/* eslint-disable-next-line react/destructuring-assignment */}
        <input type="password" value={this.state.pwd} onChange={this.handleChangePwd} />
        Name:
        {/* eslint-disable-next-line react/destructuring-assignment */}
        <input type="text" value={this.state.name} onChange={this.handleChangeName} />
        <input type="submit" value="Submit" className="btn waves-effect waves-light" />
      </form>
    );
  }
}

export default SignupForm;
