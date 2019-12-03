import React from 'react';
import Header from './../Header/Header'
import MainContainer from './../MainContainer/MainContainer'
import './App.scss';

import {changeUserFetch} from './../../redux/user/fetch'
import {getUser} from './../../redux/user/selectors'

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import LoadingScreen from '../LoadingScreen/LoadingScreen';


class App extends React.Component{
  constructor(props) {
    super(props);

    this.loadingState = this.loadingState.bind(this);
  }

  loadingState() {
    const {loading} = this.props;
    if(loading === false) return false;
    // more tests
    return true;
  }

  componentDidMount(){
    const {match:{params},changeUser} = this.props;
    changeUser(params.username);
  }
  
  render(){
    if(this.loadingState()) return <LoadingScreen type="balls" message="Loading Note" />


    return (
      <div className="App">
        <Header/>
        <MainContainer/>
      </div>
    );
    
  }
}

const mapStateToProps  = state =>{
  const user = getUser(state)
  return {user:user,loading: user.loading}
}

const mapDispatchToProps = dispatch=> bindActionCreators({
  changeUser: changeUserFetch,
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(App);
