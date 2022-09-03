// import styles from './ResetResults.module.css';
import React from 'react';
import PuzzleLink from '../../components/PuzzleLink/PuzzleLink.js';
import Puzzle1 from '../puzzles/Puzzle1/Puzzle1.js';
import LocalStorage from '../../core/LocalStorage.js';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class ResetResults extends React.Component {

    static propTypes = {
        // TODO: propTypes
    };

    render() {
        let clearStorage = () => {
            let wasEmpty = LocalStorage.isEmpty();

            LocalStorage.clear();

            if (wasEmpty) {
                LocalStorage.set('devMode', true);
            }
        };

        return (
            <div className='d-flex flex-column'>
                <Link to='/' className='link-danger' onClick={clearStorage}>
                    Подтвердить
                </Link>
                <Link to='/' className='link-secondary'>
                    Назад
                </Link>
            </div>
        );
    }
}