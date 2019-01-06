export const UPDATE_USERS_NAMES = 'UPDATE_USERS_NAMES';
export const UPDATE_ROW = 'UPDATE_ROW';

export const updateUsersNames = (users) => {
  return {
    type: UPDATE_USERS_NAMES,
    users
  }
};

export const updateRow = (row) => {
  return {
    type: UPDATE_ROW,
    row
  }
};
