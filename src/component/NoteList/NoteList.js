import React from 'react'

import { connect } from "react-redux";

import {bindActionCreators} from "redux";

import {getNotes,getNoteSocket} from '../../redux/note/selectors'
import {selectNoteFetch} from '../../redux/note/fetch'

import NoteCard from '../NoteCard/NoteCard';

import {getNoteLoading} from './../../redux/note/selectors'
import LoadingScreen from '../LoadingScreen/LoadingScreen';

import './NoteList.scss'

import {wsurl} from '../../setting'
class NoteList extends React.Component{

    loadingState() {
        const {loading} = this.props;
        if(loading === false) return false;
        // more tests
        return true;
    }

    selectNoteHandler(noteid){
        let {socket,selectNote} = this.props;
        if(socket != null){
            socket.close()
        }
        const newSocket = new WebSocket(wsurl+'api/note/ws/'+noteid)
        selectNote(noteid,newSocket)
    }

    render(){
        let {notes,selectedIdNote} = this.props
        if(this.loadingState()) {
            return (<LoadingScreen type="cubes" message="Loading Note" />)
        }else{
            return (
                <div className="body-note-list">
                    {notes && notes.length
                    ? notes.map((notes, index) => {
                        return <NoteCard selectedIdNote={selectedIdNote} key={notes.id} data={notes} onClick={()=>this.selectNoteHandler(notes.id)}/>;
                        })
                    : "List empty, create one by pressing Add New Note button!"}
                </div>
            )
        }
    }
}


const mapStateToProps = state => {
    const notes = getNotes(state);
    const socket = getNoteSocket(state)
    const loading = getNoteLoading(state);
    const selectedIdNote = notes.selectedIdNote;
    return {notes, selectedIdNote,loading,socket}
}

const mapDispatchToProps = dispatch => bindActionCreators({
    selectNote: selectNoteFetch
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(NoteList);