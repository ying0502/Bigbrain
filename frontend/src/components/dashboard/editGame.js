/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import { getEachQuiz } from '../../actions/admin';

class EditGame extends React.Component {
  componentDidMount() {
    const quizId = this.props.match.params.id;
    this.props.getEachQuiz(quizId);
  }

  renderNoQuestions() {
    console.log(this);
    return (
      <div>1111</div>
    );
  }

  renderQuestions() {
    return (
      <div>
        {this.props.allQuestions.questions.map((item) => (
          // <div className="row">
          //   <div className="col s12 l6">
          //     <div className="card">
          //       <div className="card-content">
          //         <span className="card-title">{item}</span>
          //       </div>
          //       <div className="card-action">
          //         <Link to={`/edit/${this.props.item.id}/`} className="avatar">
          //           <button className="btn" type="button">edit game</button>
          //         </Link>
          //         <span className="right">
          //           {timeTransform(this.props.item.createdAt)}
          //         </span>
          //       </div>
          //     </div>
          //   </div>
          // </div>
          console.log(item)
        ))}

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
