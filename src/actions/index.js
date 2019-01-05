export const UPDATE_USERS_NAMES = 'UPDATE_USERS_NAMES';

export const updateUsersNames = (users) => {
  return {
    type: UPDATE_USERS_NAMES,
    users
  }
};
