import React from 'react';
import { connect } from 'react-redux';

const GameStatus = ({ player1, player2, turn, status }) => {
  let message = `Player turn: ${ (turn === 'r') ? 'red ': 'yellow' }`;
  if (status === 'winner_red') message = `Winner ${player1.name}`;
  if (status === 'winner_yellow') message = `Winner ${player2.name}`;
  if (status === 'tie') message = `The game is tie`;
  return (
    <div>
      <div className='feedback'>
        <h1>Connect 4</h1>
        <h2>{message}</h2>
        {/* <button className='play-again'>Play Again</button> */}
      </div>
      <div className='main-wrapper'>
        <div className='scoreboard'>
          {player1.name}
          <br />
          {player1.score}
        </div>
        <div className='scoreboard'>
          {player2.name}
          <br />
          {player2.score}
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    player1: state.player1,
    player2: state.player2,
    turn: state.turn,
    status: state.status
  }
}

// const mapDispatchToProps = dispatch => ({
//   handleClick: (users) => dispatch(updateUsersNames(users))
// })

export default connect(
  mapStateToProps,
  null
)(GameStatus);