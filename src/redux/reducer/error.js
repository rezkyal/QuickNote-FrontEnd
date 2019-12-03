import {SET_ERROR,DELETE_ERROR} from '../error/actionTypes'

const initialState = {
    error: "",
    type: ""
}

export default function(state=initialState,action){
    switch(action.type){
        case SET_ERROR:{
            const{error,type} = action.payload;
            return {
                ...state,
                error: error,
                type: type
            }
        }
        case DELETE_ERROR:{
            return {
                ...state,
                error: "",
                type: ""
            }
        }
        default:
            return state;
    }
}