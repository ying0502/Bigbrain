/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { DeleteGame, getQuiz } from '../../actions/admin';

const Delete = (props) => {
  const [ID, setID] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    await props.DeleteGame({ ID });
    props.closeModal();
    await props.getQuiz();
  };
  const handleChange = (e) => {
    setID(e.target.value);
  };
  return (
    <form
      className="col s12"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="input-field">
        <input
          type="text"
          placeholder="Input the Game ID to delete"
          onChange={(e) => handleChange(e)}
          required
        />
      </div>
      <input
        type="submit"
        className="btn-small left"
        value="send"
        style={{ marginTop: '38px' }}
      />
    </form>
  );
};

export default connect(null, { DeleteGame, getQuiz })(
  Delete,
);
