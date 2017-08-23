import React, {Component} from 'react';
import {stevens} from './images/Stevens';

export default class Stevens extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stevens: []
        };
    }

    render() {
        const {stevens} = this.state;
        return (
            <ul>
                {stevens && stevens.map(steven => (
                    <li key={steven.title}>
                        <Steven steven={steven}/>
                    </li>
                ))}
            </ul>
        );
    }
}

export function Steven({stevens}) {
    return (
        <div style={{
            padding: '10px',
            clear: 'both'
        }}>
            <img src={stevens.url}
                alt={stevens.title}
                style={{
                    float: 'left',
                    width: 100
                }}/>
                <span>{stevens.title}</span>
        </div>
    );
}