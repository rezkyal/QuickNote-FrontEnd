import {ADD_NOTE, EDIT_NOTE, DELETE_NOTE, SELECT_NOTE, LOAD_NOTE, LOADING_LIST_NOTE, FINISHED_LOADING_LIST_NOTE, DELETE_ALL_NOTE} from '../note/actionTypes'

const initialState = {
    allIds: [],
    byIds: {},
    selectedIdNote: null,
    loading: true,
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
        case LOAD_NOTE:{
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
        case LOADING_LIST_NOTE:{
            return {
                ...state,
                loading: true
            }
        }
        case FINISHED_LOADING_LIST_NOTE:{
            return {
                ...state,
                loading: false
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
            let newByIds = {}
            Object.keys(state.byIds).forEach(key=>{
                if (id !== parseInt(key)){
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
        case DELETE_ALL_NOTE:{
            return{
                ...state,
                allIds : [],
                byIds: {},
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