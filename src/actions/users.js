export const UPDATE_PLAYERS_NAMES = "UPDATE_PLAYERS_NAMES";
export const RESET_PLAYERS = "RESET_PLAYERS";
export const UPDATE_SCORE = "UPDATE_SCORE";

export const updatePlayersNames = (players) => {
  return {
    type: UPDATE_PLAYERS_NAMES,
    players
  };
};

export const resetPlayers = () => {
  return {
    type: RESET_PLAYERS
  };
};

export const updateScore = (status) => {
  return {
    type: UPDATE_SCORE,
    status
  };
};
