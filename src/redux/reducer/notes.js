import {ADD_NOTE, EDIT_NOTE, DELETE_NOTE} from '../actionTypes'

const initialState = {
    allIds: [],
    byIds: {}
}

export default function(state=initialState, action) {
    switch(action.type){
        case ADD_NOTE:{
            const {id,title,note,timestamp} = action.payload;
            return {
                ...state,
                allIds: [...state.allIds, id],
                byIds: {
                    ...state.byIds,
                    [id]: {
                        title,
                        note,
                        timestamp
                    }
                }
            }
        }
        case EDIT_NOTE:{
            const {id,title,note,timestamp} = action.payload;
            return{
                ...state,
                byIds: {
                    ...state.byIds,
                    [id]:{
                        ...state.byIds[id],
                        title,
                        note,
                        timestamp
                    }
                }
            }
        }
        case DELETE_NOTE:{
            const {id} = action.payload;
            let newAllIds = state.allIds.filter(val => val !== id)
            let newByIds = state.byIds.filter(val => val !== state.byIds[id])
            return{
                ...state,
                allIds : newAllIds,
                byIds: newByIds
            }
        }
        default:
            return state;
    }
}