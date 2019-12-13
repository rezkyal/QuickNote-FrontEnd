import {addNote, editNote, deleteNote, selectNote, loadNote,loadingListNote,finishedLoadingListNote,deleteAllNote,editSocket} from './actions'
import {errorhandler} from '../error/apihandler'
import {apiurl} from '../../setting'
import axios from 'axios';
import { DateTime } from 'luxon';


export function addNoteFetch() {
    return (dispatch) => {
        let url = apiurl+'api/note/createOneNote'
        return axios.get(url)
        .then(res=>{
            let data = res.data;
            dispatch(addNote(data.NoteID))
        })
        .catch(err=>{
            errorhandler(dispatch,err)
        })
    }
}

export function loadListNoteFetch(){
    return (dispatch) => {
        dispatch(deleteAllNote())
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
        // let url = apiurl+'api/note/updateOneNote'

        // var bodyFormData = new FormData();
        
        // bodyFormData.set("noteid",data.id.toString())
        // bodyFormData.set("title",data.title)
        // bodyFormData.set("note",data.note)
        


        // axios.post(url,bodyFormData,{headers: {'Content-Type': 'multipart/form-data' }})
        // .then(res=>{
        //     dispatch(editNote(data))
        // }).catch(err=>{
        //     errorhandler(dispatch,err)
        // })  

        dispatch(editNote(data))
    }
}

export function deleteNoteFetch(noteid){
    return (dispatch) => {
        let url = apiurl+'api/note/deleteOneNote'
        var bodyFormData = new FormData();

        bodyFormData.set("noteid",noteid.toString())
        return axios.post(url,bodyFormData,{headers: {'Content-Type': 'multipart/form-data' }})
        .then(res=>{
            dispatch(deleteNote(noteid))
        }).catch(err=>{
            errorhandler(dispatch,err)
        })
    }
}

export function selectNoteFetch(noteid,socket){
    return (dispatch) => {
        let url = apiurl+'api/note/readOneNote'
        var bodyFormData = new FormData();

        bodyFormData.set("noteid",noteid.toString())

        return axios.post(url,bodyFormData,{headers: {'Content-Type': 'multipart/form-data' }})
        .then(res=>{
            let data = res.data;
            let note = {
                id:data.NoteID,
                title:data.Title,
                note:data.Note,
                createdOn:DateTime.fromISO(data.CreatedOn),
                updatedOn:DateTime.fromISO(data.UpdatedOn)
            }
            dispatch(editSocket(socket))
            dispatch(editNote(note))
            dispatch(selectNote(noteid))
        }).catch(err=>{
            errorhandler(dispatch,err)
        })
    }
}

export function searchNoteFetch(query){
    return (dispatch) => {
        dispatch(loadingListNote())
        let url = apiurl+'api/note/readSearchNote'
        var bodyFormData = new FormData();

        bodyFormData.set("query",query.toLowerCase())

        return axios.post(url,bodyFormData,{headers: {'Content-Type': 'multipart/form-data' }})
        .then(res=>{
            let data = res.data;
            dispatch(deleteAllNote())
            data.forEach(function (note,index){
                dispatch(loadNote(note))
            })
            dispatch(finishedLoadingListNote())
        }).catch(err=>{
            errorhandler(dispatch,err)
            dispatch(finishedLoadingListNote())
        })
    }
}