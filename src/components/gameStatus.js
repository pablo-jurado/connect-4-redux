import React from "react";
import { connect } from "react-redux";
import { newGame } from "../actions";

const GameStatus = ({ player1, player2, turn, status, newGame }) => {
  let newGameButton = null;
  let message = `Player turn: ${turn === "r" ? "red " : "yellow"}`;
  if (status === "winner_red") message = `Winner ${player1.name}`;
  if (status === "winner_yellow") message = `Winner ${player2.name}`;
  if (status === "tie") message = `The game is tie`;

  if (status !== "in_progress")
    newGameButton = (
      <button
        className="play-again"
        onClick={() => {
          newGame();
        }}
      >
        Play Again
      </button>
    );

  return (
    <div>
      <div className="feedback">
        <h1>Connect 4</h1>
        <h2>{message}</h2>
        {newGameButton}
      </div>
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
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    player1: state.player1,
    player2: state.player2,
    turn: state.turn,
    status: state.status
  };
};

const mapDispatchToProps = (dispatch) => ({
  newGame: () => dispatch(newGame())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameStatus);
