import {ADD_NOTE, EDIT_NOTE, DELETE_NOTE} from './actionTypes'

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