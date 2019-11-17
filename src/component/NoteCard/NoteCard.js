import React from 'react'
import { Card } from '@blueprintjs/core';
import './NoteCard.scss'

export default class NoteCard extends React.Component{
    render(){
        return(
            <Card 
                elevation={2} 
                className="note-card bg-dark-gray" 
                interactive={true}
            >
                <p className="white-font title">Lorem Ipsum</p>
                <p className="white-font time">Created: 17/11/2019 12:00 PM &nbsp;&nbsp;&nbsp;Last edit: 17/11/2019 12:49 PM</p>
                <p className="white-font detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida urna vitae turpis facilisis fermentum. Maecenas dignissim leo ac libero hendrerit, pulvinar gravida est sagittis. Praesent varius semper libero, scelerisque ....</p>
            </Card>
        )
    }
}