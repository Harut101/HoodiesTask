import { combineReducers } from 'redux';
import { signIn } from './Reducers/Sign-In';
import { profile } from './Reducers/Profile';


export default combineReducers({
    signIn,
    profile
})