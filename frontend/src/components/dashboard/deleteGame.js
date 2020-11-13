import React, { useState } from 'react';
// import { connect } from 'react-redux';
import { DeleteGame } from '../../actions/admin';

const Delete = () => {
  const [ID, setID] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('try to submit');
    DeleteGame({ ID });
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
          placeholder="Input the game ID to delete"
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

export default Delete;