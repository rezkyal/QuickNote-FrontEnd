import {CHANGE_USER,LOADING_USER,FINISH_LOADING_USER,CHANGE_PASSWORD,CHANGE_NEW_PASSWORD, CHANGE_ERROR_PASSWORD} from './actionTypes'

export const changeUser = (username,loggedin,hasPassword) =>({
    type: CHANGE_USER,
    payload: {
        username: username,
        loggedin: loggedin,
        hasPassword: hasPassword
    }
})

export const changePassword = (password) =>({
    type: CHANGE_PASSWORD,
    payload: {
        password: password
    }
})

export const changeNewPassword = (password) =>({
    type: CHANGE_NEW_PASSWORD,
    payload: {
        password: password
    }
})

export const loadingUser = () =>({
    type: LOADING_USER
})

export const finisihLoadingUser = () =>({
    type: FINISH_LOADING_USER
})

export const changeErrorPassword = (error) =>({
    type: CHANGE_ERROR_PASSWORD,
    payload:{
        error:error
    }
})