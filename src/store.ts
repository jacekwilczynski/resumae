import { AnyAction, applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import saga from 'saga';

const reducer = (state = {}, action: AnyAction) => state || action;

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, logger];
  const store = createStore(reducer, applyMiddleware(...middlewares));
  sagaMiddleware.run(saga);
  return store;
};
