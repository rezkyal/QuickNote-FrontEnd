export function datetimeconverter(dt){
    return dt.getDate() + "/"
            + (dt.getMonth()+1)  + "/" 
            + dt.getFullYear() + " @ "  
            + dt.getHours() + ":"  
            + dt.getMinutes()
}

export function ellipsis(string,count){
    return (string.length > count) ? string.substr(0, count-1) + '...' : string;
}