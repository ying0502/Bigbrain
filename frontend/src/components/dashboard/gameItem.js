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
              <img src={this.props.item.thumbnail} alt="no thumbnail please edit" />
              <p>
                id:
                {' '}
                {this.props.item.id}
                {a}
              </p>
              <p>
                Total time to complete: 1 min
              </p>
            </div>
            <div className="card-action">
              <Link to={`/edit/${this.props.item.id}/`} className="avatar">
                <button className="btn" type="button">edit game</button>
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
