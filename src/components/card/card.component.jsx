import React from 'react';
import './card.component.css'

export const Card = props => (
    <a href={props.project.site}>
        <div className='card-container'>
        <h1 key={props.project.id}> {props.project.name} </h1>
        <p>{props.project.language}</p>
        <p><b>{props.project.langs}</b></p>
    </div>
    </a>
);