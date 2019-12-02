import {CHANGE_USER} from './actionTypes'

export const changeUser = (username,loggedin) => ({
    type: CHANGE_USER,
    payload: {
        username: username,
        loggedin: loggedin
    }
})