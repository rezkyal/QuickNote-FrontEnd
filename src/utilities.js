export function datetimeconverter(dt){
    // return dt.getDate() + "/"
    //         + (dt.getMonth()+1)  + "/" 
    //         + dt.getFullYear() + " @ "  
    //         + dt.getHours() + ":"  
    //         + dt.getMinutes()
    return dt.toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27
}

export function ellipsis(string,count){
    return (string.length > count) ? string.substr(0, count-1) + '...' : string;
}

export function createNotif(title,message){
    return {
        // uid: 'once-please', // you can specify your own uid if required
        title: title,
        message: message,
        position: 'bl',
        autoDismiss: 3
      };
}