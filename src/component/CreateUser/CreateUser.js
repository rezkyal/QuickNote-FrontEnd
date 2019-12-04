import React from 'react'

import LoadingScreen from './../LoadingScreen/LoadingScreen'

import {createUsernameFetch} from './../../redux/user/fetch'

import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import { getUser } from '../../redux/user/selectors';


class CreateUser extends React.Component{
    constructor(props){
        super(props)
        this.historyHandler=this.historyHandler.bind(this)
    }

    componentDidMount(){
        this.props.createUsername();
    }

    historyHandler(){
        this.props.history.push("/"+this.props.user.username)
    }

    render(){
        if (this.props.user.username === "") return <LoadingScreen type="bars" message="Creating note"/>
        this.historyHandler();
        return null;
    }
}

const mapDispatchToProps = dispatch=> bindActionCreators({
    createUsername: createUsernameFetch
},dispatch)

const mapStateToProps = state=> {
    const user = getUser(state)
    return {user}
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateUser)