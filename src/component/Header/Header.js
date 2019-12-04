import React from 'react';
import "./Header.scss"
import {getUser} from '../../redux/user/selectors'
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import Button from './../Button/Button'
import PasswordButton from '../PasswordButton/PasswordButton';
import { logout } from '../../redux/user/fetch';

const Header = ({user,logout}) =>{
    let logoutbutton=null;
    if(user.hasPassword && user.loggedin){
        logoutbutton=(
            <span>
                <Button onClick={logout.bind(this)} icon="log-out" className="white-font red-pastel-hoverable logout-button">Logout</Button>
            </span>
        )
    }
    return (
    <header className="header">
        <p className="title-font">
            QuikNote
        </p>
        <div className="header-button">
            <PasswordButton />
            {logoutbutton}
        </div>
    </header>
)}

const mapStateToProps = (store)=>{
    let user = getUser(store)
    return {user}
}

const mapDispatchToProps = (dispatch)=>bindActionCreators({
    logout: logout
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Header);