import { CREATE_ARTICLE, CREATE_ARTICLE_FAILURE, CREATE_ARTICLE_SUCCESS } from '../types/article.types';
import { boolean } from 'yup';

const token = localStorage.getItem('userToken');

const initialState = {
  isCreating: false,
  articleErrors: [],
  isCreated: false,
  articles: [],
  newArticle: {}
};

const articleReducer = (state = initialState, { type, payload }) => {
  console.log('articleReducer -> type', type);
  switch (type) {
    case CREATE_ARTICLE_SUCCESS:
      return {
        ...state,
        newArticle: payload,
        articles: [...payload],
        articleErrors: [],
        isCreating: false,
        isCreated: true
      };
    case CREATE_ARTICLE_FAILURE:
      return { ...state, articleErrors: [...payload], isCreating: false, isCreated: false };
    case CREATE_ARTICLE:
      return { ...state, isCreating: payload };
    default:
      return state;
  }
};

export default articleReducer;
