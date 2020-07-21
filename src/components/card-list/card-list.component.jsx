import React from 'react';
import './card-list.component.css';
import {Card} from '../card/card.component';

export const CardList = props => (
    <div className='card-list'>
        {props.projects.reverse().map(project => (
            <Card key="project.id" project={project} />
        ))}
    </div>
);