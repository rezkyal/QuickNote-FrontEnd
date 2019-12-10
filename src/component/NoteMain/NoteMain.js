import React from 'react'

import {editNoteFetch} from './../../redux/note/fetch'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import {getNoteById,getNoteSelected,getNoteSocket} from './../../redux/note/selectors'
import { DateTime } from 'luxon';
import {datetimeconverter} from './../../utilities'

import './NoteMain.scss'

class NoteMain extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: "",
            note: "",
            timeout: null,
        }
    }

    componentDidMount(){
        this.setState({
            title: this.props.note.title,
            note: this.props.note.note
        })
        this.responseSocket(this.props)
    }

    componentDidUpdate(prevProps){
        if(this.props.note.id !== prevProps.note.id){
            this.setState({
                title: this.props.note.title,
                note: this.props.note.note
            })
            this.responseSocket(this.props)
        }
    }

    responseSocket(props){
        const {socket,editNote,note} = props;
        socket.onmessage = function(event){
            let data = JSON.parse(event.data);
            editNote({
                id:data.noteid,
                title:data.title,
                note:data.note,
                createdOn:note.createdOn,
                updatedOn:DateTime.fromISO(data.timestamp)
            })
        }
    }

    editNoteSocket(data){
        let {timeout} = this.state
        if (timeout != null) clearTimeout(timeout)
        let jsondata = {
            "noteid":data.id.toString(),
            "title":data.title,
            "note":data.note,
            "timestamp":data.timestamp
        }
        const socket = this.props.socket
        timeout = setTimeout(
            function(){
                socket.send(JSON.stringify(jsondata))
            }
            ,500
        )
        this.setState({timeout})
    }
    
    async handlerEditTitle(evt){
        let value=evt.target.value
        this.editNoteSocket({
            id:this.props.note.id,
            title:value,
            note:this.state.note,
            timestamp:this.props.note.timestamp
        })
        this.setState({
            title: value
        })
    }

    async handlerEditNote(evt){
        let value=evt.target.value
        this.editNoteSocket({
            id:this.props.note.id,
            title:this.state.title,
            note:value,
            timestamp:this.props.note.timestamp
        })
        this.setState({
            note: value
        })
    }


    render(){
        const {note} = this.props;
        if (note.id !== null && note.id !== undefined){
            return(
                <div>
                    <input 
                        placeholder="Title..." 
                        type="text" 
                        className="note-title" 
                        value={this.state.title} 
                        onChange={this.handlerEditTitle.bind(this)}
                    />
                    <p>Created: {datetimeconverter(note.createdOn)} | Updated: {datetimeconverter(note.updatedOn)}</p>
                    <textarea 
                        placeholder="Text..." 
                        className="note-text" 
                        value={this.state.note} 
                        onChange={this.handlerEditNote.bind(this)}
                    />
                </div>
            )
        }
        else{
            return(
                <div className="note-right-menu">
                    <p>No note selected, select one from the list on the left!</p>
                </div>
            )
        }
    }
}

const mapStateToProps  = state =>{
    const selectedIdNote = getNoteSelected(state)
    const socket = getNoteSocket(state)
    const note = getNoteById(state,selectedIdNote)
    return {note,socket}
}

const mapDispatchToProps = dispatch=> bindActionCreators({
    editNote: editNoteFetch
},dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteMain)