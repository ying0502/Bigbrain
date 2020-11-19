/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
/* eslint-disable prefer-template */
/* eslint-disable  react/no-access-state-in-setstate */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getEachQuiz, UpdateGame } from '../../actions/admin';

class EditGame extends React.Component {
  state = {
    question: 1,
    questions: [1],
    newName: localStorage.getItem(`game_${this.props.match.params.id}_name`),
    newThumbNail: localStorage.getItem(`game_${this.props.match.params.id}_thumbnail`),
  }

  async componentDidMount() {
    const quizId = this.props.match.params.id;
    await this.props.getEachQuiz(quizId);
    if (this.props.allQuestions.questions.length > 0) {
      this.setState({ questions: this.props.allQuestions.questions });
    }
  }

  submit = (event) => {
    event.preventDefault();
    console.log(`newName: ${this.state.newName}`);
    console.log(`newThumbnail: ${this.state.newThumbNail}`);
    const CurrentGameId = this.props.match.params.id;
    const questionList = [];
    for (let i = 1; i <= this.state.question; i += 1) {
      const questionInfo = {
        name: localStorage.getItem(`${CurrentGameId}_${i}_Info_name`),
        duration: localStorage.getItem(`${CurrentGameId}_${i}_Info_duration`),
        points: localStorage.getItem(`${CurrentGameId}_${i}_Info_points`),
        questionType: localStorage.getItem(`${CurrentGameId}_${i}_Info_questionType`),
        videoLink: localStorage.getItem(`${CurrentGameId}_${i}_Info_videoLink`),
        correctAnswer: localStorage.getItem(`${CurrentGameId}_${i}_Info_correctAnswer`),
        answers1: localStorage.getItem(`${CurrentGameId}_${i}_Info_Answer1`),
        answers2: localStorage.getItem(`${CurrentGameId}_${i}_Info_Answer2`),
        answers3: localStorage.getItem(`${CurrentGameId}_${i}_Info_Answer3`),
        answers4: localStorage.getItem(`${CurrentGameId}_${i}_Info_Answer4`),
      };
      questionList.push(questionInfo);
    }
    const payLoad = {
      questions: questionList,
      name: this.state.newName,
      thumbnail: this.state.newThumbNail,
    };
    console.log(this.state.question);
    console.log(payLoad);
    UpdateGame(`${this.props.match.params.id}`, payLoad);
  }

  handleNameChange = (e) => {
    this.setState({ newName: e.target.value });
  }

  handleThumbnailChange = (e) => {
    const reader = new FileReader();
    reader.addEventListener('load', (x) => {
      const { result } = x.target;
      this.setState({ newThumbNail: result });
    });
    reader.readAsDataURL(e.target.files[0]);
  }

  handleAdd = async () => {
    await this.setState({ question: this.state.question + 1 });
    this.state.questions.push(this.state.question);
    this.setState({ questions: this.state.questions });
  }

  handleDelete = () => {
    if (this.state.questions.length > 1) {
      this.setState({ question: this.state.question - 1 });
      this.state.questions.pop();
    }
    this.setState({ questions: this.state.questions });
    const CurrentGameId = this.props.match.params.id;
    const i = this.state.question + 1;
    if (`${CurrentGameId}_${i}_Info_name` in localStorage) {
      localStorage.removeItem(`${CurrentGameId}_${i}_Info_name`);
      localStorage.removeItem(`${CurrentGameId}_${i}_Info_duration`);
      localStorage.removeItem(`${CurrentGameId}_${i}_Info_points`);
      localStorage.removeItem(`${CurrentGameId}_${i}_Info_questionType`);
      localStorage.removeItem(`${CurrentGameId}_${i}_Info_videoLink`);
      localStorage.removeItem(`${CurrentGameId}_${i}_Info_correctAnswer`);
      localStorage.removeItem(`${CurrentGameId}_${i}_Info_Answer1`);
      localStorage.removeItem(`${CurrentGameId}_${i}_Info_Answer2`);
      localStorage.removeItem(`${CurrentGameId}_${i}_Info_Answer3`);
      localStorage.removeItem(`${CurrentGameId}_${i}_Info_Answer4`);
    }
  }

