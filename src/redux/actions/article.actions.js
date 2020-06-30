import decodeJwt from 'jwt-decode';
import makeRequest from '../../utils/axiosSetup';
import { CREATE_ARTICLE, CREATE_ARTICLE_FAILURE, CREATE_ARTICLE_SUCCESS } from '../types/article.types';

export const newArticle = status => {
  return { type: CREATE_ARTICLE, payload: status };
};

export const createArticleFailure = error => ({ type: CREATE_ARTICLE_FAILURE, payload: error });

export const createArticle = (articleData, history) => async dispatch => {
  console.log('articleData', articleData);
  try {
    dispatch(newArticle(true));
    const {
      data: { payload }
    } = await makeRequest('/blog/article', { method: 'POST', body: articleData });
    console.log('payload', payload);

    dispatch({ type: CREATE_ARTICLE_SUCCESS, payload: { isAuthenticated: true, user: decodeJwt(payload) } });

    return history.push('/admin/add-article');
  } catch (error) {
    console.log('error', error);
    switch (error?.response?.status) {
      case 400:
        return dispatch(createArticleFailure(Object.values(error.response.data.data.error)));
      default:
        return dispatch(createArticleFailure(Object.values(error.response.data.data.error)));
    }
  }
};
