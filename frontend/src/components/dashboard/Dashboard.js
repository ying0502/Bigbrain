import React from 'react';
import axios from 'axios';
import GameItem from './gameItem';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameList: [],
    };
  }

  async componentDidMount() {
    const games = await axios.get('admin/quiz', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    console.log(games);
  }

  render() {
    const { gameList } = this.state;
    return (
      <>
        <GameItem />
        {gameList}
      </>
    );
  }
}

export default Dashboard;
