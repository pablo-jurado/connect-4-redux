import {
  UPDATE_USERS_NAMES,
  UPDATE_ROW,
  RESET_GAME,
  NEW_GAME
} from "../actions";
import { gameStatus } from "../gameLogic";

function createEmptyBoard() {
  let board = [];
  for (let i = 0; i < 7; i++) {
    let col = [];
    for (let j = 0; j < 6; j++) {
      col.push(null);
    }
    board.push(col);
  }
  return board;
}

function switchTurn(turn) {
  return turn === "r" ? "y" : "r";
}

function isRowAvailable(row) {
  if (row.indexOf(null) !== -1) return true;
  return false;
}

function addPieceToRow(row, player) {
  let i = row.length - 1;
  for (i; i >= 0; i--) {
    if (row[i] === null) {
      row[i] = player;
      break;
    }
  }
  return row;
}

const initialState = {
  player1: {
    name: null,
    score: null
  },
  player2: {
    name: null,
    score: null
  },
  status: "in_progress",
  winnerPosition: null,
  turn: "r",
  board: createEmptyBoard(),
  isModalOpen: true
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USERS_NAMES:
      return Object.assign({}, state, {
        player1: {
          name: action.users.player1,
          score: 0
        },
        player2: {
          name: action.users.player2,
          score: 0
        },
        isModalOpen: false
      });

    case UPDATE_ROW:
      let rowIndex = action.row;
      let row = state.board[rowIndex];

      if (isRowAvailable(row) && state.status === "in_progress") {
        let newRow = addPieceToRow(row, state.turn);
        let newBoard = state.board.slice(0);
        newBoard[rowIndex] = newRow;
        return Object.assign({}, state, {
          board: newBoard,
          turn: switchTurn(state.turn),
          status: gameStatus(state.board).status,
          winnerPosition: gameStatus(state.board).position
        });
      } else {
        return state;
      }

    case RESET_GAME:
      return {
        player1: {
          name: null,
          score: null
        },
        player2: {
          name: null,
          score: null
        },
        status: "in_progress",
        winnerPosition: null,
        turn: "r",
        board: createEmptyBoard(),
        isModalOpen: true
      };

    case NEW_GAME:
      let scorePlayer1 =
        state.status === "winner_red"
          ? state.player1.score + 1
          : state.player1.score;
      let scorePlayer2 =
        state.status === "winner_yellow"
          ? state.player2.score + 1
          : state.player2.score;

      return {
        ...state,
        player1: {
          ...state.player1,
          score: scorePlayer1
        },
        player2: {
          ...state.player2,
          score: scorePlayer2
        },
        status: "in_progress",
        board: createEmptyBoard()
      };

    default:
      return state;
  }
};

export default rootReducer;
