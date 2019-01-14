import { combineReducers } from "redux";
import playersReducer from "./players";
import gameReducer from "./game";

const rootReducer = combineReducers({
  players: playersReducer,
  game: gameReducer
});

export default rootReducer;
