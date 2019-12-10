import React from 'react'
import {InputGroup,Icon} from '@blueprintjs/core'

import Button from '../Button/Button'
import NoteList from './../NoteList/NoteList'

import { connect } from "react-redux";
import {bindActionCreators} from "redux";

import {addNoteFetch,loadListNoteFetch,searchNoteFetch} from './../../redux/note/fetch'


import {getUser} from './../../redux/user/selectors'

import './NoteLeftMenu.scss'
import { getNoteLoading } from '../../redux/note/selectors';


class NoteLeftMenu extends React.Component {
    state = {
        query:"",
        timeout:null
    }

    loggedIn(){
        const {user} = this.props;
        return user.loggedin
    }

    componentDidMount(){
        const {loadListNote} = this.props
        loadListNote()
    }

    handleFilterChange = evt => {
        let {timeout} = this.state
        const {searchNote} = this.props
        if (timeout != null) clearTimeout(timeout)
        let query = evt.target.value
        timeout = setTimeout(
            function(){
                searchNote(query)
            }
            ,500
        )
        
        this.setState({ query ,timeout})
    };

    handleAddNote = () => {
        this.props.addNote();
    }

    render(){
        let {query} = this.state
        let {loading} = this.props
        let content;

        if(!this.loggedIn()){
            content = (        
                <div className="splash-screen">
                    <div className="splash-container">
                        <div className="loading-splash-icon">
                            <Icon className="icon-margin" icon="lock" iconSize={30} />    
                        </div>
                        <br/>
                        <h3 className="loading-splash-text">
                            Note locked!, Unlock first!
                        </h3>
                    </div>
                </div>
            )
        }else{
            content = (<NoteList key="2"/>)
        }

        return(
            <div className="note-left-menu">
                <p className="note-group-title">Note Group - {this.props.user.username}</p>
                <div key="1" className="header-note-list">
                    <InputGroup
                        leftIcon="search"
                        onChange={this.handleFilterChange}
                        placeholder="Search..."
                        value={query}
                        minimal={true}
                        className="search-field"
                    />
                    <Button
                        className="add-note green-pastel-hoverable"
                        icon="add"
                        disabled={loading}
                        onClick={this.handleAddNote.bind(this)}
                    >
                        Add note
                    </Button>
                </div>
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
    loadListNote: loadListNoteFetch,
    searchNote: searchNoteFetch
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(NoteLeftMenu)