import {CHANGE_USER,LOADING_USER, FINISH_LOADING_USER,CHANGE_PASSWORD,CHANGE_NEW_PASSWORD, CHANGE_ERROR_PASSWORD} from '../user/actionTypes'

const initialState = {
    username: "",
    password: "",
    newPassword: "",
    passwordError: "",
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
        case CHANGE_PASSWORD:{
            const{password} = action.payload;
            return{
                ...state,
                password: password 
            }
        }
        case CHANGE_NEW_PASSWORD:{
            const{password} = action.payload;
            return{
                ...state,
                newPassword: password
            }
        }
        case CHANGE_ERROR_PASSWORD:{
            const{error} = action.payload;
            return{
                ...state,
                passwordError: error
            }
        }
        default:
            return state;
    }
}