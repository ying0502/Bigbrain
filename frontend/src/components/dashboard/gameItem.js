/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import M from 'materialize-css';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import timeTransform, { customStyles, targetUrl } from '../../utils/utils';
import { StartNewSession } from '../../actions/admin';

class GameItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: '',
      modalIsOpen: false,
    };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  EndSession = (quizId) => {
    console.log(quizId);
    fetch(`${targetUrl}admin/quiz/${quizId}/end`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then((data) => {
      console.log(data);
      if (data.status === 200) {
        M.toast({
          html: 'End session Success',
          classes: 'rounded',
        });
        this.openModal();
      } else {
        M.toast({
          html: 'End session fail',
          classes: 'rounded',
        });
      }
    }).catch((err) => {
      console.log(err);
      M.toast({
        html: 'Fetch fail',
        classes: 'rounded',
      });
    });
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
                Question Number: 0
                {a}
              </p>
              <p>
                Total time to complete: 1 min
              </p>
              {/* eslint-disable-next-line react/jsx-no-target-blank */}
              <a href={`game/${this.props.item.id}/${this.props.item.active}`} target="_blank">{this.props.item.active == null ? null : 'Go to Play the game!'}</a>
            </div>
            <div className="card-action">
              <button
                /* eslint-disable-next-line max-len */
                onClick={() => (this.props.item.active == null ? StartNewSession(this.props.item.id) : this.EndSession(this.props.item.id))}
                className="btn"
                type="button"
                style={{ marginRight: '5px', backgroundColor: '#00838f' }}
              >
                {this.props.item.active == null ? 'start the game' : 'close the game'}
              </button>
              <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                style={customStyles}
              >
                <div className="pageConfig">
                  <div>Would you like to view the results?</div>
                </div>
                <div className="pageConfig">
                  <a href={`result/${this.props.item.active}`} style={{ textAlign: 'center' }}>Yes</a>
                </div>
              </Modal>
              <Link to={`/edit/${this.props.item.id}/`} className="avatar">
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
