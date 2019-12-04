import {SET_NOTIF,DELETE_NOTIF} from '../error/actionTypes'

const initialState = {
    notif: "",
    type: ""
}

export default function(state=initialState,action){
    switch(action.type){
        case SET_NOTIF:{
            const{notif,type} = action.payload;
            return {
                ...state,
                notif: notif,
                type: type
            }
        }
        case DELETE_NOTIF:{
            return {
                ...state,
                notif: "",
                type: ""
            }
        }
        default:
            return state;
    }
}