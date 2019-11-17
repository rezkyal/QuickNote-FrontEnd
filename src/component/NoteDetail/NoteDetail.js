import React from 'react'
import './NoteDetail.scss'
import Button from './../Button/Button'
import {Popover,H5,Classes} from '@blueprintjs/core'
export default class NoteDetail extends React.Component{
    render(){
        return(
            <div className="main-frame">
                <input placeholder="Title..." type="text" className="note-title" />
                <p>Created: 17/11/2019 12:00 PM &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Last edit: 17/11/2019 12:49 PM</p>
                <textarea placeholder="Text..." className="note-text" />
                <div className="note-option">
                    <Popover
                        popoverClassName={Classes.POPOVER_CONTENT_SIZING}
                        position="auto"
                    >
                        <Button icon="trash" className="delete-note red-pastel-hoverable">Delete note</Button>
                        <div>
                            <H5>Confirm deletion</H5>
                            <p>Are you sure you want to delete these note? You won't be able to recover them.</p>
                            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 15 }}>
                                <Button className={"cancel-delete-note grey-pastel-hoverable "+Classes.POPOVER_DISMISS}>
                                    Cancel
                                </Button>
                                <Button className="delete-note red-pastel-hoverable">
                                    Delete
                                </Button>
                            </div>
                        </div>
                    </Popover>
                    
                </div>
            </div>
        )
    }
}