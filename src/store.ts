import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import saga from 'saga';
import reducer from 'reducer';

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, logger];
  const store = createStore(reducer, applyMiddleware(...middlewares));
  sagaMiddleware.run(saga);
  return store;
};
