import React from 'react'
import {Popover,H5,Classes} from '@blueprintjs/core'

import Button from '../Button/Button'

import {editNoteFetch, deleteNoteFetch} from './../../redux/note/fetch'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import {getNoteById,getNoteSelected} from './../../redux/note/selectors'

import {datetimeconverter} from './../../utilities'

import './NoteRightMenu.scss'


class NoteRightMenu extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: "",
            note: ""
        }
    }

    componentDidUpdate(prevProps){
        if(this.props.note.id !== prevProps.note.id){
            this.setState({
                title: this.props.note.title,
                note: this.props.note.note
            })
        }
    }

    async handlerEditTitle(evt){
        let value=evt.target.value
        this.props.editNote({
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
        this.props.editNote({
            id:this.props.note.id,
            title:this.state.title,
            note:value,
            timestamp:this.props.note.timestamp
        })
        this.setState({
            note: value
        })
    }

    handlerDeleteNote(evt){
        this.props.deleteNote(this.props.note.id)
    }

    render(){
        if (this.props.note.id !== null && this.props.note.id !== undefined){
            return(
                <div className="note-right-menu">
                    <input 
                        placeholder="Title..." 
                        type="text" 
                        className="note-title" 
                        value={this.state.title} 
                        onChange={this.handlerEditTitle.bind(this)}
                    />
                    <p>Created: {datetimeconverter(this.props.note.timestamp)}</p>
                    <textarea 
                        placeholder="Text..." 
                        className="note-text" 
                        value={this.state.note} 
                        onChange={this.handlerEditNote.bind(this)}
                    />
                    <div className="note-option">
                        <Popover
                            popoverClassName={Classes.POPOVER_CONTENT_SIZING}
                            position="auto"
                        >
                            <Button icon="trash" className="delete-note red-pastel-hoverable">Delete note</Button>
                            <div>
                                <H5>Confirm deletion</H5>
                                <p>Are you sure you want to delete these note? You won't be able to recover them.</p>
                                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 15 }}>
                                    <Button className={"cancel-delete-note grey-pastel-hoverable "+Classes.POPOVER_DISMISS}>
                                        Cancel
                                    </Button>
                                    <Button className="delete-note red-pastel-hoverable" onClick={this.handlerDeleteNote.bind(this)}>
                                        Delete
                                    </Button>
                                </div>
                            </div>
                        </Popover>
                    </div>
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
    const note = getNoteById(state,selectedIdNote)
    return {note}
}

const mapDispatchToProps = dispatch=> bindActionCreators({
    editNote: editNoteFetch,
    deleteNote: deleteNoteFetch
},dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteRightMenu)