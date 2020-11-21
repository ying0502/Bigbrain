/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable  consistent-return */
import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import M from 'materialize-css';
// import axios from 'axios';

const QuestionItem = (props) => {
  const [countDown, setCountDown] = useState(props.data.duration);
  const [showAnsw, setShowAnsw] = useState(false);

  useEffect(() => {
    M.AutoInit();
  });

  useEffect(() => {
    setTimeout(() => {
      if (countDown > 0) {
        setCountDown((c) => c - 1);
      } else if (countDown === 0) {
        // send request
        setShowAnsw(true);
      }
    }, 1000);
  }, [countDown]);

  useEffect(() => {
    const id = setInterval(() => {
      if (props.stage) {
        props.newQues();
      }
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [props.data.name]);

  useEffect(() => {
    setCountDown(props.data.duration);
  }, [props.data.name]);

  const returnMult = () => (
    <form>
      <p>
        <input type="checkbox" checked="checked" />
        <label htmlFor="test1">{props.data.answers1}</label>
      </p>
      <p>
        <input type="checkbox" id="test2" />
        <label htmlFor="test2">{props.data.answers2}</label>
      </p>
      <p>
        <input type="checkbox" id="test3" />
        <label htmlFor="test3">{props.data.answers3}</label>
      </p>
      <p>
        <input type="checkbox" id="test4" />
        <label htmlFor="test4">{props.data.answers4}</label>
      </p>
    </form>
  );

  const returnSigl = () => (
    <form>
      <p>
        <input type="radio" id="test1" />
        <label htmlFor="test1">{props.data.answers1}</label>
      </p>
      <p>
        <input type="radio" id="test2" />
        <label htmlFor="test2">{props.data.answers2}</label>
      </p>
      <p>
        <input type="radio" id="test3" />
        <label htmlFor="test3">{props.data.answers3}</label>
      </p>
      <p>
        <input type="radio" id="test4" />
        <label htmlFor="test4">{props.data.answers4}</label>
      </p>
    </form>
  );

  return (
    <div className="center">
      <h3>{props.data.name}</h3>

      {props.data.questionType === 'multiple choice' ? returnMult() : returnSigl()}
      1213333
      { props.stage}
      {showAnsw
        ? (
          <div>
            correct answer:
            {' '}
            {props.data.correctAnswer}
          </div>
        ) : ''}
      <div>
        TIMER:
        {' '}
        {countDown}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  stage: state.quiz.payload.stage,
  error: state.quiz.payload.error,
});

export default connect(mapStateToProps, null)(
  QuestionItem,
);
