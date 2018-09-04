import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';

const reducer = (state = {}) => state;

const middlewares = [logger];

export default () => createStore(reducer, applyMiddleware(...middlewares));
