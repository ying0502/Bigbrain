import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import M from 'materialize-css';
import { customStyles } from '../../utils/utils';
import { PlayerJoin } from '../../actions/admin';
import { startGame, startGameRefresh } from '../../actions/quiz';
import QuestionItem from './question';

/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
const SessionPage = (props) => {
  const [modalIsOpen, setIsOpen] = React.useState(true);
  const [StartQuiz, setStartQuiz] = React.useState(false);
  const [Data, setData] = React.useState(false);
  const [Name, setName] = React.useState('');
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e) => {
    const sessionID = window.location.pathname.split('/')[3];
    if (Name === '') {
      M.toast({
        html: 'Name can\'t be empty',
        classes: 'rounded',
      });
    } else {
      await props.PlayerJoin(sessionID, Name);
    }
    setIsOpen(false);
    e.preventDefault();
  };

  const handleClick = async () => {
    try {
      const res = await startGame(props.playerId);

      await setData(res.question);
      setStartQuiz(true);
    } catch (e) {
      //
    }
  };

  const handleClickRefresh = async () => {
    try {
      const res = await startGameRefresh(props.playerId);
      await setData(res.question);
      setStartQuiz(true);
    } catch (e) {
      //
    }
  };

  // const handleClick = async
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="input-field col s6">
          Input player Name
          <input
            id="sessionNameInput"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Input your name to join the session now!"
          />
        </div>
        <input type="submit" value="join" className="btn waves-effect waves-light" onClick={handleSubmit} />
      </Modal>

      {/* player start game */}

      <div>
        Do you want to start the games?
        <button className="btn" type="button" onClick={handleClick}>yes</button>
      </div>

      {StartQuiz
        ? <QuestionItem playerId={props.playerId} data={Data} newQues={() => handleClickRefresh()} /> : ''}
    </div>

  );
};

const mapStateToProps = (state) => ({
  playerId: state.admin.playerId,
});
export default connect(mapStateToProps, { PlayerJoin })(
  SessionPage,
);
