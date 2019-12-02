import {addNote, editNote, deleteNote, selectNote} from './actions'

let localId = 0

export function addNoteFetch() {
    return (dispatch) => {
        dispatch(addNote(localId++))
    }
}

export function editNoteFetch(data) {
    return (dispatch) => {
        dispatch(editNote(data))
    }
}

export function deleteNoteFetch(data){
    return (dispatch) => {
        dispatch(deleteNote(data))
    }
}

export function selectNoteFetch(data){
    return (dispatch) => {
        dispatch(selectNote(data))
    }
}