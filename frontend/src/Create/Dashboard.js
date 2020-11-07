import React from 'react';
import axios from 'axios';

export const Dashboard = (props) => {
  console.log(props);
  const Mytoken = props;
  axios.get('http://localhost:5005/admin/quiz', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Mytoken.token}`,
    },
  })
    .then((data) => console.log(data))
    .catch((err) => {
      alert(err);
    });
  return (
    <>
      <Game />
    </>
  );
};

function Game() {
  return (
    <div className="row">
      <div className="col s12 m7">
        <div className="card">
          <div className="card-image">
            <img src="images/thumbnail_1.jpg" alt="game_thumbnail" />
            <span className="card-title">Game Title</span>
          </div>
          <div className="card-content">
            <p>
              Question Number: 10
            </p>
            <p>
              Total time to complete: 1 min
            </p>
          </div>
          <div className="card-action">
            <a href="www.google.com">This is a link</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
