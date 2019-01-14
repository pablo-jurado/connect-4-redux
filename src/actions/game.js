export const UPDATE_ROW = "UPDATE_ROW";
export const RESET_GAME = "RESET_GAME";
export const NEW_GAME = "NEW_GAME";
export const TOGGLE_MODAL = "TOGGLE_MODAL";

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

export const toggleModal = (isOpen) => {
  return {
    type: TOGGLE_MODAL,
    isOpen
  };
};
