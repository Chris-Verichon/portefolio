import { combineReducers } from 'redux';
import personalReducer from './personalReducer';

const rootReducer = combineReducers({
  personnal: personalReducer,
});

export default rootReducer;
