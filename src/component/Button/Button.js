import React from 'react'
import './Button.scss'
import {Icon} from '@blueprintjs/core'

const Button = (props) =>{
    let className="custom-button " + props.className
    let iconName = null
    if (props.icon){
        iconName=(
            <Icon className="icon-margin" icon={props.icon} iconSize={14} />
        )
    }
    return (
        <button {...props} className={className}>
            {iconName}
            <span className="custom-button-text">{props.children}</span>
        </button>
    )
} 

export default Button;