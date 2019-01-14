import React from "react";
import { resetGame, resetPlayers, toggleModal } from "../actions";
import { connect } from "react-redux";

const RestartButton = ({ resetGame, toggleModal, resetPlayers }) => (
  <button
    className="restart"
    onClick={() => {
      resetGame();
      resetPlayers();
      toggleModal(true);
    }}
  >
    Restart Game
  </button>
);

const mapDispatchToProps = (dispatch) => ({
  resetGame: () => dispatch(resetGame()),
  resetPlayers: () => dispatch(resetPlayers()),
  toggleModal: (isOpen) => dispatch(toggleModal(isOpen))
});

export default connect(
  null,
  mapDispatchToProps
)(RestartButton);
