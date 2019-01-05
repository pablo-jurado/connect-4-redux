import React from 'react';

class Modal extends React.Component {

  state = {
    player1: 'red',
    player2: 'yellow',
  }

  handleClick = () => {
    console.log(this.state);
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render () {
    return (
      <div className='parent-modal' >
        <div className='modal'>
          <h1>Welcome to Connect 4</h1>
          <h4>Type players names:</h4>
          <input name='player1' className='red-input' onChange={this.handleInput} value={this.state.player1} type='text' />
          <input name='player2' className='yellow-input' onChange={this.handleInput} value={this.state.player2} type='text' />
          <input className='btn-start' type='submit' onClick={this.handleClick} value='&#10148;' />
        </div>
        <div className='modal-back' />
      </div>
    );
  }
}

export default Modal;