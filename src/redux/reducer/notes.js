import {ADD_NOTE, EDIT_NOTE, DELETE_NOTE, SELECT_NOTE} from '../actionTypes'

const initialState = {
    allIds: [],
    byIds: {},
    selectedIdNote: null
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
            let newAllIds = state.allIds.filter(val => val !== id.id)
            let newByIds = {}
            Object.keys(state.byIds).forEach(key=>{
                if (id.id !== parseInt(key)){
                    newByIds[key] = state.byIds[key]
                }
            })
            return{
                ...state,
                allIds : newAllIds,
                byIds: newByIds,
                selectedIdNote: null
            }
        }
        case SELECT_NOTE:{
            const {id} = action.payload;
            return{
                ...state,
                selectedIdNote: id
            }
        }
        default:
            return state;
    }
}