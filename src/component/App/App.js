import React from 'react';
import Header from './../Header/Header'
import MainContainer from './../MainContainer/MainContainer'
import './App.scss';

import {changeUserFetch} from './../../redux/user/fetch'
import {getUser} from './../../redux/user/selectors'

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';


class App extends React.Component{
  constructor(props) {
    super(props);

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  shouldComponentRender() {
        const {loading} = this.props;
        if(this.pending === false) return false;
        // more tests
        return true;
  }

  componentDidMount(){
    const {match:{params},changeUser} = this.props;
    console.log(this.props)
    changeUser(params.username);
  }
  
  render(){
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
  return {loading: user.loading}
}

const mapDispatchToProps = dispatch=> bindActionCreators({
  changeUser: changeUserFetch,
},dispatch)

export default connect(null,mapDispatchToProps)(App);
