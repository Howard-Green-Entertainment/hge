import { combineReducers } from 'redux';
import { firebaseReducer as firebase } from 'react-redux-firebase';
import clients from './client-reducers';

const combinedReducers = combineReducers({
    firebase,
    clients
})

export default combinedReducers;
