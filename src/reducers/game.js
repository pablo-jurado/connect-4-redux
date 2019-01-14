import { gameStatus } from "../gameLogic";
import { UPDATE_ROW, RESET_GAME, NEW_GAME, TOGGLE_MODAL } from "../actions";
import {
  createEmptyBoard,
  switchTurn,
  isRowAvailable,
  addPieceToRow
} from "../helpers";

const initialState = {
  status: "in_progress",
  winnerPosition: null,
  turn: "r",
  board: createEmptyBoard(),
  isModalOpen: true
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
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
        status: "in_progress",
        winnerPosition: null,
        turn: "r",
        board: createEmptyBoard()
      };

    case NEW_GAME:
      return {
        ...state,
        status: "in_progress",
        board: createEmptyBoard()
      };

    default:
      return state;
  }
};

export default gameReducer;
