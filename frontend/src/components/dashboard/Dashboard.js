/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import GameItem from './gameItem';
import { getQuiz } from '../../actions/admin';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.getQuiz();
    // console.log(this.props.quizzes.length);
  }

  render() {
    return (
      this.props.quizzes && this.props.quizzes.length > 0 ? this.props.quizzes.map((item) => (
        <div key={item.id}>
          {' '}
          <GameItem item={item} />
        </div>
      )) : <div>no quiz now</div>
    );
  }
}

const mapStateToProps = (state) => ({
  quizzes: state.admin.quizzes,
});
export default connect(mapStateToProps, { getQuiz })(
  Dashboard,
);
