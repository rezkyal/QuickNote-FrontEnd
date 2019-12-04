import {changeUser,loadingUser,finisihLoadingUser} from './action'
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
        dispatch(changeUser("",false))
        return axios.get(url)
        .then(res=>{
            let data = res.data;
            dispatch(changeUser(data.Username,false))
        })
        .catch(err=>{
            errorhandler(dispatch,err)
        })
    }
}
