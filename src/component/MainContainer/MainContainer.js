import React from 'react';
import "./MainContainer.scss"
import NoteLeftMenu from '../NoteLeftMenu/NoteLeftMenu'
import NoteRightMenu from '../NoteRightMenu/NoteRightMenu';
import { useMediaQuery } from 'react-responsive'
import {isTabletOrMobile, isTabletOrMobileDevice} from '../../mediaquery';


const MainContainer = () => {

    const isTabletOrMobileQuery = useMediaQuery({query: isTabletOrMobile});
    const isTabletOrMobileDeviceQuery = useMediaQuery({query: isTabletOrMobileDevice});
    return(
        <div className="main-container">
            {!isTabletOrMobileQuery && !isTabletOrMobileDeviceQuery &&
                <NoteLeftMenu/>
            }
            <NoteRightMenu/>
                
        </div>
    )
}

export default MainContainer;