/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
import React from 'react';
import { connect } from 'react-redux';
import GameItem from './gameItem';
import { getQuiz } from '../../actions/admin';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.getQuiz();
    // console.log(this.props.quizzes.length);
    this.props.quizzes.map((item) => {
      localStorage.setItem(`game_${item.id}_name`, `${item.name}`);
      localStorage.setItem(`game_${item.id}_thumbnail`, `${item.thumbnail}`);
      return 0;
    });
  }

  reRender = () => {
    this.props.getQuiz();
  }

  render() {
    return (
      <div className="centerCard">
        {this.props.quizzes && this.props.quizzes.length > 0 ? this.props.quizzes.map((item) => (
          <GameItem item={item} key={item.id} reRender={this.reRender} />
        )) : <div>no quiz now</div>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  quizzes: state.admin.quizzes,
});
export default connect(mapStateToProps, { getQuiz })(
  Dashboard,
);
