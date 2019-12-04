import {CHANGE_USER,LOADING_USER, FINISH_LOADING_USER} from '../user/actionTypes'

const initialState = {
    username: "",
    loggedin: false,
    loading: true,
    hasPassword: false
}

export default function(state=initialState,action){
    switch(action.type){
        case CHANGE_USER:{
            const{username,loggedin,hasPassword} = action.payload;
            return {
                ...state,
                username: username,
                loggedin: loggedin,
                hasPassword: hasPassword
            }
        }
        case LOADING_USER:{
            return {
                ...state,
                loading: true
            }
        }
        case FINISH_LOADING_USER:{
            return{
                ...state,
                loading: false
            }
        }
        default:
            return state;
    }
}