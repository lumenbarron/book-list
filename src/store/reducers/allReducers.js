import authReducer from './authReducer';
import postReducer from './postReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers ({
    auth : authReducer,
    post : postReducer
})

export default allReducers