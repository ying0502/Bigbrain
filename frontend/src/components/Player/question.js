/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable  consistent-return */
import React, { useEffect, useState } from 'react';
import M from 'materialize-css';
import { putAnsw } from '../../actions/quiz';

const QuestionItem = (props) => {
  const [countDown, setCountDown] = useState(props.data.duration);
  const [showAnsw, setShowAnsw] = useState(false);

  const getFormData = async () => {
    const data = document.getElementsByTagName('input');
    const answerIds = [];
    Array.from(data).forEach((item) => {
      if (item.checked) {
        answerIds.push(item.value);
      }
    });
    if (answerIds.length !== 0) {
      await putAnsw(props.playerId, answerIds);
    }
  };

  useEffect(() => {
    M.AutoInit();
  });

  useEffect(() => {
    const id = setTimeout(async () => {
      if (countDown > 0) {
        await getFormData();
        setCountDown((c) => c - 1);
      } else if (countDown === 0) {
        setShowAnsw(true);
      }
    }, 1000);
    return () => {
      clearTimeout(id);
    };
  }, [countDown]);

  useEffect(() => {
    const id = setInterval(() => {
      props.newQues();
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [props.data.name]);

  useEffect(() => {
    setCountDown(props.data.duration);
    setShowAnsw(false);
  }, [props.data.name]);

  const returnMult = () => (
    <form className="form">
      <p>
        <label htmlFor="test1">
          <input type="checkbox" id="test1" style={{ opacity: '1' }} className="filled-in" value="answers1" />
          <span>{props.data.answers1}</span>
        </label>
      </p>
      <p>
        <label htmlFor="test2">
          <input type="checkbox" id="test2" style={{ opacity: '1' }} className="filled-in" value="answers2" />
          <span>{props.data.answers2}</span>
        </label>
      </p>
      <p>
        <label htmlFor="test3">
          <input type="checkbox" id="test3" style={{ opacity: '1' }} className="filled-in" value="answers3" />
          <span>{props.data.answers3}</span>
        </label>
      </p>
      <p>
        <label htmlFor="test4">
          <input type="checkbox" id="test4" style={{ opacity: '1' }} className="filled-in" value="answers4" />
          <span>{props.data.answers4}</span>
        </label>
      </p>
    </form>
  );

  const returnSigl = () => (
    <form>
      <p>
        <label htmlFor="test1">
          <input type="radio" name="group1" id="test1" style={{ opacity: '1' }} value="answers1" />
          <span>{props.data.answers1}</span>
        </label>
      </p>
      <p>
        <label htmlFor="test2">
          <input type="radio" name="group1" id="test2" style={{ opacity: '1' }} value="answers2" />
          <span>{props.data.answers2}</span>
        </label>
      </p>
      <p>
        <label htmlFor="test3">
          <input type="radio" name="group1" id="test3" style={{ opacity: '1' }} value="answers3" />
          <span>{props.data.answers3}</span>
        </label>
      </p>
      <p>
        <label htmlFor="test4">
          <input type="radio" name="group1" id="test4" style={{ opacity: '1' }} value="answers4" />
          <span>{props.data.answers4}</span>
        </label>
      </p>
    </form>
  );

  return (
    <div className="center">
      <h3>{props.data.name}</h3>

      {props.data.questionType === 'multiple choice' ? returnMult() : returnSigl()}

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

export default QuestionItem;
