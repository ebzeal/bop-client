import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import './styles/global.scss';
import App from './App';
import store from './redux/store/index';

ReactDOM.render(
  <Provider store={store}>
  <App />,
  </Provider>,
  document.getElementById('root')
);
