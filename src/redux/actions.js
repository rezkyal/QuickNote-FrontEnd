import {ADD_NOTE, EDIT_NOTE, DELETE_NOTE, SELECT_NOTE} from './actionTypes'

let localNoteId = 0;

export const addNote = () => ({
    type: ADD_NOTE,
    payload: {
        id: ++localNoteId,
        title: "",
        note: "",
        timestamp: new Date()
    }
})

export const editNote = (data) => ({
    type: EDIT_NOTE,
    payload: {
        id: data.id,
        title: data.title,
        note: data.note,
        timestamp: data.timestamp
    }
})

export const deleteNote = (data) => ({
    type: DELETE_NOTE,
    payload: {
        id: data
    }
})

export const selectNote = (data) => ({
    type: SELECT_NOTE,
    payload: {
        id: data
    }
})