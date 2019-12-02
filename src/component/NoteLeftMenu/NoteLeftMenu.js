import React from 'react'
import {InputGroup,Spinner,Icon} from '@blueprintjs/core'

import Button from '../Button/Button'
import NoteList from './../NoteList/NoteList'

import { connect } from "react-redux";
import {bindActionCreators} from "redux";

import {addNoteFetch} from './../../redux/note/fetch'

import './NoteLeftMenu.scss'


class NoteLeftMenu extends React.Component {
    state = {
        filterValue:""
    }

    handleFilterChange = filterValue => {
        this.setState({ filterValue:filterValue.target.value })
    };

    handleAddNote = () => {
        this.props.addNote();
    }

    render(){
        const {filterValue} = this.state
        const maybeSpinner = filterValue ? <Spinner size={Icon.SIZE_STANDARD} /> : undefined;
        return(
            <div className="note-left-menu">
                <p className="note-group-title">Note Group</p>
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

const mapDispatchToProps = dispatch=> bindActionCreators({
    addNote: addNoteFetch
},dispatch)

export default connect(null,mapDispatchToProps)(NoteLeftMenu)