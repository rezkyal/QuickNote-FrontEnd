import React from 'react'
import { Card } from '@blueprintjs/core';
import './NoteCard.scss'

export default class NoteCard extends React.Component{
    constructor(props){
        super(props)
    }

    ellipsis(string){
        return (string.length > 150) ? string.substr(0, 149) + '&hellip;' : string;
    }

    datetimeconverter(dt){
        return dt.getDate() + "/"
                + (dt.getMonth()+1)  + "/" 
                + dt.getFullYear() + " @ "  
                + dt.getHours() + ":"  
                + dt.getMinutes()
    }
    
    render(){
        return(
            <Card 
                elevation={2} 
                className="note-card bg-dark-gray" 
                interactive={true}
            >
                <p className="white-font title">{(this.props.data.title!=='') ? this.props.data.title : 'No Title...' }</p>
                <p className="white-font time">Created: {this.datetimeconverter(this.props.data.timestamp)}&nbsp;&nbsp;&nbsp;Last edit: {this.datetimeconverter(this.props.data.timestamp)}</p>
                <p className="white-font detail">{(this.props.data.note!=='') ? this.ellipsis(this.props.data.note) : "No Note..."}</p>
            </Card>
        )
    }
}