import React from 'react';
import M from 'materialize-css';
import { createNewQuestion } from '../../actions/admin';

export default function QuestionPage() {
  const [name, setName] = React.useState('');
  const [duration, setDuration] = React.useState('');
  const [points, setPoints] = React.useState(0);
  const [questionType, setType] = React.useState('single choice');
  const [videoLink, setVideo] = React.useState('');
  const [correctAnswer, setCorrect] = React.useState('');
  const [answer1, setAnswer1] = React.useState('');
  const [answer2, setAnswer2] = React.useState('');
  const [answer3, setAnswer3] = React.useState('');
  const [answer4, setAnswer4] = React.useState('');
  M.AutoInit();
  const handleSubmit = (event) => {
    const questionAnswers = [];
    questionAnswers.push(answer1, answer2, answer3, answer4);
    const questionInfo = {
      name,
      duration,
      points,
      questionType,
      videoLink,
      correctAnswer,
      answers: questionAnswers,
    };
    // console.log(`path:${window.location.pathname.split('/')[2]}`);
    const CurrentGameId = window.location.pathname.split('/')[2];
    console.log(questionInfo);
    createNewQuestion(CurrentGameId, questionInfo);
    event.preventDefault();
  };

  const pagePrior = (
    <>
      <div className="input-field col s12">
        <select
          style={{ display: 'block' }}
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          <option value="" disabled selected>Choose your question type</option>
          <option value="single choice">single choice</option>
          <option value="multiple choice">multiple choice</option>
        </select>
      </div>
      <div className="input-field col s6">
        Question
        <input
          id="question"
          type="text"
          className="validate"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="input-field col s6">
        Time_limits
        <input
          id="time"
          type="text"
          className="validate"
          onChange={(e) => {
            setDuration(e.target.value);
          }}
        />
      </div>
      <div className="input-field col s6">
        Points
        <input
          id="points"
          type="text"
          className="validate"
          onChange={(e) => {
            setPoints(e.target.value);
          }}
        />
      </div>
      <div className="input-field col s6">
        Video Link
        <input
          id="videoLink"
          type="text"
          className="validate"
          onChange={(e) => {
            setVideo(e.target.value);
          }}
        />
      </div>
      <div className="input-field col s6">
        Answer 1
        <i className="material-icons prefix">mode_edit</i>
        <textarea
          id="icon_prefix1"
          className="materialize-textarea"
          onChange={(e) => {
            setAnswer1(e.target.value);
          }}
        />
      </div>
      <div className="input-field col s6">
        Answer 2
        <i className="material-icons prefix">mode_edit</i>
        <textarea
          id="icon_prefix2"
          className="materialize-textarea"
          onChange={(e) => {
            setAnswer2(e.target.value);
          }}
        />
      </div>
      <div className="input-field col s6">
        Answer 3
        <i className="material-icons prefix">mode_edit</i>
        <textarea
          id="icon_prefix3"
          className="materialize-textarea"
          onChange={(e) => {
            setAnswer3(e.target.value);
          }}
        />
      </div>
      <div className="input-field col s6">
        Answer 4
        <i className="material-icons prefix">mode_edit</i>
        <textarea
          id="icon_prefix4"
          className="materialize-textarea"
          onChange={(e) => {
            setAnswer4(e.target.value);
          }}
        />
      </div>
    </>
  );
  if (questionType === 'single choice') {
    return (
      <div className="form">
        {pagePrior}
        <div className="input-field col s12">
          <select
            style={{ display: 'block' }}
            onChange={(e) => {
              console.log(e.target.value);
              setCorrect(e.target.value);
            }}
          >
            <option value="" disabled selected>Choose the right answer</option>
            <option value="answer1">Answer 1</option>
            <option value="answer2">Answer 2</option>
            <option value="answer3">Answer 3</option>
            <option value="answer4">Answer 4</option>
          </select>
        </div>
        <input type="submit" value="Submit" className="btn waves-effect waves-light" onClick={handleSubmit} />
      </div>
    );
  }

  return (
    <div className="form">
      {pagePrior}
      <div className="input-field col s12 " style={{ display: 'block' }}>
        <select
          multiple
          // style={{ display: 'block' }}
          onChange={(e) => {
            const { options } = e.target;
            const value = [];
            for (let i = 0, l = options.length; i < l; i + 1) {
              if (options[i].selected) {
                value.push(options[i].value);
              }
            }
            setCorrect(value);
          }}
        >
          <option value="" disabled selected>Choose your right answers</option>
          <option value="answer1">Answer 1</option>
          <option value="answer2">Answer 2</option>
          <option value="answer3">Answer 3</option>
          <option value="answer4">Answer 4</option>
        </select>
      </div>
      <input type="submit" value="Submit" className="btn waves-effect waves-light" onClick={handleSubmit} />
    </div>
  );
}
