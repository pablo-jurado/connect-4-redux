import React from 'react';
import { connect } from 'react-redux';

const GameStatus = (props) => (
  <div>
    <div className='feedback'>
      <h1>Connect 4</h1>
      <h2>feedback</h2>
      {/* <button className='play-again'>Play Again</button> */}
    </div>
    <div className='main-wrapper'>
      <div className='scoreboard'>
        {props.player1.name}
        <br />
        {props.player1.score}
      </div>
      <div className='scoreboard'>
        {props.player2.name}
        <br />
        {props.player2.score}
      </div>
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    player1: state.player1,
    player2: state.player2,
  }
}

// const mapDispatchToProps = dispatch => ({
//   handleClick: (users) => dispatch(updateUsersNames(users))
// })

export default connect(
  mapStateToProps,
  null
)(GameStatus);