import React from 'react'
import {InputGroup,Spinner,Icon} from '@blueprintjs/core'

import Button from '../Button/Button'
import NoteList from './../NoteList/NoteList'

import { connect } from "react-redux";
import {addNote} from './../../redux/actions'

import './NoteLeftMenu.scss'


class NoteLeftMenu extends React.Component {
    state = {
        filterValue:""
    }

    handleFilterChange = filterValue => {
        this.setState({ filterValue:filterValue.target.value })
        console.log(filterValue.target.value)
    };

    handleAddNote = () => {
        console.log('work')
        this.props.addNote();
    }

    render(){
        const {filterValue} = this.state
        const maybeSpinner = filterValue ? <Spinner size={Icon.SIZE_STANDARD} /> : undefined;
        return(
            <div className="note-list">
                <p className="note-list-title">Note Group</p>
                <div className="header-note-list">
                    <InputGroup
                        leftIcon="search"
                        onChange={this.handleFilterChange}
                        placeholder="Search..."
                        rightElement={maybeSpinner}
                        value={filterValue}
                        minimal={true}
                        className="search-field"
                    />
                    <Button
                        className="add-note green-pastel-hoverable"
                        icon="add"
                        onClick={this.handleAddNote.bind(this)}
                    >
                        Add new note
                    </Button>
                </div>
                <NoteList/>
            </div>
        )
    }
}

export default connect(null,{addNote})(NoteLeftMenu)