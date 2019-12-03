import {CHANGE_USER,LOADING_USER} from '../user/actionTypes'

const initialState = {
    username: "",
    loggedin: false,
    loading: false
}

export default function(state=initialState,action){
    switch(action.type){
        case CHANGE_USER:{
            const{username,loggedin} = action.payload;
            return {
                ...state,
                username: username,
                loggedin: loggedin,
                loading: false
            }
        }
        case LOADING_USER:{
            return {
                loading: true
            }
        }
        default:
            return state;
    }
}