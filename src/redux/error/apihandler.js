
import {createNotif} from '../../utilities'
import Notifications from 'react-notification-system-redux'

export function errorhandler(dispatch,error){
    // Error 😨
    let message;
    if (error.response) {
        /*
            * The request was made and the server responded with a
            * status code that falls out of the range of 2xx
            */
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        message = "Error! (Status: "+error.response.status+"). "+error.response.data.message
    } else if (error.request) {
        /*
            * The request was made but no response was received, `error.request`
            * is an instance of XMLHttpRequest in the browser and an instance
            * of http.ClientRequest in Node.js
            */
        console.log(error.request);
        message = "Connection error! try again later"
    } else {
        // Something happened in setting up the request and triggered an Error
        console.log('Error', error.message);
        message = "Error! "+error.message
    }
    let notif = createNotif("Connection error!",message)
    dispatch(Notifications.error(notif))
}