import { combineReducers } from "redux";
import {reducer as notifications} from 'react-notification-system-redux';
import notes from './notes'
import user from './user'

export default combineReducers({notes:notes,user:user,notifications})