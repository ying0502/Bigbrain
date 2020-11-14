/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
/* eslint-disable prefer-template */
/* eslint-disable  react/no-access-state-in-setstate */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getEachQuiz } from '../../actions/admin';

class EditGame extends React.Component {
  state = {
    question: 1,
    questions: [1],
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
  }

  renderNoQuestions() {
    console.log(this.state.questions);
    return (
      <div>
        <div>You have no questions right now, you can add or delete questions</div>
        current question number:
        {this.state.question}
        <div className="row">
          <form className="col s6" onSubmit={this.submit}>
            {this.state.questions.map(() => (
              <div className="row">
                <div className="input-field col s12">
                  {/* 可以想想placeholder放什么 */}
                  <input id="input_text" type="text" data-length="30" placeholder="question detail" />
                  <button type="button" className="btn" onClick={this.handleAdd} style={{ marginRight: '10px' }}>+</button>
                  <button type="button" className="btn" onClick={this.handleDelete} style={{ marginRight: '10px' }}>-</button>
                  <Link to={`/edit/${this.props.match.params.id}/${this.state.question}`} className="avatar"><button type="button" className="btn">edit</button></Link>
                </div>
              </div>
            ))}
          </form>
        </div>
      </div>
    );
  }

  renderQuestions() {
    return (
      <div>
        <div>
          current question number:
          {this.state.questions.length}
          <div className="row">
            <form className="col s6" onSubmit={this.submit}>
              {this.state.questions.map((item, index) => (
                <div className="row">
                  <div className="input-field col s12">
                    {/* 显示上次的信息 question */}
                    <input id="input_text" type="text" data-length="30" placeholder={item[index]} />
                    <button type="button" className="btn" onClick={this.handleAdd} style={{ marginRight: '10px' }}>+</button>
                    <button type="button" className="btn" onClick={this.handleDelete} style={{ marginRight: '10px' }}>-</button>
                    <Link to={`/edit/${this.props.match.params.id}/${this.state.question}`} className="avatar"><button type="button" className="btn">edit</button></Link>
                  </div>
                </div>
              ))}
            </form>
          </div>
        </div>

      </div>
    );
  }

  render() {
    return (
      <div className="row">
        {/* 分别渲染已经有问题的和没问题的 */}
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
