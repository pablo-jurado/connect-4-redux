import { UPDATE_USERS_NAMES } from '../actions';

const initialState = {
  player1: {
    name: null,
    score: null,
  },
  player2: {
    name: null,
    score: null,
  },
  winnerPosition: null,
  turn: 'r',
  isGameOver: null,
  board: null,
  isModalOpen: true
}

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

    default:
      return state;
  }
}

export default rootReducer;