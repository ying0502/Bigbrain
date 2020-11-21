import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import M from 'materialize-css';
import { customStyles } from '../../utils/utils';
import { PlayerJoin } from '../../actions/admin';

const SessionPage = (props) => {
  const [modalIsOpen, setIsOpen] = React.useState(true);
  const [Name, setName] = React.useState('');
  const closeModal = () => {
    setIsOpen(false);
  };
  const handleSubmit = async (e) => {
    const sessionID = window.location.pathname.split('/')[3];
    console.log(Name);
    console.log(sessionID);
    if (Name === '') {
      M.toast({
        html: 'Name can\'t be empty',
        classes: 'rounded',
      });
    } else {
      // eslint-disable-next-line react/prop-types
      await props.PlayerJoin(sessionID, Name);
      // eslint-disable-next-line react/prop-types
      console.log(props.playerId);
    }
    e.preventDefault();
  };
  return (
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
          className="validate"
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Input your name to join the session now!"
        />
      </div>
      <input type="submit" value="join" className="btn waves-effect waves-light" onClick={handleSubmit} />
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  playerId: state.admin.playerId,
});
export default connect(mapStateToProps, { PlayerJoin })(
  SessionPage,
);
