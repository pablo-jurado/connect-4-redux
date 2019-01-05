import React, { Component } from 'react';
import Modal from './components/modal';
import GameStatus from './components/gameStatus';
import Board from './components/board';

import footer from './img/footer.svg';
import cloud from './img/cloud.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id='appContainer'>
        <Modal />
        <GameStatus />
        <Board />

        <button className='restart' onClick={()=> { console.log('restart'); }}>Restart Game</button>

        <footer><img src={footer} alt="grass"/></footer>
        <img id='cloud1' src={cloud} alt="cloud" />
        <img id='cloud2' src={cloud} alt="cloud"/>
      </div>
    );
  }
}

export default App;
