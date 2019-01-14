import { UPDATE_PLAYERS_NAMES, RESET_PLAYERS, UPDATE_SCORE } from "../actions";

const initialState = {
  player1: {
    name: null,
    score: null
  },
  player2: {
    name: null,
    score: null
  }
};

const playersReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PLAYERS_NAMES:
      return {
        ...state,
        player1: {
          name: action.players.player1,
          score: 0
        },
        player2: {
          name: action.players.player2,
          score: 0
        }
      };

    case RESET_PLAYERS:
      return {
        player1: {
          name: null,
          score: null
        },
        player2: {
          name: null,
          score: null
        }
      };

    case UPDATE_SCORE:
      let scorePlayer1 =
        action.status === "winner_red"
          ? state.player1.score + 1
          : state.player1.score;
      let scorePlayer2 =
        action.status === "winner_yellow"
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
        }
      };

    default:
      return state;
  }
};

export default playersReducer;
