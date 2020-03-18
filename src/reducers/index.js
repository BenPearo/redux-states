import counterReducer from './counter';
import loggedReducer from './isLogged';
import {combineReducers} from 'redux';

// lets me access all reducers in the same spot
const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
});

export default allReducers;