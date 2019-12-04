import {ADD_NOTE, LOAD_NOTE, LOADING_LIST_NOTE, FINISHED_LOADING_LIST_NOTE, EDIT_NOTE, DELETE_NOTE, SELECT_NOTE} from './actionTypes'
import { DateTime } from 'luxon';

export const addNote = (idNote) => ({
    type: ADD_NOTE,
    payload: {
        id: idNote,
        title: "",
        note: "",
        timestamp: DateTime.local()
    }
})

export const loadNote = (data) => ({
    type: LOAD_NOTE,
    payload: {
        id: data.NoteID,
        title: data.Title,
        note: data.Note,
        timestamp: DateTime.fromISO(data.CreatedOn)
    }
})

export const loadingListNote = () => ({
    type: LOADING_LIST_NOTE
})


export const finishedLoadingListNote = () => ({
    type: FINISHED_LOADING_LIST_NOTE
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