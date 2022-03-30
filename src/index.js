import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';/* Como o arquivo principal dos reducers já tem nome index.js, então eu não preciso sizer explicitamente o nome do arquivo, só da pasta - isso é do JavaScript, do ES6 */

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

