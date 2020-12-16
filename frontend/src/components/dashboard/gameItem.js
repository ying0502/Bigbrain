/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import M from 'materialize-css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';
import {
  timeTransform,
  customStyles,
  targetUrl,
  Config,
} from '../../utils/utils';
import { StartNewSession } from '../../actions/admin';
import { AdvanceGame } from '../../actions/quiz';

class GameItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      length: '',
      time: '',
    };
  }

  async componentDidMount() {
    // get EachQuiZ
    const res = await axios.get(`${targetUrl}admin/quiz/${this.props.item.id}`, Config);
    const time = res.data.questions.map((item) => Number(item.duration));
    const sum = time.reduce((a, b) => a + b, 0);
    const len = res.data.questions.length;
    this.setState({ time: sum, length: len });
  }

  advanceClick = () => {
    AdvanceGame(this.props.item.id);
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  handleClick = () => {
    if (this.props.item.active == null) {
      StartNewSession(this.props.item.id);
    } else {
      this.EndSession(this.props.item.id);
    }
    this.props.reRender();
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
    return (
      <div className="row">
        <div className="col s12 m12 l12">
          <div className="card large" style={{ width: '70vw' }}>
            <div className="card-content" style={{ overflow: 'scroll' }}>
              <span className="card-title">{this.props.item.name}</span>
              <span className="right">
                id:
                {this.props.item.id}
              </span>
              <img src={this.props.item.thumbnail} alt="game_thumbnail" className="thumbnail" />
              <p>
                Question Number:
                {this.state.length}
              </p>
              <p>
                Total time to complete:
                {!this.state.time ? 0 : this.state.time}
              </p>
              {/* eslint-disable-next-line react/jsx-no-target-blank */}
              <a href={`game/${this.props.item.id}/${this.props.item.active}`} target="_blank">{this.props.item.active == null ? null : 'Go to Play the game!'}</a>
              <div>
                {this.props.item.active == null ? '' : (
                  <div>
                    <button className="btn" onClick={this.advanceClick} style={{ backgroundColor: 'purple', marginBottom: '5vh' }} type="button">advance</button>
                    <div className="tips">Advance one time to begin session before player join first</div>
                  </div>
                )}
              </div>
            </div>
            <div className="card-action">
              <button
                /* eslint-disable-next-line max-len */
                onClick={this.handleClick}
                className="btn"
                type="button"
                style={{ marginRight: '5px', backgroundColor: '#00838f' }}
              >
                {this.props.item.active == null ? 'start the game' : 'close the game'}
              </button>
              {this.props.item.active}
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
