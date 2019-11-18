import React from 'react'
import { Card } from '@blueprintjs/core';

import {datetimeconverter,ellipsis} from './../../utilities'

import './NoteCard.scss'

export default class NoteCard extends React.Component{

    render(){
        console.log(this.props.selectedIdNote === this.props.data.id)
        const className = (this.props.selectedIdNote === this.props.data.id) ? "note-card bg-black" : "note-card bg-dark-gray"
        return(
            <Card 
                elevation={2} 
                className={className}
                interactive={true}
                onClick={this.props.onClick}
            >
                <p className="white-font title">{(this.props.data.title!=='') ? ellipsis(this.props.data.title,150) : 'No Title...' }</p>
                <p className="white-font time">Created: {datetimeconverter(this.props.data.timestamp)}</p>
                <p className="white-font detail">{(this.props.data.note!=='') ? ellipsis(this.props.data.note,300) : "No Note..."}</p>
            </Card>
        )
    }
}