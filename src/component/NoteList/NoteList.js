import React from 'react'
import {InputGroup,Spinner,Icon, Button} from '@blueprintjs/core'
import './NoteList.scss'
import NoteCard from '../NoteCard/NoteCard';


export default class NoteList extends React.Component {
    state = {
        filterValue:""
    }

    handleFilterChange = filterValue => {
        this.setState({ filterValue:filterValue.target.value })
        console.log(filterValue.target.value)
    };

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
                        className="add-note"
                        intent="success"
                        icon="add"
                        minimal={true}
                    >
                        Add new note
                    </Button>
                </div>
                <div className="body-note-list">
                    <NoteCard/>
                    <NoteCard/>
                    <NoteCard/>
                </div>
            </div>
        )
    }
}