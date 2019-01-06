import React from "react";
import { resetGame } from "../actions";
import { connect } from "react-redux";

const RestartButton = (props) => (
  <button
    className="restart"
    onClick={() => {
      props.resetGame();
    }}
  >
    Restart Game
  </button>
);

const mapDispatchToProps = (dispatch) => ({
  resetGame: () => dispatch(resetGame())
});

export default connect(
  null,
  mapDispatchToProps
)(RestartButton);
