import React from 'react';
import './card.component.css'

export const Card = props => (
    <div className='card-container'>
        <center><img alt='project' src={props.project.url}></img></center>
        <h1 key={props.project.id}> {props.project.name} </h1>
        <p>{props.project.language}</p>
        <p><a href={props.project.site}>Check it out!</a></p>
    </div>
);