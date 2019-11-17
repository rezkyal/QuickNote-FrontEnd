import React from 'react'
import './NoteList.scss'
import '../NoteCard/NoteCard'
import { connect } from "react-redux";
import NoteCard from '../NoteCard/NoteCard';
import {getNotes} from '../../redux/selectors'


const NoteList = ({notes}) => {
    return(
    <div className="body-note-list">
        {notes && notes.length
        ? notes.map((notes, index) => {
            return <NoteCard key={notes.id} notes={notes} />;
            })
        : "List empty, create one by pressing Add New Note button!"}
    </div>
)}


const mapStateToProps = state => {
    const notes = getNotes(state);
    console.log(notes)
    return {notes}
}

export default connect(mapStateToProps)(NoteList);