import { combineReducers } from 'redux';
import FirebaseReducer from './firebase';

const rootReducer = combineReducers({
  firebase: FirebaseReducer,
});

export default rootReducer;
