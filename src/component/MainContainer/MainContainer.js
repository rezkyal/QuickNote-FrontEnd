import React from 'react';
import "./MainContainer.scss"
import NoteLeftMenu from '../NoteLeftMenu/NoteLeftMenu'
import NoteRightMenu from '../NoteRightMenu/NoteRightMenu';


export default class MainContainer extends React.Component {
    render(){
        return(
            <div className="main-container">
                <NoteLeftMenu/>
                <NoteRightMenu/>
            </div>
        )
    }
}