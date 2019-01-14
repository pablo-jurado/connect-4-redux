import { gameStatus } from "../gameLogic";
import {
  UPDATE_USERS_NAMES,
  UPDATE_ROW,
  RESET_GAME,
  NEW_GAME,
  TOGGLE_MODAL
} from "../actions";
import {
  createEmptyBoard,
  switchTurn,
  isRowAvailable,
  addPieceToRow
} from "../helpers";

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
      return {
        ...state,
        player1: {
          name: action.users.player1,
          score: 0
        },
        player2: {
          name: action.users.player2,
          score: 0
        }
      };

    case TOGGLE_MODAL:
      return {
        ...state,
        isModalOpen: action.isOpen
      };

    case UPDATE_ROW:
      let rowIndex = action.row;
      let row = state.board[rowIndex];

      if (isRowAvailable(row) && state.status === "in_progress") {
        let newRow = addPieceToRow(row, state.turn);
        let newBoard = state.board.slice(0);
        newBoard[rowIndex] = newRow;
        return {
          ...state,
          board: newBoard,
          turn: switchTurn(state.turn),
          status: gameStatus(state.board).status,
          winnerPosition: gameStatus(state.board).position
        };
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
        board: createEmptyBoard()
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
