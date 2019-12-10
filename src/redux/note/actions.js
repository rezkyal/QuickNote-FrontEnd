import {ADD_NOTE, LOAD_NOTE, LOADING_LIST_NOTE, FINISHED_LOADING_LIST_NOTE, EDIT_NOTE, DELETE_NOTE, DELETE_ALL_NOTE, SELECT_NOTE} from './actionTypes'
import { DateTime } from 'luxon';
import { EDIT_SOCKET } from './actionTypes';

export const addNote = (idNote) => ({
    type: ADD_NOTE,
    payload: {
        id: idNote,
        title: "",
        note: "",
        createdOn: DateTime.local(),
        updatedOn: DateTime.local()
    }
})

export const loadNote = (data) => ({
    type: LOAD_NOTE,
    payload: {
        id: data.NoteID,
        title: data.Title,
        note: data.Note,
        createdOn: DateTime.fromISO(data.CreatedOn),
        updatedOn: DateTime.fromISO(data.UpdatedOn)
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
        createdOn: data.createdOn,
        updatedOn: data.updatedOn
    }
})

export const deleteNote = (data) => ({
    type: DELETE_NOTE,
    payload: {
        id: data
    }
})

export const deleteAllNote = () => ({
    type: DELETE_ALL_NOTE
})

export const selectNote = (data) => ({
    type: SELECT_NOTE,
    payload: {
        id: data
    }
})

export const editSocket = (data) => ({
    type: EDIT_SOCKET,
    payload:{
        socket: data
    }
})