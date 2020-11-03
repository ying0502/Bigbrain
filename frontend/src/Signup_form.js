import React from 'react';
import { API } from './api';

const api = new API('http://localhost:5005');

export class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange_email = this.handleChange_email.bind(this);
    this.handleChange_name = this.handleChange_name.bind(this);
    this.handleChange_pwd = this.handleChange_pwd.bind(this);
    this.reg_email = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,5}$/;

    this.state = {
      email: '',
      pwd: '',
      name: '',
    };
  }

  handleSubmit(event) {
    const { thisState } = this.state;
    const emailInput = { thisState }.email;
    const password = { thisState }.pwd;
    const nameInput = { thisState }.name;
    if (!this.reg_email.test(emailInput)) {
      alert('incorrect email format!');
    } else if (password.length < 6) {
      alert('password length not enough');
    } else if (!nameInput) {
      alert('invalid input!');
    } else {
      console.log(`${emailInput}、${password}、${nameInput}`);
      api.makeAPIRequest('admin/auth/login', {
        method: 'POST',
        body: JSON.stringify({ emailInput, password, nameInput }),
        headers: {
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
      <form onSubmit={this.handleSubmit}>
        Email:
        <input type="text" value={this.state.email} onChange={this.handleChangeEmail} />
        Password:
        <input type="password" value={this.state.name} onChange={this.handleChangeName} />
        Name:
        <input type="text" value={this.state.pwd} onChange={this.handleChangePwd} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SignupForm;