  renderNoQuestions() {
    // console.log(this.state.questions);
    return (
      <div className="pageConfig">
        <div>
          <h2>Game Edit</h2>
          New Name:
          <input style={{ width: '350px' }} value={this.state.newName} onChange={this.handleNameChange} placeholder="Change the name of current quiz" id="New_name_1" type="text" className="validate" />
          <form action="#">
            <div className="file-field input-field">
              <div className="btn">
                <span>Update the thumbnail</span>
                <input type="file" multiple onChange={this.handleThumbnailChange} />
              </div>
              <div className="file-path-wrapper">
                <input style={{ width: '350px' }} value={this.state.newThumbNail} id="thumbnailUpdate1" type="text" placeholder="only *.jpg and *.png will be accepted" />
              </div>
            </div>
          </form>
          <div>You have no questions right now, you can add or delete questions</div>
          <div className="row">
            {this.state.questions.map((item, index) => (
              <div className="row">
                <div className="input-field col s12">
                  {/* 显示上次的信息 question */}
                  <input id="input_text" type="text" data-length="30" placeholder={item[index]} />
                  <button type="button" className="btn" onClick={this.handleAdd} style={{ marginRight: '10px', backgroundColor: '#e53935' }}>+</button>
                  <button type="button" className="btn" onClick={this.handleDelete} style={{ marginRight: '10px', backgroundColor: '#01579b' }}>-</button>
                  <Link to={`/edit/${this.props.match.params.id}/${index + 1}`} className="avatar">
                    <button type="button" className="btn">edit</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.submit} style={{ backgroundColor: '#00838f' }}>
            Submit your edit
            <i className="material-icons right">send</i>
          </button>
        </div>
      </div>
    );
  }

  renderQuestions() {
    return (
      <div className="pageConfig">
        <div>
          <h2>Game Edit</h2>
          New Name:
          <input style={{ width: '250px' }} value={this.state.newName} onChange={this.handleNameChange} placeholder="Change the name of current quiz if you wanna to " id="New_name_2" type="text" />
          <form action="#">
            <div className="file-field input-field">
              <div className="btn">
                <span>Update the thumbnail</span>
                <input type="file" multiple onChange={this.handleThumbnailChange} />
              </div>
              <div className="file-path-wrapper">
                <input style={{ width: '260px' }} id="thumbnailUpdate2" value={this.state.newThumbNail} type="text" placeholder="only *.jpg and *.png will be accepted" />
              </div>
            </div>
          </form>
          <div>
            current question number:
            {this.state.questions.length}
            <div className="row">
              <form className="col s6">
                {this.state.questions.map((item, index) => (
                  <div className="row">
                    <div className="input-field col s12">
                      {/* 显示上次的信息 question */}
                      <input id="input_text" type="text" data-length="30" value={`Question ${index + 1}`} />
                      <button type="button" className="btn" onClick={this.handleAdd} style={{ marginRight: '10px', backgroundColor: '#e53935' }}>+</button>
                      <button type="button" className="btn" onClick={this.handleDelete} style={{ marginRight: '10px', backgroundColor: '#01579b' }}>-</button>
                      <Link to={`/edit/${this.props.match.params.id}/${index + 1}`} className="avatar">
                        <button type="button" className="btn">edit</button>
                      </Link>
                    </div>
                  </div>
                ))}
              </form>
            </div>
          </div>
          <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.submit} style={{ backgroundColor: '#00838f' }}>
            Submit your edit
            <i className="material-icons right">send</i>
          </button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="row">
        {this.props.allQuestions && this.props.allQuestions.questions.length === 0
          ? this.renderNoQuestions() : this.renderQuestions()}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  allQuestions: state.admin.allQuestions,
});

export default connect(mapStateToProps, { getEachQuiz })(
  EditGame,
);
