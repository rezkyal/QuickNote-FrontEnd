import {changeUser,loadingUser} from './action'
import {errorhandler} from '../error/apihandler'
import {setError} from '../error/action'
import {apiurl} from '../../setting'
import axios from 'axios';

export function changeUserFetch(username) {
    return (dispatch) => {
        dispatch(loadingUser())
        let loggedin;
        let url = apiurl+'api/user/initUser/'+username
        return axios.get(url)
        .then(res=>{
            let data = res.data;
            if (data.status === "1"){
                loggedin = data.loggedin==="true" ? true : false
                dispatch(changeUser(username,loggedin))
            }else{
                dispatch(setError("Server error!","danger"))
            }
        })
        .catch(err=>{
            errorhandler(dispatch,err)
        })
    }
}