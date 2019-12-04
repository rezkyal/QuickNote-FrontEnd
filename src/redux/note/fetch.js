import {addNote, editNote, deleteNote, selectNote, loadNote,loadingListNote,finishedLoadingListNote} from './actions'
import {errorhandler} from '../error/apihandler'
import {apiurl} from '../../setting'
import axios from 'axios';

export function addNoteFetch() {
    return (dispatch) => {
        let url = apiurl+'api/note/createOneNote'
        return axios.get(url)
        .then(res=>{
            let data = res.data;
            dispatch(addNote(data.NoteId))
        })
        .catch(err=>{
            errorhandler(dispatch,err)
        })
    }
}

export function loadListNoteFetch(){
    return (dispatch) => {
        dispatch(loadingListNote())
        let url = apiurl+'api/note/readAllNote'
        return axios.get(url)
        .then(res=>{
            let data = res.data;
            data.forEach(function (note,index){
                dispatch(loadNote(note))
            })
            dispatch(finishedLoadingListNote())
        })
        .catch(err=>{
            if (err.status !== 401){
                errorhandler(dispatch,err)
            }
            dispatch(finishedLoadingListNote())
        })
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