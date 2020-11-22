/* eslint-disable react/prop-types */
import M from 'materialize-css';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createGame, getQuiz } from '../../actions/admin';

const Create = (props) => {
  const [name, setName] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    await props.createGame({ name });
    if (props.quizId) {
      M.toast({
        html: 'Create Quiz Success',
        classes: 'rounded',
      });
    }
    props.closeModal();
    await props.getQuiz();
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <form
      className="col s12"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="input-field">
        <input
          type="text"
          placeholder="Input your game names"
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

const mapStateToProps = (state) => ({
  quizId: state.admin.quizId,
});
export default connect(mapStateToProps, { createGame, getQuiz })(
  Create,
);
