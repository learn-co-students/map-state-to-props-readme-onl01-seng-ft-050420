import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import shoppingListItemReducer from './reducers/shoppingListItemReducer';
import App from './App';
import './index.css';

const store = createStore(
  shoppingListItemReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//provider coming from the react-redux library is doing two things
//alerting that there has been a change in the state and this will rerender our react app
ReactDOM.render(
  <Provider store = {store}>
    
  <App />
  </Provider>,
  document.getElementById('root')
);
//Line 16 with the provider is making it available to all our other components
