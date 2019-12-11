import React from 'react';
import Header from './../Header/Header'
import MainContainer from './../MainContainer/MainContainer'
import './App.scss';

import {getNoteSidebar} from '../../redux/note/selectors'
import {toggleSidebarHandler} from '../Header/Header'
import NoteLeftMenu from '../NoteLeftMenu/NoteLeftMenu'
import { toggleSidebar } from '../../redux/note/actions';

import MediaQuery from 'react-responsive'

import {changeUserFetch} from './../../redux/user/fetch'

import {getUser} from './../../redux/user/selectors'

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

import Sidebar from "react-sidebar";

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
    const {sidebar,toggleSidebar} = this.props;
    if(this.loadingState()) return <LoadingScreen type="balls" message="Loading User" />

    return (
      <>
        <MediaQuery minWidth={1224}>
          <div className="App">
            <Header/>
            <MainContainer/>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={1224}>
          <Sidebar
              sidebar={<NoteLeftMenu/>}
              open={sidebar}
              onSetOpen={() => toggleSidebarHandler(sidebar,toggleSidebar)}
              styles={{ sidebar: { background: "white" } }}
          >
            <div className="App">
              <Header/>
              <MainContainer/>
            </div>
          </Sidebar>
        </MediaQuery>
      </>
    );
    
  }
}

const mapStateToProps  = state =>{
  const user = getUser(state)

  let sidebar = getNoteSidebar(state)
  return {user:user,loading: user.loading,sidebar}
}

const mapDispatchToProps = dispatch=> bindActionCreators({
  changeUser: changeUserFetch,
  toggleSidebar: toggleSidebar
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(App);
