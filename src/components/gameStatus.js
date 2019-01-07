import React from "react";
import { connect } from "react-redux";
import { newGame } from "../actions";

const GameStatus = ({ player1, player2, turn, status, newGame }) => {
  return (
    <div>
      <Feedback
        player1={player1}
        player2={player2}
        turn={turn}
        status={status}
        newGame={newGame}
      />
      <ScoreBoard player1={player1} player2={player2} />
    </div>
  );
};

const Feedback = ({ player1, player2, turn, status, newGame }) => {
  let message = `Player turn: ${turn === "r" ? "red " : "yellow"}`;
  if (status === "winner_red") message = `Winner ${player1.name}`;
  if (status === "winner_yellow") message = `Winner ${player2.name}`;
  if (status === "tie") message = `The game is tie`;

  return (
    <div className="feedback">
      <h1>Connect 4</h1>
      <h2>{message}</h2>
      <NewGameButton status={status} newGame={newGame} />
    </div>
  );
};

const NewGameButton = ({ status, newGame }) => {
  if (status === "in_progress") return null;
  return (
    <button
      className="play-again"
      onClick={() => {
        newGame();
      }}
    >
      Play Again
    </button>
  );
};

const ScoreBoard = ({ player1, player2 }) => (
  <div className="main-wrapper">
    <div className="scoreboard">
      {player1.name}
      <br />
      {player1.score}
    </div>
    <div className="scoreboard">
      {player2.name}
      <br />
      {player2.score}
    </div>
  </div>
);

const mapStateToProps = state => {
  return {
    player1: state.player1,
    player2: state.player2,
    turn: state.turn,
    status: state.status
  };
};

const mapDispatchToProps = dispatch => ({
  newGame: () => dispatch(newGame())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameStatus);
