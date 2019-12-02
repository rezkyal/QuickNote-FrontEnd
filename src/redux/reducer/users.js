import {CHANGE_USER} from '../user/actionTypes'

const initialState = {
    username: "",
    loggedin: false
}

export default function(state=initialState,action){
    switch(action.type){
        case CHANGE_USER:{
            const{username,loggedin} = action.payload;
            return {
                ...state,
                username: username,
                loggedin: loggedin
            }
        }
        default:
            return state;
    }
}