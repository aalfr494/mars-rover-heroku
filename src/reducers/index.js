import { combineReducers } from 'redux';
import RoverReducer from './reducer_rover';

const rootReducer = combineReducers({
  roverdata: RoverReducer
});

export default rootReducer;
