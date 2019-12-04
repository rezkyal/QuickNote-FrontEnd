import {changeUser,loadingUser,finisihLoadingUser,changePassword,changeNewPassword,changeErrorPassword} from './actions'
import {deleteAllNote} from '../note/actions'
import {errorhandler} from '../error/apihandler'
import {setError} from '../error/action'
import {apiurl} from '../../setting'
import axios from 'axios';

export function changeUserFetch(username) {
    return (dispatch) => {
        dispatch(loadingUser())
        let loggedin,hasPassword;
        let url = apiurl+'api/user/initUser/'+username
        return axios.get(url)
        .then(res=>{
            let data = res.data;
            if (data.status === "1"){
                loggedin = data.loggedin==="true" ? true : false
                hasPassword = data.hasPassword==="true" ? true : false
                dispatch(changeUser(username,loggedin,hasPassword))
            }else{
                dispatch(setError("Server error!","danger"))
            }
            dispatch(finisihLoadingUser())
        })
        .catch(err=>{
            errorhandler(dispatch,err)
            dispatch(finisihLoadingUser())
        })
    }
}

export function createUsernameFetch() {
    return (dispatch) => {
        let url = apiurl+'api/user'
        dispatch(changeUser("",true,false))
        return axios.get(url)
        .then(res=>{
            let data = res.data;
            dispatch(changeUser(data.Username,true,false))
        })
        .catch(err=>{
            errorhandler(dispatch,err)
        })
    }
}


export function login(password){
    return (dispatch) => {
        let url = apiurl+'api/user/login'
        var bodyFormData = new FormData();

        bodyFormData.set("password",password)

        return axios.post(url,bodyFormData,{headers: {'Content-Type': 'multipart/form-data' }})
        .then(res=>{
            let data = res.data;
            if(data.status === "1"){
                dispatch(changeUser(data.username,true,true))
                dispatch(changeErrorPassword(""))
                dispatch(changePassword(""))
            }else{
                dispatch(changeErrorPassword("Wrong Password!"))
            }
        })
        .catch(err=>{
            errorhandler(dispatch,err)
        })
    }
}

export function logout(){
    return (dispatch) => {
        let url = apiurl+'api/user/logout'

        return axios.get(url)
        .then(res=>{
            let data = res.data;
            if(data.status === "1"){
                dispatch(changeUser(data.username,false,true))
                dispatch(deleteAllNote())
            }
        })
        .catch(err=>{
            errorhandler(dispatch,err)
        })
    }
}

export function setPassword(password){
    return (dispatch) => {
        if (password===""){
            return dispatch(changeErrorPassword("Password can't be null!"))
        }
        let url = apiurl+'api/user/setNewPassword'
        var bodyFormData = new FormData();

        bodyFormData.set("password",password)

        return axios.post(url,bodyFormData,{headers: {'Content-Type': 'multipart/form-data' }})
        .then(res=>{
            let data = res.data;
            if(data.status === "1"){
                dispatch(changeUser(data.username,true,true))
                dispatch(changeErrorPassword(""))
                dispatch(changePassword(""))
            }
        })
        .catch(err=>{
            errorhandler(dispatch,err)
        })
    }
}

export function changeOldPassword(oldPassword,newPassword){
    
    return (dispatch) => {
        if (newPassword===""){
            return dispatch(changeErrorPassword("New password can't be null!"))
        }
        let url = apiurl+'api/user/changePassword'
        var bodyFormData = new FormData();

        bodyFormData.set("oldpassword",oldPassword)
        bodyFormData.set("newpassword",newPassword)

        return axios.post(url,bodyFormData,{headers: {'Content-Type': 'multipart/form-data' }})
        .then(res=>{
            let data = res.data;
            if(data.status === "1"){
                dispatch(changeUser(data.username,true,true))
                dispatch(changeErrorPassword(""))
                dispatch(changePassword(""))
                dispatch(changeNewPassword(""))
            }
        })
        .catch(err=>{
            if (err.response.status === 400){
                if(err.response.data.status==="0"){
                    dispatch(changeErrorPassword(err.response.data.message))
                }
            }
            errorhandler(dispatch,err)
        })
    }
}