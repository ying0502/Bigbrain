/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createGame } from '../../actions/admin';

const Create = (props) => {
  const [name, setName] = useState('');
  const handleonSubmit = async (e) => {
    e.preventDefault();
    await props.createGame({ name });
    if (props.quizId) {
      alert('Create Quiz Success');
    }
  };

  const handleonChange = (e) => {
    setName(e.target.value);
  };
  return (
    <form
      className="col s12"
      onSubmit={(e) => handleonSubmit(e)}
    >
      <div className="input-field">
        <input
          type="text"
          placeholder="Input your game names"
          onChange={(e) => handleonChange(e)}
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

const mapStateToProps = (state) => ({
  quizId: state.admin.quizId,
});
export default connect(mapStateToProps, { createGame })(
  Create,
);
