// import styles from './PuzzleList.module.css';
import React from 'react';
import PuzzleLink from '../../components/PuzzleLink/PuzzleLink.js';
import {Link} from 'react-router-dom';
import LocalStorage from '../../core/LocalStorage.js';
import * as allPuzzles from '../puzzles/allPuzzles.js';

export default class PuzzleList extends React.Component {

    static propTypes = {
        // TODO: propTypes
    };

    static allPuzzles = Object.values(allPuzzles).sort((a, b) => {
        let aNumber = +a.name.slice(6);
        let bNumber = +b.name.slice(6);

        return aNumber - bNumber;
    });

    render() {
        let puzzles = PuzzleList.allPuzzles;
        let storagePuzzles = LocalStorage.get('puzzles', {});
        let lastSolvedPuzzle = puzzles.filter(p => !!storagePuzzles[p.name]).pop();
        let lastSolvedIndex = puzzles.indexOf(lastSolvedPuzzle);

        if (LocalStorage.get('devMode', false)) {
            lastSolvedIndex = puzzles.length;
        }

        return (
            <div className='d-flex flex-column'>
                {puzzles.map((puzzle, index) =>
                    <PuzzleLink key={puzzle.name} puzzle={puzzle} locked={index > lastSolvedIndex + 1} />
                )}

                <Link to='/reset' className='link-danger'>
                    Reset progress
                </Link>
            </div>
        );
    }
}