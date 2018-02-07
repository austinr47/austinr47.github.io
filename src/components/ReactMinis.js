import React, { Component } from 'react';
import Calculator from './Calculator';
import ToDo from './ToDo';
import Weather from './Weather';
import '../css/ReactMinis.css';
import { Link } from 'react-router-dom';

export default class ReactMinis extends Component {
    render() {
        return (
            <div className="reactmini-main">
                <div className='reactmini-back'><Link to="/" className='reactmini-back'>⇦ Back to portfolio</Link></div>
                <div className="reactmini-main-1">
                    <div className='react-mini-calc'>
                        <Calculator />
                    </div>
                    <div className='react-mini-todo'>
                        <ToDo />
                    </div>
                    <div className='react-mini-weather'>
                        <Weather />
                    </div>
                </div>
            </div>
        );
    }
}