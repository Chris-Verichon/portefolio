import { legacy_createStore as createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from 'src/reducers';
import personalMiddleware from '../middlewares/personnalMiddleware';

const middlewares = applyMiddleware(
  personalMiddleware,
);
const enhancer = composeWithDevTools(middlewares);

const store = createStore(
  // reducer
  rootReducer,
  // enhancer
  enhancer,
);

export default store;
