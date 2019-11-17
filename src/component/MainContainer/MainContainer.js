import React from 'react';
import "./MainContainer.scss"
import NoteList from './../NoteList/NoteList'
import NoteDetail from '../NoteDetail/NoteDetail';


export default class MainContainer extends React.Component {
    render(){
        return(
            <div className="main-container">
                <NoteList/>
                <NoteDetail/>
            </div>
        )
    }
}