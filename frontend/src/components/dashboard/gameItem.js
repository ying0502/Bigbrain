/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';
import timeTransform from '../../utils/utils';

class GameItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { a: '' };
  }

  render() {
    const { a } = this.state;
    return (
      <div className="row">
        <div className="col s12 l6">
          <div className="card">
            <span className="card-image" />
            <div className="card-content">
              <span className="card-title">{this.props.item.name}</span>
              <img src="images/thumbnail_1.jpg" alt="game_thumbnail" />
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
              <Link to={`/game/${this.props.item.id}/`} className="avatar">
                <button className="btn" type="button">edit</button>
              </Link>
              <span className="right">
                {timeTransform(this.props.item.createdAt)}
              </span>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default GameItem;
