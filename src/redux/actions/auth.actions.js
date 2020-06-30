import decodeJwt from 'jwt-decode';
import makeRequest from '../../utils/axiosSetup';
import { USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE } from '../types/auth.types';

export const userLogin = status => {
  return { type: USER_LOGIN, payload: status };
};

export const userLoginFailure = error => ({ type: USER_LOGIN_FAILURE, payload: error });

export const loginUser = (userData, history) => async dispatch => {
  try {
    dispatch(userLogin(true));
    const {
      data: { payload }
    } = await makeRequest('/auth/login', { method: 'POST', body: userData });

    localStorage.setItem('userToken', payload);

    dispatch({ type: USER_LOGIN_SUCCESS, payload: { isAuthenticated: true, user: decodeJwt(payload) } });

    return history.push('/admin/add-article');
  } catch (error) {
    switch (error?.response?.status) {
      case 400:
        return dispatch(userLoginFailure(Object.values(error.response.data.data.error)));
      default:
        return dispatch(userLoginFailure(Object.values(error.response.data.data.error)));
    }
  }
};
