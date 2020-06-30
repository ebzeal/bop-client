import { combineReducers } from 'redux';

import authReducer from './auth.reducer';
import articleReducer from './article.reducer';

const reducers = combineReducers({
  user: authReducer,
  article: articleReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }

  return reducers(state, action);
};

export default rootReducer;
