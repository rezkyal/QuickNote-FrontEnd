import {changeUser} from './action'

export function changeUserFetch(username) {
    let loggedin=true;
    return (dispatch) => {
        dispatch(changeUser(username,loggedin))
    }
}