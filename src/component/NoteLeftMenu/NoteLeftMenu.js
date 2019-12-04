import React from 'react'
import {InputGroup,Spinner,Icon} from '@blueprintjs/core'

import Button from '../Button/Button'
import NoteList from './../NoteList/NoteList'

import { connect } from "react-redux";
import {bindActionCreators} from "redux";

import {addNoteFetch,loadListNoteFetch} from './../../redux/note/fetch'
import {getUser} from './../../redux/user/selectors'
import {getNoteLoading} from './../../redux/note/selectors'
import LoadingScreen from '../LoadingScreen/LoadingScreen';

import './NoteLeftMenu.scss'


class NoteLeftMenu extends React.Component {
    state = {
        filterValue:""
    }

    loadingState() {
        const {loading} = this.props;
        if(loading === false) return false;
        // more tests
        return true;
    }

    loggedIn(){
        const {user} = this.props;
        return user.loggedin
    }

    componentDidMount(){
        const {loadListNote} = this.props
        loadListNote()
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
        
        let content;

        if(this.loadingState()) {
            content = (<LoadingScreen type="cubes" message="Loading Note" />)
        }else if(!this.loggedIn()){
            content = (        
            <div className="splash-screen">
                <div className="splash-container">
                    <div className="loading-splash-icon">
                        <Icon className="icon-margin" icon="lock" iconSize={30} />    
                    </div>
                    <br/>
                    <h3 className="loading-splash-text">
                        Note locked!, input password first
                    </h3>
                </div>
            </div>
        )
        }else{
            content = []
            content.push(
                <div key="1" className="header-note-list">
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
            )
            content.push(<NoteList key="2"/>)
        }



        return(
            <div className="note-left-menu">
                <p className="note-group-title">Note Group - {this.props.user.username}</p>
                {content}
            </div>
        )
    }
}

const mapStateToProps  = state =>{
    const user = getUser(state)
    const loading = getNoteLoading(state)
    return {user,loading}
}

const mapDispatchToProps = dispatch=> bindActionCreators({
    addNote: addNoteFetch,
    loadListNote: loadListNoteFetch
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(NoteLeftMenu)