import React from 'react'
import './NoteDetail.scss'
export default class NoteDetail extends React.Component{
    render(){
        return(
            <div className="main-frame bg-powder-blue">
                <input placeholder="Title..." type="text" className="note-title white-font" />
                <p className="white-font">Created: 17/11/2019 12:00 PM &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Last edit: 17/11/2019 12:49 PM</p>
                <textarea placeholder="Text..." className="note-text white-font" />
            </div>
        )
    }
}