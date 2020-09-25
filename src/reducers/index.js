import InputReducer from './calcInput';
import {combineReducers} from 'redux';

// not neccesary for this exercise,
// but its a good preparation to add features

const rootReducer = combineReducers({
    input: InputReducer
})

export default rootReducer;