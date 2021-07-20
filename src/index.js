import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { currentUserReducer } from './reducers/currentUserReducer';

const rootReducer = combineReducers({
  currentUser: currentUserReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));