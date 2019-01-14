import React from "react";
import { connect } from "react-redux";
import { newGame, updateScore } from "../actions";

const GameStatus = ({
  player1,
  player2,
  turn,
  status,
  newGame,
  updateScore
}) => {
  return (
    <div>
      <Feedback
        player1={player1}
        player2={player2}
        turn={turn}
        status={status}
        newGame={newGame}
        updateScore={updateScore}
      />
      <ScoreBoard player1={player1} player2={player2} />
    </div>
  );
};

const Feedback = ({ player1, player2, turn, status, newGame, updateScore }) => {
  let message = `Player turn: ${turn === "r" ? "red " : "yellow"}`;

  if (status === "tie") message = `The game is tie`;
  if (status === "winner_red") message = `Winner ${player1.name}`;
  if (status === "winner_yellow") message = `Winner ${player2.name}`;

  return (
    <div className="feedback">
      <h1>Connect 4</h1>
      <h2>{message}</h2>
      <NewGameButton
        status={status}
        newGame={newGame}
        updateScore={updateScore}
      />
    </div>
  );
};

const NewGameButton = ({ status, newGame, updateScore }) => {
  if (status === "in_progress") return null;
  return (
    <button
      className="play-again"
      onClick={() => {
        updateScore(status);
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

const mapStateToProps = (state) => {
  return {
    player1: state.players.player1,
    player2: state.players.player2,
    turn: state.game.turn,
    status: state.game.status
  };
};

const mapDispatchToProps = (dispatch) => ({
  newGame: () => dispatch(newGame()),
  updateScore: (status) => dispatch(updateScore(status))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameStatus);
