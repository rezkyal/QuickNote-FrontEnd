import React from 'react'
import ReactLoading from "react-loading";

import './Loading.scss'

const Loading = (props)=>{
    
    return(
        <div className="splash-screen">
            <div className="splash-container">
                <div className="loading-splash-icon">
                    <ReactLoading type={"bars"} color="black" />
                </div>
                <br/>
                <h3 className="loading-splash-text">
                    {props.message}
                </h3>
            </div>
        </div>
    )
}



export default Loading;