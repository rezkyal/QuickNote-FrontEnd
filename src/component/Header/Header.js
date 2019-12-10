import React from 'react';
import "./Header.scss"
import {getUser} from '../../redux/user/selectors'
import {getNoteSidebar} from '../../redux/note/selectors'
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import Button from './../Button/Button'
import PasswordButton from '../PasswordButton/PasswordButton';
import { logout } from '../../redux/user/fetch';
import { toggleSidebar } from '../../redux/note/actions';

import { useMediaQuery } from 'react-responsive'
import {isTabletOrMobile, isTabletOrMobileDevice} from '../../mediaquery';

export const toggleSidebarHandler = (sidebar,toggleSidebar) =>{
    toggleSidebar(!sidebar)
}

const Header = ({user,logout,sidebar,toggleSidebar}) =>{

    const isTabletOrMobileQuery = useMediaQuery({query: isTabletOrMobile});
    const isTabletOrMobileDeviceQuery = useMediaQuery({query: isTabletOrMobileDevice});

    let logoutbutton=null;
    let logoutText="Logout";
    if (window.innerWidth <= 1224){
        logoutText="";
    }

    if(user.hasPassword && user.loggedin){
        logoutbutton=(
            <span>
                <Button onClick={logout.bind(this)} icon="log-out" className="white-font red-pastel-hoverable logout-button">{logoutText}</Button>
            </span>
        )
    }
    return (
    <header className="header">
        {isTabletOrMobileQuery && isTabletOrMobileDeviceQuery &&
            <>
                <span>
                    <Button onClick={() => toggleSidebarHandler(sidebar,toggleSidebar)} icon="list" className="white-font purple-pastel-hoverable">List</Button>
                </span>
            </>
        }
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
    let sidebar = getNoteSidebar(store)
    return {user,sidebar}
}

const mapDispatchToProps = (dispatch)=>bindActionCreators({
    logout: logout,
    toggleSidebar: toggleSidebar
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Header);