import React from 'react';
import "./Header.scss"
import {Popover,Classes} from '@blueprintjs/core'
import Button from './../Button/Button'

export default class Header extends React.Component{
    render(){
        return(
            <header className="header">
                <p className="title-font">
                    QuikNote
                </p>
                <Popover
                        popoverClassName={Classes.POPOVER_CONTENT_SIZING}
                        position="auto"
                >
                    <Button icon="lock" className="white-font purple-pastel-hoverable">Set Password</Button>
                    <div key="input">
                        <label className={Classes.LABEL}>
                            Password:
                            <input autoFocus={true} className={Classes.INPUT} type="text" />
                        </label>
                        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 15 }}>
                            <Button className={"grey-pastel-hoverable cancel-set "+Classes.POPOVER_DISMISS} style={{ marginRight: 10 }}>
                                Cancel
                            </Button>
                            <Button className="red-pastel-hoverable white-font">
                                Set
                            </Button>
                        </div>
                    </div>    
                </Popover>
            </header>
        )
    }
}