import React from 'react'

import { connect } from "react-redux";

import {bindActionCreators} from "redux";

import {getNotes} from '../../redux/note/selectors'
import {selectNoteFetch} from '../../redux/note/fetch'

import NoteCard from '../NoteCard/NoteCard';

import './NoteList.scss'


const NoteList = ({notes, selectedIdNote, selectNote}) => {
    return(
    <div className="body-note-list">
        {notes && notes.length
        ? notes.map((notes, index) => {
            return <NoteCard selectedIdNote={selectedIdNote} key={notes.id} data={notes} onClick={()=>selectNote(notes.id)}/>;
            })
        : "List empty, create one by pressing Add New Note button!"}
    </div>
)}


const mapStateToProps = state => {
    const notes = getNotes(state);
    const selectedIdNote = state.notes.selectedIdNote
    return {notes, selectedIdNote}
}

const mapDispatchToProps = dispatch => bindActionCreators({
    selectNote: selectNoteFetch
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(NoteList);