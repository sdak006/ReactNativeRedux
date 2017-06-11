import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

export default combineReducers({
    //list of libraries to return to the user
    //key       //reducer
    libraries: LibraryReducer

});