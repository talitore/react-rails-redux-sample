import { combineReducers } from 'redux';
// import counter from './counter';
import { mcqReducer, mcqReducer2 } from './mcq';

const rootReducer = combineReducers({
  mcqReducer, mcqReducer2
});

export default rootReducer;
