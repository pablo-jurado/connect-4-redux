import React from "react";
import { resetGame, toggleModal } from "../actions";
import { connect } from "react-redux";

const RestartButton = ({ resetGame, toggleModal }) => (
  <button
    className="restart"
    onClick={() => {
      resetGame();
      toggleModal(true);
    }}
  >
    Restart Game
  </button>
);

const mapDispatchToProps = (dispatch) => ({
  resetGame: () => dispatch(resetGame()),
  toggleModal: (isOpen) => dispatch(toggleModal(isOpen))
});

export default connect(
  null,
  mapDispatchToProps
)(RestartButton);
