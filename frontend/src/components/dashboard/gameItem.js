/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';
import timeTransform from '../../utils/utils';
import { endSession, getQuizDetail, startNewSession } from '../../actions/admin';

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
              <img src={this.props.item.thumbnail} alt="game_thumbnail" />
              <p>
                Question Number:
                {this.props.item.oldSessions.length}
                {a}
              </p>
              <p>
                Total time to complete: 1 min
              </p>
            </div>
            <div className="card-action">
              <button
                /* eslint-disable-next-line max-len */
                onClick={() => (this.props.item.active == null ? startNewSession(this.props.item.id) : endSession(this.props.item.id))}
                className="btn"
                type="button"
                style={{ marginRight: '5px', backgroundColor: '#00838f' }}
              >
                {this.props.item.active == null ? 'start the game' : 'close the game'}
              </button>
              <Link to={`/edit/${this.props.item.id}/`} className="avatar">
                <button className="btn" type="button" onClick={getQuizDetail(this.props.item.id)}>edit</button>
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
