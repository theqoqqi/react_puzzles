// import styles from './PuzzleResult.module.css';
import React from 'react';
import PuzzleLink from '../../components/PuzzleLink/PuzzleLink.js';
import Puzzle1 from '../puzzles/Puzzle1/Puzzle1.js';
import LocalStorage from '../../core/LocalStorage.js';
import {Button} from 'react-bootstrap';
import {Link, useSearchParams} from 'react-router-dom';

let results = {
    solved: {
        classes: 'text-uppercase text-success',
        title: 'Решено!',
        showRestart: false,
    },
    failed: {
        classes: 'text-uppercase text-danger',
        title: 'Неудача',
        showRestart: true,
    }
};

export default function PuzzleResult(props) {
    let [searchParams] = useSearchParams();
    let resultType = searchParams.get('type') || 'failed';
    let puzzle = searchParams.get('puzzle');
    let result = results[resultType];

    return (
        <div className='d-flex flex-column'>
            <h5 className={result.classes}>
                {result.title}
            </h5>
            {result.showRestart &&
                <Link to={'/puzzles/' + puzzle}>
                    Заново
                </Link>
            }
            <Link to='/'>
                Продолжить
            </Link>
        </div>
    );
}