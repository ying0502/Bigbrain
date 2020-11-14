import React from 'react';

export default function QuestionPage() {
  const [name, setName] = React.useState('');
  const [duration, setDuration] = React.useState('');
  const [points, setPoints] = React.useState(0);
  const [questionType, setType] = React.useState('');
  const [videoLink, setVideo] = React.useState('');
  const [correctAnswer, setCorrect] = React.useState('');
  const [answer1, setAnswer1] = React.useState('');
  const [answer2, setAnswer2] = React.useState('');
  const [answer3, setAnswer3] = React.useState('');
  const [answer4, setAnswer4] = React.useState('');

  function Payload() {
    console.log(name, duration, points, questionType,
      videoLink, correctAnswer, answer1, answer2,
      answer3, answer4);
  }
  return (
    <div className="form">
      <div className="input-field col s12">
        <select style={{ display: 'block' }} onChange={(e) => { setType(e.target.value); }}>
          <option value="" disabled selected>Choose your question type</option>
          <option value="1">multiple choice</option>
          <option value="2">single choice</option>
        </select>
      </div>
      <div className="input-field col s6">
        Question
        <input id="question" type="text" className="validate" onChange={(e) => { setName(e.target.value); }} />
      </div>
      <div className="input-field col s6">
        Time_limits
        <input id="time" type="text" className="validate" onChange={(e) => { setDuration(e.target.value); }} />
      </div>
      <div className="input-field col s6">
        Points
        <input id="points" type="text" className="validate" onChange={(e) => { setPoints(e.target.value); }} />
      </div>
      <div className="input-field col s6">
        Video Link
        <input id="points" type="text" className="validate" onChange={(e) => { setVideo(e.target.value); }} />
      </div>
      <form action="#">
        <div className="file-field input-field">
          <div className="btn">
            <span>File</span>
            <input type="file" />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>
      </form>
      <div className="input-field col s6">
        Answer 1
        <i className="material-icons prefix">mode_edit</i>
        <textarea id="icon_prefix1" className="materialize-textarea" onChange={(e) => { setAnswer1(e.target.value); }} />
      </div>
      <div className="input-field col s6">
        Answer 2
        <i className="material-icons prefix">mode_edit</i>
        <textarea id="icon_prefix2" className="materialize-textarea" onChange={(e) => { setAnswer2(e.target.value); }} />
      </div>
      <div className="input-field col s6">
        Answer 3
        <i className="material-icons prefix">mode_edit</i>
        <textarea id="icon_prefix3" className="materialize-textarea" onChange={(e) => { setAnswer3(e.target.value); }} />
      </div>
      <div className="input-field col s6">
        Answer 4
        <i className="material-icons prefix">mode_edit</i>
        <textarea id="icon_prefix4" className="materialize-textarea" onChange={(e) => { setAnswer4(e.target.value); }} />
      </div>
      <div className="input-field col s12">
        <select style={{ display: 'block' }} onChange={(e) => { setCorrect(e.target.value); }}>
          <option value="" disabled selected>Choose the right answer</option>
          <option value="ans_1">Answer 1</option>
          <option value="ans_2">Answer 2</option>
          <option value="ans_3">Answer 3</option>
          <option value="ans_4">Answer 4</option>
        </select>
      </div>
      <input type="submit" value="Submit" className="btn waves-effect waves-light" onClick={Payload} />
    </div>
  );
}
