import React from 'react'
import {Popover,H5,Classes} from '@blueprintjs/core'

import Button from '../Button/Button'

import {deleteNoteFetch} from './../../redux/note/fetch'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import NoteMain from '../../component/NoteMain/NoteMain'

import {getNoteSelected} from './../../redux/note/selectors'

import './NoteRightMenu.scss'



class NoteRightMenu extends React.Component{

    handlerDeleteNote(evt){
        this.props.deleteNote(this.props.selectedIdNote)
    }

    render(){
        if (this.props.selectedIdNote !== null && this.props.selectedIdNote !== undefined){
            return(
                <div className="note-right-menu">
                    <NoteMain/>
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
    return {selectedIdNote}
}

const mapDispatchToProps = dispatch=> bindActionCreators({
    deleteNote: deleteNoteFetch
},dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteRightMenu)