import { combineReducers } from 'redux';
import galaryReducer from './galaryReducer';

export default combineReducers(
    {
        gallary: galaryReducer
    }
);