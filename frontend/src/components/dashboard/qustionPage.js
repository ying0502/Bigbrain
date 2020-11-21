import React from 'react';
import M from 'materialize-css';
// import { createNewQuestion } from '../../actions/admin';

export default function QuestionPage() {
  const GameId = window.location.pathname.split('/')[2];
  const QuesId = window.location.pathname.split('/')[3];
  const [name, setName] = React.useState(localStorage.getItem(`${GameId}_${QuesId}_Info_name`));
  const [duration, setDuration] = React.useState(localStorage.getItem(`${GameId}_${QuesId}_Info_duration`));
  const [points, setPoints] = React.useState(localStorage.getItem(`${GameId}_${QuesId}_Info_points`));
  const [questionType, setType] = React.useState(localStorage.getItem(`${GameId}_${QuesId}_Info_questionType`));
  const [videoLink, setVideo] = React.useState(localStorage.getItem(`${GameId}_${QuesId}_Info_videoLink`));
  const [correctAnswer, setCorrect] = React.useState(localStorage.getItem(`${GameId}_${QuesId}_Info_correctAnswer`));
  const [answer1, setAnswer1] = React.useState(localStorage.getItem(`${GameId}_${QuesId}_Info_Answer1`));
  const [answer2, setAnswer2] = React.useState(localStorage.getItem(`${GameId}_${QuesId}_Info_Answer2`));
  const [answer3, setAnswer3] = React.useState(localStorage.getItem(`${GameId}_${QuesId}_Info_Answer3`));
  const [answer4, setAnswer4] = React.useState(localStorage.getItem(`${GameId}_${QuesId}_Info_Answer4`));

  M.AutoInit();

  const handleSave = (event) => {
    localStorage.setItem(`${GameId}_${QuesId}_Info_name`, name);
    localStorage.setItem(`${GameId}_${QuesId}_Info_duration`, duration);
    localStorage.setItem(`${GameId}_${QuesId}_Info_points`, points);
    localStorage.setItem(`${GameId}_${QuesId}_Info_questionType`, questionType);
    localStorage.setItem(`${GameId}_${QuesId}_Info_videoLink`, videoLink);
    localStorage.setItem(`${GameId}_${QuesId}_Info_correctAnswer`, correctAnswer);
    localStorage.setItem(`${GameId}_${QuesId}_Info_Answer1`, answer1);
    localStorage.setItem(`${GameId}_${QuesId}_Info_Answer2`, answer2);
    localStorage.setItem(`${GameId}_${QuesId}_Info_Answer3`, answer3);
    localStorage.setItem(`${GameId}_${QuesId}_Info_Answer4`, answer4);
    M.toast({
      html: 'Save Update Success',
      classes: 'rounded',
    });
    event.preventDefault();
  };

  const pagePrior = (
    <>
      <h2>
        Question Information Update
      </h2>
      <div className="input-field col s12">
        <select
          style={{ display: 'block' }}
          onChange={(e) => {
            setType(e.target.value);
          }}
        >
          <option value="" disabled selected>{localStorage.getItem(`${GameId}_${QuesId}_Info_questionType`)}</option>
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
          placeholder={localStorage.getItem(`${GameId}_${QuesId}_Info_name`)}
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
          placeholder={localStorage.getItem(`${GameId}_${QuesId}_Info_duration`)}
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
          placeholder={localStorage.getItem(`${GameId}_${QuesId}_Info_points`)}
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
          placeholder={localStorage.getItem(`${GameId}_${QuesId}_Info_videoLink`)}
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
          placeholder={localStorage.getItem(`${GameId}_${QuesId}_Info_Answer1`)}
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
          placeholder={localStorage.getItem(`${GameId}_${QuesId}_Info_Answer2`)}
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
          placeholder={localStorage.getItem(`${GameId}_${QuesId}_Info_Answer3`)}
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
          placeholder={localStorage.getItem(`${GameId}_${QuesId}_Info_Answer4`)}
        />
      </div>
    </>
  );
  if (questionType === 'single choice' || questionType === null) {
    return (
      <div className="form">
        {pagePrior}
        <div className="input-field col s12">
          <select
            style={{ display: 'block' }}
            onChange={(e) => {
              setCorrect(e.target.value);
            }}
          >
            <option value="" disabled selected>{localStorage.getItem(`${GameId}_${QuesId}_Info_correctAnswer`)}</option>
            <option value="answer1">Answer 1</option>
            <option value="answer2">Answer 2</option>
            <option value="answer3">Answer 3</option>
            <option value="answer4">Answer 4</option>
          </select>
        </div>
        <input type="submit" value="Save" className="btn waves-effect waves-light" onClick={handleSave} />
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
            for (let i = 0, l = options.length; i < l; i += 1) {
              if (options[i].selected) {
                value.push(options[i].value);
              }
            }
            setCorrect(value);
          }}
        >
          <option value="" disabled selected>{localStorage.getItem(`${GameId}_${QuesId}_Info_correctAnswer`)}</option>
          <option value="answer1">Answer 1</option>
          <option value="answer2">Answer 2</option>
          <option value="answer3">Answer 3</option>
          <option value="answer4">Answer 4</option>
        </select>
      </div>
      <input type="submit" value="Save" className="btn waves-effect waves-light" onClick={handleSave} />
    </div>
  );
}
