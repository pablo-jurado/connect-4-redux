export const UPDATE_USERS_NAMES = "UPDATE_USERS_NAMES";
export const UPDATE_ROW = "UPDATE_ROW";
export const RESET_GAME = "RESET_GAME";
export const NEW_GAME = "NEW_GAME";

export const updateUsersNames = (users) => {
  return {
    type: UPDATE_USERS_NAMES,
    users
  };
};

export const updateRow = (row) => {
  return {
    type: UPDATE_ROW,
    row
  };
};

export const resetGame = () => {
  return {
    type: RESET_GAME
  };
};

export const newGame = () => {
  return {
    type: NEW_GAME
  };
};
