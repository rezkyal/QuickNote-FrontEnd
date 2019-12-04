import {CHANGE_USER,LOADING_USER,FINISH_LOADING_USER} from './actionTypes'

export const changeUser = (username,loggedin) =>({
    type: CHANGE_USER,
    payload: {
        username: username,
        loggedin: loggedin
    }
})


export const loadingUser = () =>({
    type: LOADING_USER
})

export const finisihLoadingUser = () =>({
    type: FINISH_LOADING_USER
})