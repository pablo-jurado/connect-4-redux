import React from "react";
import { updateUsersNames, toggleModal } from "../actions";
import { connect } from "react-redux";

class Modal extends React.Component {
  constructor(props) {
    super();
  }
  state = {
    player1: "Red",
    player2: "Yellow"
  };

  handleClick = () => {
    this.props.handleClick(this.state);
    this.props.toggleModal(false);

    this.setState({
      player1: "Red",
      player2: "Yellow"
    });
  };

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    if (!this.props.isModalOpen) return null;
    return (
      <div className="parent-modal">
        <div className="modal">
          <h1>Welcome to Connect 4</h1>
          <h4>Type players names:</h4>
          <input
            name="player1"
            className="red-input"
            onChange={this.handleInput}
            value={this.state.player1}
            type="text"
          />
          <input
            name="player2"
            className="yellow-input"
            onChange={this.handleInput}
            value={this.state.player2}
            type="text"
          />
          <input
            className="btn-start"
            type="submit"
            onClick={this.handleClick}
            value="&#10148;"
          />
        </div>
        <div className="modal-back" />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isModalOpen: state.isModalOpen
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleClick: (users) => dispatch(updateUsersNames(users)),
  toggleModal: (isOpen) => dispatch(toggleModal(isOpen))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
