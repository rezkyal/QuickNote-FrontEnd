import {SET_ERROR,DELETE_ERROR} from './actionTypes'


export const setError = (error,type) => ({
    type: SET_ERROR,
    payload: {
        error: error,
        type: type,
    }
})

export const deleteError = () => ({
    type: DELETE_ERROR,
    
})