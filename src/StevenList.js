import React, {Component} from 'react';
// import StevePics from './images/Stevens';

export default class Stevens extends Component {
    
    render() {
        const {stevens} = this.props;
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

export function Steven({steven}) {
    return (
        <div style={{
            padding: '10px',
            clear: 'both'
        }}>
            <img src={steven.url}
                alt={steven.title}
                style={{
                    float: 'left',
                    width: 100
                }}/>
                <span>{steven.title}</span>
        </div>
    );
}