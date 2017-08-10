import * as types from './types';

export function fetchUsersRequest() {
  return {
    type: types.FETCH_USERS_REQUEST,
  };
}

export function fetchUsersSuccess(users) {
  return {
    type: types.FETCH_USERS_SUCCESS,
    data: users,
  };
}

export function fetchUsersError(error) {
  return {
    type: types.FETCH_USERS_ERROR,
    data: error,
  };
}
