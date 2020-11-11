import React from 'react';

class LogoutButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // const token = this.props;
    // api.makeAPIRequest('admin/auth/logout', {
    //   method: 'POST',
    //   body: JSON.stringify({ token }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then((data) => {
    //     console.log(data);
    //     if (!data) {
    //       alert('successfully logout!');
    //     } else {
    //       alert('Invalid token!');
    //     }
    //   })
    //   .catch((err) => {
    //     alert(err);
    //   });
    console.log(this);
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
