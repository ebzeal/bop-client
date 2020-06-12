import { USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE } from '../types/auth.types';

const token = localStorage.getItem('userToken');

const initialState = {
  isCreating: false,
  loginErrors: [],
  isAuthenticated: Boolean(token),
  loggedInUser: {}
};

const authReducer = (state = initialState, { type, payload }) => {
  console.log('authReducer -> type', type);
  switch (type) {
    case USER_LOGIN_SUCCESS:
      return { ...state, loggedInUser: payload, loginErrors: [], isCreating: false };
    case USER_LOGIN_FAILURE:
      return { ...state, loginErrors: [...payload], isCreating: false };
    case USER_LOGIN:
      return { ...state, isCreating: payload };
    default:
      return state;
  }
};

export default authReducer;
