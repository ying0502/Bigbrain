import React from 'react';
import { API } from '../api';

const api = new API('http://localhost:5005');

export class LogoutButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const token = this.props;
    api.makeAPIRequest('admin/auth/logout', {
      method: 'POST',
      body: JSON.stringify({ token }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((data) => {
        console.log(data);
        if (!data) {
          alert('successfully logout!');
        } else {
          alert('Invalid token!');
        }
      })
      .catch((err) => {
        alert(err);
      });
  }

  render() {
    return (
      <button type="button" onClick={this.handleClick}>
        Logout
      </button>
    );
  }
}

export default LogoutButton;
