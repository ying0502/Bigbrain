import React from 'react';

class GameItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { a: '' };
  }

  render() {
    const { a } = this.state;
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
                {' '}
                {a}
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
}

export default GameItem;
