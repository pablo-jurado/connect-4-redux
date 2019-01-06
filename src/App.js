import React, { Component } from "react";
import Modal from "./components/modal";
import GameStatus from "./components/gameStatus";
import Board from "./components/board";
import RestartButton from "./components/restartButton";

import footer from "./img/footer.svg";
import cloud from "./img/cloud.svg";

class App extends Component {
  render() {
    return (
      <div id="appContainer">
        <Modal />
        <GameStatus />
        <Board />
        <RestartButton />
        <footer>
          <img src={footer} alt="grass" />
        </footer>
        <img id="cloud1" src={cloud} alt="cloud" />
        <img id="cloud2" src={cloud} alt="cloud" />
      </div>
    );
  }
}

export default App;
